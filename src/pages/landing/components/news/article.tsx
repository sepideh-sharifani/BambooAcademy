

export default function Article() {
  return (
    <div
      className={`relative w-[37%] h-[67vh] my-8 max-lg:w-[90%] max-lg:mx-auto `}
    >
      <article
        className={`absolute top-0 left-0  border-2 border-gray w-full h-full  max-w-[48.625rem] max-h-[45.3125rem] 
      flex flex-col justify-center p-4`}
        dir="rtl"
      >
        <h2 className={`text-[#004458] text-3xl py-4`}>{"آخبار و مقالات"}</h2>
        <p className={`text-[#7E7E7E] text-ellipsis font-WYekan text-2xl`}>
          {
            " دسترسی به جدیدترین و مفیدترین مقالات تالیف شده توسط معتبرترین روزنامه هاو رسانه ها در دسته بندی های گوناگونی همچون طراحی ، هنر، برنامه نویسی ، اقتصاد ، فلسفه ،فیزیک ،شیمی و ... "
          }
        </p>
        <button
          className={`absolute bg-slate-800 font-WYekan text-2xl text-white p-3 right-3/4 bottom-0 origin-center translate-y-1/2 translate-x-1/2 truncate`}
        >
          مشاهده‌ مقالات
        </button>
      </article>
    </div>
  );
}
