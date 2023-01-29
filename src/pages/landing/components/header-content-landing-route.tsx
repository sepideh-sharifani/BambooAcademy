import { useNavigate } from "react-router";

export default function HeaderContentLandingRoute() {
  const navigate = useNavigate();

  return (
    <header className="bg-[#088568] w-full relative">
      <div
        className="w-full bg-fixed bg-landingHeader h-[100vh] flex flex-col justify-center bg-[#088568] p-[5%] opacity-50"
        dir="rtl"
      >
        <h1 className={`text-white text-6xl font-Lalezar max-lg:text-5xl max-sm:text-4xl`}>
          {"باید راه بهتری برای آموزش ساخته میشد، پس ما ساختیمش  ..."}
        </h1>
        <p className="pt-10 text-3xl text-white font-WYekan max-sm:text-2xl">
          {
            " سایت بامبو با  هدف تولید و انتشار محتوای با کیفیت آموزشی  و همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امیدواریم با راهکارهای نوین ، فرصتی برای افراد خواهان پیشرفت فراهم کنیم  "
          }
        </p>
      </div>
      <button
        className={`bg-white px-10 py-5 absolute  bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2  font-WYekan text-3xl  max-sm:text-xl`}
        onClick={() => {
          navigate("./../courses");
        }}
      >{`مشاهده دوره‌ها`}</button>
    </header>
  );
}
