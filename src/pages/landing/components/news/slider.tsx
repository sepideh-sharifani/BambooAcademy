import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

export default function Slider(){

    return <div
    className={` p-2 flex flex-col justify-center items-center w-[63%] h-[57vh] max-lg:w-full`}
  >
    <div
      className={` border-2 border-gray max-w-[48.1875rem] max-h-[32.625rem] w-full h-full relative flex flex-col justify-end bg-news bg-cover`}
    >
      <div
        className={`h-[5.6rem] bg-blue-500 opacity-[.85] flex justify-center items-center`}
      >
        <p className={`text-white text-2xl truncate`} dir="rtl">
          {"مقایسه ی راکت با فریمورک های جدید جاوااسکریپت"}
        </p>
      </div>
    </div>
    <div
      className={`max-w-[39.375rem] max-h-[6rem] w-full h-full border-2 border-[#088568] flex justify-between items-center px-5 border-t-0`}
    >
      <button className={`text-[3rem] text-[#088568]`}>
        <IoChevronBack />
      </button>
      <button className={`text-[3rem] text-[#088568]`}>
        <IoChevronForward></IoChevronForward>
      </button>
    </div>
  </div>
}