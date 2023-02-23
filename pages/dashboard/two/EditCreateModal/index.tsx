import React, { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { courseContextStateType } from "../../../../src/pages/courses/@types/context/context.type";
import { AXIOS } from "../../../../src/pages/courses/config/axios.config";
import { ApiRoutes } from "../../../../src/pages/courses/constants/api.config";
import { AiOutlineClose } from "react-icons/ai";

interface IEditCreateModal {
  openModal: boolean;
  onClose: () => void;
  data?: courseContextStateType | undefined;
}
const EditCreateModal = ({
  openModal,
  onClose,
  data,
}: IEditCreateModal) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<courseContextStateType>();
  let reqToServer
  const onSubmit: SubmitHandler<courseContextStateType> = (data) =>{
    console.log(data); //data ro bayad pass bedim;
    const token = localStorage.getItem('user_Data');
    if (token && token.length) {
    reqToServer = ()=>{
      const config = {
        headers:{Aythorization:`Bearer${token}`}
      }
      if(data){
        const bodyParams = {key:data}
      const res = AXIOS.post(ApiRoutes.CreateCourse,bodyParams,config)
      res.then(res=>{
        console.log(res.data)
        if(res.status ==200)
        {alert("با موفقیت ثبت شد")}
        else alert("دوباره امتخان کنید")
      })
      
    }else if(data === null || data === undefined){
      const bodyParams = {key:data}
      const res = AXIOS.put(ApiRoutes.CreateCourse,bodyParams,config)
      res.then(res=>{
        console.log(res.data)
        if(res.status ==200)
        {alert("با موفقیت ثبت شد")}
        else alert("دوباره امتخان کنید")
      })
    }
    
    }}
  }
  useEffect(()=>{
    reqToServer()
  },[])

  const [teacherNameId, setTeacherNameId] = useState([
    { teacherName: "ahmad1377", teacherId: "63ed4eb332509560c4bcd6b3" },
  ]);
  const [lessonNameId, setLessonNameId] = useState([
    { lessonName: "Reactjs", lessonId: "63e77aef7bd118083fef2dcb" },
  ]);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    let result = event.target.value.replace(/[^a-z][^\u0600-\u06FF\s]+$/gi, "");
    setMessage(result);
  };
  const getAllTeacher = useCallback(async () => {
    const response = await AXIOS.get(ApiRoutes.GetAllTeacher);
    if (response.status == 200) {
      setTeacherNameId(
        response.data.result.map((item: any) => {
          return { teacherName: item.fullName, teacherId: item._id };
        })
      );
    }
  }, []);

  const getAlllesson = useCallback(async () => {
    const response = await AXIOS.get(ApiRoutes.GetAllLesson);
    if (response.status == 200) {
      setLessonNameId(
        response.data.result.map((item: any) => ({
          lessonName: item.lessonName,
          lessonId: item._id,
        }))
      );
    }
  }, []);
  useEffect(() => {
    getAllTeacher();
    getAlllesson();
  }, []);

  return (
    <div className={`${openModal ? "visible" : "invisible"}`}>
      <div
        className="bg-[#0000000a] fixed top-0 left-0 right-0 bottom-0 animate-showingup"
        onClick={onClose}
      />
      <div
        className={`animate-showingup fixed inset-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto h-auto`}
      >
        <div className="relative w-full max-w-lg h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              onClick={onClose}
              type="button"
              className="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <AiOutlineClose  />
            </button>
            <div className="p-6 mb-6">
              <div className="flex justify-start pb-6 text-2xl font-medium text-gray-600">
                <p>کورس</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                  <div className="col-span-2">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      <span className="text-red-600">*</span>
                      عنوان کورس
                    </label>
                    <input
                      {...register("title", { required: true })}
                      type="text"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
                      placeholder="ReactJs"
                      value={data?data.title:message}
                      onChange={handleChange}
                    />
                  {errors.title?.type && <p className="text-xs text-red-600">این فیلد الزامی است</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="cost"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      <span className="text-red-600">*</span>
                      هزینه{"(تومان )"}
                    </label>
                    <input
                      {...register("cost", { required: true })}
                      value={data?data.cost:""}
                      type="number"
                      min={'10000'}
                      max={'5000000'}
                      id="cost"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
                      placeholder="100000"
                    />
                   {errors.cost?.type && <p className="text-xs text-red-600">این فیلد الزامی است</p>}
                  </div>
                  <div >
                    <label
                      htmlFor="capacity"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      <span className="text-red-600">*</span>
                      ظرفیت
                    </label>
                    <input
                      {...register("capacity", { required: true })}
                      value={data?data.capacity:""}
                      type="number"
                      max={100}
                      min={1}
                      id="capacity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
                      placeholder="5 نفر"
                    />
                  {errors.capacity?.type && <p className="text-xs text-red-600">این فیلد الزامی است</p>}
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="startdate"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      <span className="text-red-600">*</span>
                      تاریخ شروع
                    </label>
                    <input
                      {...register("startDate", { required: true })}
                      value={data?data.startDate.slice(0,10):""}
                      type="date"
                      id="startdate"
                      min={"2023-1-1"}
                      max={"2026-12-12"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
                    />
                  {errors.startDate?.type && <p className="text-xs text-red-600">این فیلد الزامی است</p>}
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="enddate"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      <span className="text-red-600">*</span>
                      تاریخ پایان
                    </label>
                    <input
                      {...register("endDate", { required: true })}
                      value={data?data.endDate.slice(0,10):""}
                      type="date"
                      id="enddate"
                      min={"2023-1-1"}
                      max={"2026-12-12"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
                    />
                  {errors.endDate?.type && <p className="text-xs text-red-600">این فیلد الزامی است</p>}
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="teacher"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      <span className="text-red-600">*</span>
                      مدرس
                    </label>
                    <select
                      {...register("teacherId", { required: true })}
                      value={data?data.teacherName:""}
                      id="teacher"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
                    >
                      {teacherNameId.map((item) => (
                        <option key={item.teacherId} value={item.teacherId}>
                          {item.teacherName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="lesson"
                      className="block mb-2 text-sm font-medium text-gray-500"
                    >
                      <span className="text-red-600">*</span>
                      نام درس
                    </label>
                    <select
                      {...register("lessonId", { required: true })}
                      value={data?data.lessonName:""}
                      id="lesson"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
                    >
                      {lessonNameId.map((item) => (
                        <option key={item.lessonId} value={item.lessonId}>{item.lessonName}</option>
                      ))}
                    </select>
                    <p className="text-[#0b7a9caf] text-xs flex justify-start font-medium">
                      در صورتی که نام درس وجود نداشت باید در بخش درس ها آن را
                      ثبت کنید
                    </p>
                  </div>
                </div>
                <div className="flex justify-evenly">
                  <button
                    type="submit"
                    className="text-white bg-[#004458] hover:bg-[#01607d] focus:ring-4 focus:outline-none focus:ring-[#0b7a9caf] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    تایید
                  </button>
                  <button
                    type="button"
                    onClick={()=>onClose()}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                  >
                    لغو
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCreateModal;
