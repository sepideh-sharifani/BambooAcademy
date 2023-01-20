import { convertToRem } from "../../../helpers";

export default function LandingCourses() {
  return (
    <div
      className={`w-full  bg-white h-[67.5rem] flex flex-row `}
    >
      <div
        className={`relative w-[${convertToRem(
          782
        )}] h-[${convertToRem(723)}]`}
      >
        <div
          className={`absolute top-0 left-0 border-2 border-gray w-full h-full `}
        >
          <button
            className={`absolute bg-slate-800 text-white p-3 right-3/4 bottom-0 origin-center translate-y-1/2 translate-x-1/2`}
          >
            مشاهده‌ دوره‌ها
          </button>
        </div>
      </div>
      <div
        className={`grid gap-2 grid-rows-20 grid-cols-20  w-[${convertToRem(
          1200
        )}] h-full relative `}
      >
        <div className="z-10 col-start-2 col-end-8 row-start-2 bg-yellow-500 row-end-12"></div>
        <div className="z-10 col-start-9 row-start-4 col-end-20 bg-fuchsia-500 row-end-11"></div>
        <div className="z-10 col-start-3 col-end-8 bg-indigo-500 row-start-13 row-end-20"></div>
        <div className="z-10 col-start-9 bg-pink-500 row-start-12 col-end-18 row-end-19"></div>
        <div
          className={`border-[#09B28B] absolute border-2 h-3/4 w-3/4 top-1/3 left-2/3 -translate-x-2/3 -translate-y-1/3 z-0`}
        ></div>
      </div>
    </div>
  );
}
