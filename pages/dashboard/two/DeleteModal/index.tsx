import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { courseContextStateType } from "../../../../src/pages/courses/@types/context/context.type";
import { AXIOS } from "../../../../src/pages/courses/config/axios.config";
import { ApiRoutes } from "../../../../src/pages/courses/constants/api.config";

interface IDeleteModal {
  openModal: boolean;
  onClose: () => void;
  data: courseContextStateType;
}
const DeleteModal = ({ openModal, onClose, data }: IDeleteModal) => {
  const [openAlert,setOpenAlert]=useState(false)
  let callDeleteFunction = false 
  const deleteCourse = async () => {
    console.log(data.courseId)
    const response = await AXIOS.delete(
      ApiRoutes.DelCourse.concat(`${data.courseId}`)
    );
    if (response.status !== 200) {
      setOpenAlert(true)
      return (
        <div
          className={`animate-slideDown fixed top-0 left-0 right-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto h-auto ${openAlert ? "visible" :"invisible" }`}
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 text-center">
                <div className="flex justify-center items-center p-4">
                  <RiErrorWarningLine size={60} />
                </div>
                <h3 className="mb-5 text-lg font-normal text-gray-500">
                  خطای زیر رخ داده لطفا دوباره تلاش کنید
                  <br></br>
                  <p className="text-center text-md text-gray-500">{response.statusText}</p>
                </h3>
                <button
                  onSubmit={()=>setOpenAlert(false)}
                  type="submit"
                  className="text-white bg-[#004458] hover:bg-[#01607d] focus:ring-4 focus:outline-none focus:ring-[#0b7a9caf] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  تایید
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else{
      alert("کورس مورد نظر حذف شد")
    }
  };

  const onSubmit = () => {
    console.log("onsubmit")
    onClose()
    //for dont repeatly call and call it in useEffect
    callDeleteFunction = true
  };
  useEffect(() => {
    if(callDeleteFunction){
      deleteCourse()
      callDeleteFunction = false
    }
  }, []);
  return (
    <div className={`${openModal ? "visible" : "invisible"}`}>
      <div
        className="bg-[#00000030] fixed top-0 left-0 right-0 bottom-0 animate-showingup"
        onClick={onClose}
      />
      <div
        className={`animate-showingup fixed inset-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto h-auto`}
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className=" bg-white rounded-lg shadow">
            <button
              onClick={onClose}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <AiOutlineClose  />
            </button>
            <div className="p-6 text-center">
              <div className="flex justify-center items-center p-4">
                <RiErrorWarningLine size={60} />
              </div>
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                آیا مطمئن هستید می‌خواهید این کورس را حذف کنید؟
              </h3>
              <button
                onSubmit={onSubmit}
                type="submit"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-2"
              >
                بله
              </button>
              <button
                onClick={onClose}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
              >
                خیر
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
