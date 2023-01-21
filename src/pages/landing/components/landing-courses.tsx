// import { convertToRem } from "../../../helpers";
import React from "react"

interface BoxProps {
  children: React.ReactNode;
  buttonText: string;
  logo: string;
}

function Box({ buttonText, logo} : BoxProps){
    return <div className={`bg-inherit flex flex-col justify-around items-center`}>
      <div className={`bg-js w-full h-[100px] bg-cover bg-center `}></div>
      <button className={`px-2 py-4 bg-white`} >{`${buttonText}`}</button>
    </div>
}

export default function LandingCourses() {
  return (
    <div
      className={`w-full  bg-white h-[100vh] flex flex-row max-lg:flex-col `}
    >
      <div
        className={`relative  h-full w-2/5 max-lg:h-[40%]  max-lg:w-full`}
      >
        <div
          className={`absolute top-0 left-0 border-2 border-gray w-full h-[65vh] max-lg:h-[90%]`}
        >
          <button
            className={`absolute bg-slate-800 text-white p-3 right-3/4 bottom-0 origin-center translate-y-1/2 translate-x-1/2`}
          >
            مشاهده‌ دوره‌ها
          </button>
        </div>
      </div>
      <div
        className={`grid gap-2 grid-rows-20 grid-cols-20  w-3/5 grow relative max-lg:w-full`}
      >
        <div className="z-10 col-start-2 col-end-8 row-start-2 bg-[#F7DF1E] row-end-12">
          <Box buttonText="دوره جاوااسکریپت" logo="bg-js">
            
          </Box>
        </div>
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
