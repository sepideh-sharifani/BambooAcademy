import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineFolderAdd,
  AiOutlineClose,
} from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";

const [popupDeleteModal, setPopupDeleteModal] = useState(false);
const [popupEditModal, setPopupEditModal] = useState(false);
const [popupCreateModal, setPopupCreateModal] = useState(false);
const two = () => {
  const handlePopDeleteModal = () => {
    setPopupDeleteModal(false);
  };

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
                      عنوان
                      <BsArrowDown />
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
                    <th scope="col" className="px-1"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-slate-400 [&>tr]:hover:bg-gray-100">
                  <tr className="group [&>td]:py-4 [&>td]:text-md [&>td]:text-slate-400 [&>td]:text-center xs:[&>td]:text-right  ">
                    <td className="px-0.5 md:px-7">ReactJs</td>
                    <td className="px-0.5 md:px-7">sajadjad</td>
                    <td className="px-0.5 md:px-7 ">21-02-1401</td>
                    <td className="px-0.5 md:px-7">21-02-1401</td>
                    <td className="px-0.5 md:px-7">3</td>
                    <td className="px-0">100000</td>
                    <td className=" relative group px-1 text-lg flex md:flex-row flex-col md:justify-evenly md:items-center gap-2 [&>span]:cursor-pointer">
                      <button
                        onClick={() => setPopupCreateModal(true)}
                        className="text-blue-500 invisible group-hover:animate-showingup group-hover:visible"
                      >
                        <AiFillEdit />
                      </button>
                      <CreateModal />
                      <button
                        onClick={() => setPopupEditModal(true)}
                        className="text-green-500 invisible group-hover:animate-showingup group-hover:visible"
                      >
                        <AiOutlineFolderAdd />
                      </button>
                      <EditModal />
                      <button
                        onClick={() => setPopupDeleteModal(true)}
                        className="text-red-500 invisible group-hover:animate-showingup group-hover:visible"
                      >
                        <AiOutlineDelete />
                      </button>
                      <DeleteModal />
                    </td>
                  </tr>
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


const CreateModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <div className={`${popupCreateModal ? "visible" : "invisible"}`}>
      <div
        className="bg-[#00000030] fixed top-0 left-0 right-0 bottom-0 animate-showingup"
        onClick={() => setPopupDeleteModal(false)}
      />
      <div
        className={`animate-showingup fixed inset-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto h-auto`}
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <AiOutlineClose onClick={() => setPopupDeleteModal(false)} />
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>First Name</label>
              <input {...register("firstName")} />
              <label>Gender Selection</label>
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data)//data ro bayad pass bedim;

  return (
    <div className={`${popupEditModal ? "visible" : "invisible"}`}>
      <div
        className="bg-[#00000030] fixed top-0 left-0 right-0 bottom-0 animate-showingup"
        onClick={() => setPopupEditModal(false)}
      />
      <div
        className={`animate-showingup fixed inset-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto h-auto`}
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <AiOutlineClose onClick={() => setPopupEditModal(false)} />
            </button>
            <div>
              <p>کورس</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>عنوان</label>
              <input {...register("title")} className="" />
              <label>هزینه</label>
              <input {...register("cost")} className="" />
              <label>ظرفیت</label>
              <input {...register("capacity")} className="" />
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                مدرس
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option>harsha</option>
                  <option>sajad</option>
                  <option>hasan</option>
                </select>
              </div>
              <button onClick={() => setPopupEditModal(false)}>لغو</button>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeleteModal = () => {
  return (
    <div className={`${popupDeleteModal ? "visible" : "invisible"}`}>
      <div
        className="bg-[#00000030] fixed top-0 left-0 right-0 bottom-0 animate-showingup"
        onClick={() => setPopupDeleteModal(false)}
      />
      <div
        className={`animate-showingup fixed inset-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto h-auto`}
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <AiOutlineClose onClick={() => setPopupDeleteModal(false)} />
            </button>
            <div className="p-6 text-center">
              <div className="flex justify-center items-center p-4">
                <RiErrorWarningLine size={60} />
              </div>
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                آیا مطمئن هستید می‌خواهید این کورس را حذف کنید؟
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-2"
              >
                بله
              </button>
              <button
                onClick={() => setPopupDeleteModal(false)}
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

// const [popupEditModal, setPopupEditModal] = useState(false);
// const { register, handleSubmit } = useForm();
// const onSubmit: SubmitHandler<any> = (data) => console.log(data); //data ro bayad pass bedim;
// return (
//   <div className={`${popupEditModal ? "visible" : "visible"}`}>
//     <div
//       className="bg-[#00000030] fixed top-0 left-0 right-0 bottom-0 animate-showingup"
//       onClick={() => setPopupEditModal(false)}
//     />
//     <div
//       className={`animate-showingup fixed inset-0 flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto h-auto`}
//     >
//       <div className="relative w-full max-w-lg h-auto">
//         <div className="relative bg-white rounded-lg shadow">
//           <button
//             type="button"
//             className="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
//           >
//             <AiOutlineClose onClick={() => setPopupEditModal(false)} />
//           </button>
//           <div className="p-6 mb-4">
//             <div className="flex justify-start p-2 text-2xl font-medium">
//               <p>کورس</p>
//             </div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               {/* <label htmlFor="title">عنوان</label>
//               <input id="title" {...register("title")} className="" />
//               <label htmlFor="cost">هزینه</label>
//               <input id="cost" {...register("cost")} className="" />
//               <label htmlFor="capacity">ظرفیت</label>
//               <input id="capacity" {...register("capacity")} className="" /> */}
//               <div className="grid gap-6 mb-6 md:grid-cols-4">
//                 <div className="col-span-2">
//                   <label
//                     htmlFor="title"
//                     className="block mb-2 text-sm font-medium text-gray-600"
//                   >
//                     عنوان کورس
//                   </label>
//                   <input
//                   {...register("title")}
//                     type="text"
//                     id="title"
//                     className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
//                     placeholder="ReactJs"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="cost"
//                     className="block mb-2 text-sm font-medium text-gray-500"
//                   >
//                     هزینه
//                   </label>
//                   <input
//                   {...register("cost")}
//                     type="text"
//                     min={10000}
//                     id="cost"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
//                     placeholder="1000000 تومان"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="capacity"
//                     className="block mb-2 text-sm font-medium text-gray-500"
//                   >
//                     ظرفیت
//                   </label>
//                   <input
//                   {...register("capacity")}
//                     type="number"
//                     min={1}
//                     id="capacity"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
//                     placeholder="5 نفر"
//                     required
//                   />
//                 </div>
//                 <div className="col-span-2">
//                   <label
//                     htmlFor="startdate"
//                     className="block mb-2 text-sm font-medium text-gray-500"
//                   >
//                     تاریخ شروع
//                   </label>
//                   <input
//                   {...register("startdate")}
//                     type="date"
//                     id="startdate"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
//                     required
//                   />
//                 </div>
//                 <div className="col-span-2">
//                   <label
//                     htmlFor="enddate"
//                     className="block mb-2 text-sm font-medium text-gray-500"
//                   >
//                     تاریخ پایان
//                   </label>
//                   <input
//                   {...register("enddate")}
//                     type="date"
//                     id="enddate"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
//                     required
//                   />
//                 </div>
//                 <div className="col-span-2">
//                   <label
//                     htmlFor="teacher"
//                     className="block mb-2 text-sm font-medium text-gray-500"
//                   >
//                     مدرس
//                   </label>
//                   <select
//                   {...register("title")}
//                     required
//                     id="teacher"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5"
//                   >
//                     <option selected value="0">karim</option>
//                     <option value="1">javid</option>
//                     <option value="2">ali</option>
//                     <option value="2">hasan</option>
//                     <option value="3">gholi</option>
//                   </select>
//                 </div>
//                 <div className="col-span-2">
//                   <label
//                     htmlFor="teacher"
//                     className="block mb-2 text-sm font-medium text-gray-500"
//                   >
//                     نام درس
//                   </label>
//                   <select
//                     required
//                     id="teacher"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0b7a9caf] border-indigo-[#0b7a9caf] focus:border-4 outline-none focus:border-[#0b7a9c5d] block w-full p-2.5" 
//                   >
//                     <option selected value="0">java</option>
//                     <option value="1">javid</option>
//                     <option value="2">ali</option>
//                     <option value="2">hasan</option>
//                     <option value="3">gholi</option>
//                   </select>
//                   <p className="text-[#0b7a9caf] text-xs flex justify-start font-medium" >در صورتی که نام درس وجود نداشت باید در بخش درس ها آن را ثبت کنید</p>
//                 </div>

//               </div>
//               <div className="flex justify-evenly">
//                 <button
//                   type="submit"
//                   className="text-white bg-[#004458] hover:bg-[#01607d] focus:ring-4 focus:outline-none focus:ring-[#0b7a9caf] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={() => setPopupEditModal(false)}
//                   type="button"
//                   className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
//                 >
//                   لغو
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };