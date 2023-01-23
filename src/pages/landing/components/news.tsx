import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

export default function News() {
  return (
    <div
      className={`w-full  h-[100vh] flex flex-row max-lg:flex-col max-lg:h-auto`}
    >
      <div
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
      <div
        className={`relative w-[37%] h-[67vh] my-8 max-lg:w-[90%] max-lg:mx-auto `}
      >
        <div
          className={`absolute top-0 left-0  border-2 border-gray w-full h-full  max-w-[48.625rem] max-h-[45.3125rem] 
          flex flex-col justify-center p-4`}
          dir="rtl"
        >
          <h3 className={`text-[#004458] text-3xl py-4`}>
            {"آخبار و مقالات"}
          </h3>
          <p className={`text-[#7E7E7E] text-xl text-ellipsis`}>
            {
            " دسترسی به جدیدترین و مفیدترین مقالات تالیف شده توسط معتبرترین روزنامه هاو رسانه ها در دسته بندی های گوناگونی همچون طراحی ، هنر، برنامه نویسی ، اقتصاد ، فلسفه ،فیزیک ،شیمی و ... "
            }
          </p>
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
