export default function Suggestions() {
  return (
    <section className={`w-full  h-[70vh] flex flex-row bg-[#088568]`}>
      <div
        className={`h-full  relative grow flex flex-col items-center justify-center w-1/2 max-lg:w-full`}
      >
        <div className="flex flex-col items-center w-3/5 h-full max-lg:w-4/5 justify-evenly">
          <h2 className={`max-md:text-3xl text-white self-end font-Lalezar text-5xl`}>پیشنهاد و انتقاد</h2>
          <input
            type="text"
            dir="rtl"
            placeholder="ایمیل خود را وارد کنید ..."
            className={`border-0 p-3 bg-[#00775B] border-b-2 font-WYekan border-b-[#0CDBAB]  text-white text-2xl focus:outline-none w-full`}
          />
          <input
            type="text"
            dir="rtl"
            placeholder="متن خود را وارد کنید ... "
            className={`border-0 p-3 bg-[#00775B] border-b-2 font-WYekan border-b-[#0CDBAB] text-white text-2xl focus:outline-none w-full`}
          />
          <button className={`px-9 py-3 text-white bg-[#004458] text-2xl`}>
            ارسال
          </button>
        </div>
      </div>
      <div className={` bg-suggestions grow w-1/2 max-lg:hidden  bg-no-repeat bg-right bg-cover max-[1600px]:w-[30%]`}></div>
    </section>
  );
}
