import React, { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineFolderAdd,
  AiOutlineClose,
  AiFillDelete,
} from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { courseContextStateType } from "../../../src/pages/courses/@types/context/context.type";
import { courseDataType } from "../../../src/pages/courses/@types/api.type";
import { AXIOS } from "../../../src/pages/courses/config/axios.config";
import { ApiRoutes } from "../../../src/pages/courses/constants/api.config";
import DeleteModal from "./DeleteModal";
import EditCreateModal from "./EditCreateModal";

const two = () => {
  const [allCourse, setAllCourse] = useState<courseContextStateType[]>();
  const [popupDeleteModal, setPopupDeleteModal] = useState(false);
  const [popupEditCreateModal, setPopupEditCreateModal] = useState(false);

  const allCoursesFunction = useCallback(async () => {
    const response = await AXIOS.get(ApiRoutes.GetAllCourses);
    if (response.status == 200) {
      setAllCourse(
        response.data.result.map((item: courseDataType) => {
          return {
            courseId: item._id,
            title: item.title,
            cost: item.cost,
            endDate: item.endDate,
            startDate: item.startDate,
            capacity: item.capacity,
            teacherName: item.teacher.fullName,
            lessonName: item.lesson.lessonName,
          };
        })
      );
    }
  }, []);
  useEffect(() => {
    allCoursesFunction();
  }, []);

  return (
    <div className="w-full shadow-all shadow-slate-300 rounded-xl ">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 p-2">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="[&>th]:py-3 [&>th]:text-md [&>th]:font-normal  [&>th]:text-center xs:[&>th]:text-right [&>th]:text-gray-600">
                    <th scope="col" className="px-0.5 md:px-6">
                      <span className="inline-flex items-center">
                        عنوان
                        <BsArrowDown />
                      </span>
                    </th>
                    <th scope="col" className="px-0.5 md:px-6">
                      <span className="inline-flex items-center">
                        مدرس
                        <BsArrowUp />
                      </span>
                    </th>
                    <th scope="col" className="px-0.5 md:px-6">
                      <span className="inline-flex items-center">
                        تاریخ شروع
                        <BsArrowUp />
                      </span>
                    </th>
                    <th scope="col" className="px-0.5 md:px-6">
                      تاریخ پایان
                    </th>
                    <th scope="col" className="px-0.5 md:px-6">
                      ظرفیت
                    </th>
                    <th scope="col" className="px-0">
                      قیمت {"(تومان)"}
                    </th>
                    <th scope="col" className="px-1 flex place-content-center">
                      <button
                        onClick={() => setPopupEditCreateModal(true)}
                        className="text-[#00a0acghu] font-black hover:text-[#43cbd5ghu]"
                      >
                        <AiOutlineFolderAdd size={25} fontWeight={50}/>
                      </button>
                      <EditCreateModal
                        openModal={popupEditCreateModal}
                        onClose={() => setPopupEditCreateModal(false)}
                      />{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-slate-400">
                  {allCourse?.map((course: courseContextStateType, index) => (
                    <tr
                      className="group [&>td]:py-4 [&>td]:text-md [&>td]:text-slate-400 [&>td]:item-center xs:[&>td]:text-right [&>td]:hover:text-white hover:bg-[#1c79958a] duration-100 "
                      key={index}
                    >
                      <td className="px-0.5 md:px-7">{course.title}</td>
                      <td className="px-0.5 md:px-7">{course.teacherName}</td>
                      <td className="px-0.5 md:px-7 ">
                        {course.startDate.slice(0, 10)}
                      </td>
                      <td className="px-0.5 md:px-7">
                        {course.endDate.slice(0, 10)}
                      </td>
                      <td className="px-0.5 md:px-7">{course.capacity}</td>
                      <td className="px-0">{course.cost}</td>
                      <td className=" relative group text-center text-lg flex md:flex-row flex-col md:justify-evenly md:items-center gap-1 [&>span]:cursor-pointer ">
                        <button
                          onClick={() => setPopupEditCreateModal(true)}
                          className="text-[#60f96c] invisible font-bold group-hover:animate-showingup group-hover:visible duration-50 cursor-pointer"
                        >
                          <AiFillEdit size={20} />
                        </button>
                        <EditCreateModal
                          data={course}
                          openModal={popupEditCreateModal}
                          onClose={() => setPopupEditCreateModal(false)}
                        />
                        <button
                          onClick={()=>setPopupDeleteModal(true)}
                          className="text-[#ff6969] invisible font-bold group-hover:animate-showingup group-hover:visible duration-50 cursor-pointer"
                        >
                          <AiFillDelete size={20}/>
                        </button>
                        <DeleteModal
                          openModal={popupDeleteModal}
                          onClose={() => setPopupDeleteModal(false)}
                          data={course}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default two;
