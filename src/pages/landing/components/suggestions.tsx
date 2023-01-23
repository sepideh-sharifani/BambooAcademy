
// after:content-[''] after:absolute after:w-0 after:h-0 after:top-0 after:left-full
// after:border-t-[#088568] after:border-t-[23.4375rem]
// after:border-l-[#088568] after:border-l-[5rem]
// after:border-r-transparent after:border-r-[5rem]
// after:border-b-transparent after:border-b-[23.4375rem]`}
export default function Suggestions() {
  return (
    <div className={`w-full  h-[70vh] flex flex-row bg-[#088568]`}>
      <div
        className={`h-full  relative grow flex flex-col items-center justify-center w-1/2 max-lg:w-full`}
      >
        <div className="flex flex-col items-center w-3/5 h-full max-lg:w-4/5 justify-evenly">
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
      <div className={` bg-suggestions grow w-1/2 max-lg:hidden`}></div>
    </div>
  );
}
