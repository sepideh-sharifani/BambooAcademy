import { convertToRem } from "../../../helpers";

export default function Suggestions() {
  return (
    <div className={`w-full  h-[${convertToRem(750)}] flex flex-row `}>
      <div
        className={`h-full bg-[#088568] relative grow flex flex-col items-center justify-center w-1/2
        after:content-[''] after:absolute after:w-0 after:h-0 after:top-0 after:left-full
        after:border-t-[#088568] after:border-t-[23.4375rem]
        after:border-l-[#088568] after:border-l-[5rem]
        after:border-r-transparent after:border-r-[5rem]
        after:border-b-transparent after:border-b-[23.4375rem]`}
      >
        <div className="flex flex-col items-center w-3/5 h-full justify-evenly">
          <h2 className={`text-3xl text-white self-end`}>پیشنهاد و انتقاد</h2>
          <input
            type="text"
            dir="rtl"
            className={`border-0 p-3 bg-[#00775B] border-b-2 border-b-[#0CDBAB]  text-white text-2xl focus:outline-none w-full`}
          />
          <input
            type="text"
            dir="rtl"
            className={`border-0 p-3 bg-[#00775B] border-b-2 border-b-[#0CDBAB] text-white text-2xl focus:outline-none w-full`}
          />
          <button className={`px-9 py-3 text-white bg-[#004458] text-2xl`}>
            ارسال
          </button>
        </div>
      </div>
      <div className={`bg-blue-400 grow w-1/2`}></div>
    </div>
  );
}
