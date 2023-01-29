import { useNavigate } from "react-router-dom";

export default function Article() {
  const navigate = useNavigate();
  return (
    <div className={`relative  h-full w-2/5 max-lg:h-[40%]  max-lg:w-full`}>
      <article
        className={`absolute top-0 left-0 border-2 border-gray w-full h-[65vh] max-lg:h-[90%] flex flex-col justify-center p-4 `}
        dir="rtl"
      >
        <h2 className={`text-[#004458] font-Lalezar text-6xl max-md:text-4xl py-4`}>{"دوره های آموزشی"}</h2>
        <p className={`text-[#7E7E7E] text-2xl max-sm:text-xl text-ellipsis font-WYekan`}>
          {
            "دسترسی به باکیفیت ترین دوره های  آموزشی آنلاین با تدریس برترین  اساتید ایران  در دسته بندی های گوناگونی همچون طراحی ، برنامه نویسی ، اقتصاد فلسفه ، فیزیک ،شیمی، ریاضی و ..."
          }
        </p>
        <button
          className={`absolute font-WYekan text-2xl bg-slate-800 text-white p-3 right-3/4 bottom-0 origin-center translate-y-1/2 translate-x-1/2 truncate`}
          onClick={() => {
            navigate("./../courses");
          }}
        >
          مشاهده‌ دوره‌ها
        </button>
      </article>
    </div>
  );
}
