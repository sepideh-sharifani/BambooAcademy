import { convertToRem } from "../../../helpers";
import { IoChevronBack } from "react-icons/io5"; 
import { IoChevronForward } from "react-icons/io5"; 
export default function News() {
  return (
    <div className={`w-full  h-[${convertToRem(1080)}] flex flex-row`}>
      <div className={`grow p-2 flex flex-col justify-center items-center`}>
        <div className={` border-2 border-gray max-w-[48.1875rem] max-h-[32.625rem] w-full h-full relative flex flex-col justify-end`}>
            <div className={`h-[${convertToRem(128)}] bg-blue-500 opacity-[.85] flex justify-center items-center`}>
                <p className={`text-white text-2xl`}>{"مقایسه ی راکت با فریمورک های جدید جاوااسکریپت"}</p>
            </div>
        </div>
        <div className={`max-w-[39.375rem] max-h-[6rem] w-full h-full border-2 border-[#088568] flex justify-between items-center px-5 border-t-0`}>
            <button className={`text-[3rem] text-[#088568]`}><IoChevronBack/></button>
            <button className={`text-[3rem] text-[#088568]`}><IoChevronForward></IoChevronForward></button>
        </div>
      </div>
      <div
        className={`relative grow  `}
      >
        <div
          className={`absolute top-0 left-0  border-2 border-gray w-full h-full  max-w-[48.625rem] max-h-[45.3125rem]`}
        >
          <button
            className={`absolute bg-slate-800 text-white p-3 right-3/4 bottom-0 origin-center translate-y-1/2 translate-x-1/2`}
          >
            مشاهده‌ مقالات
          </button>
        </div>
      </div>

    </div>
  );
}
