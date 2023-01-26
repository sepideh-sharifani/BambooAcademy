// import { convertToRem } from "../../../helpers";
import React from "react";
import { useNavigate } from "react-router-dom";
import json from "./../../../data/data.json";

interface BoxProps {
  // children: React.ReactNode;
  buttonText: string;
  logo: string;
  position: string;
  needToContain: boolean;
  onClick: (event: any)=> void;
}


function Box({ buttonText, logo, position, needToContain , onClick}: BoxProps) {
  return (
    <div
      className={`bg-inherit flex flex-col h-full justify-around items-center`}
    >
      <div
        className={`w-4/5 grow flex justify-center items-center mt-2`}
      >
        <div
          className={`${logo} w-full h-full grow  ${position} bg-no-repeat max-lg:bg-contain ${
            needToContain ? "bg-contain" : ""
          } `}
        ></div>
      </div>
      <button className={`px-2 py-4 bg-white m-4`} onClick={onClick}>{`${buttonText}`}</button>
    </div>
  );
}

export default function LandingCourses() {
  const navigate = useNavigate()
  // const navigationBtnHandler = (event, params) => {
  //   navigate(params)
  // }
  return (
    <section
      className={`w-full  bg-white h-[100vh] flex flex-row max-lg:flex-col `}
    >
      <div className={`relative  h-full w-2/5 max-lg:h-[40%]  max-lg:w-full`}>
        <article
          className={`absolute top-0 left-0 border-2 border-gray w-full h-[65vh] max-lg:h-[90%] flex flex-col justify-center p-4 `}
          dir="rtl"
        >
          <h3 className={`text-[#004458] text-3xl py-4`}>
            {"دوره های آموزشی"}
          </h3>
          <p className={`text-[#7E7E7E] text-xl text-ellipsis`}>
            {
              "دسترسی به باکیفیت ترین دوره های  آموزشی آنلاین با تدریس برترین  اساتید ایران  در دسته بندی های گوناگونی همچون طراحی ، برنامه نویسی ، اقتصاد فلسفه ، فیزیک ،شیمی، ریاضی و ..."
            }
          </p>
          <button
            className={`absolute bg-slate-800 text-white p-3 right-3/4 bottom-0 origin-center translate-y-1/2 translate-x-1/2`}
            onClick={() => {
              navigate('./../courses')
            }}
          >
            مشاهده‌ دوره‌ها
          </button>
        </article>
      </div>
      <div
        className={`grid gap-2 grid-rows-20 grid-cols-20  w-3/5 grow relative max-lg:w-full`}
      >
        <div className="z-10 col-start-2 col-end-9 row-start-2 bg-[#F7DF1E] row-end-12">
          <Box
            buttonText="دوره جاوااسکریپت"
            logo="bg-js"
            position="bg-top"
            needToContain={true}
            onClick={() => {
              navigate("./../course-details", {state : json[0]} )
            }}
          ></Box>
        </div>
        <div className="z-10 col-start-10 row-start-4 col-end-20 bg-[#6A1577] row-end-11">
          <Box
            buttonText="دوره سی شارپ"
            logo="bg-Csharp"
            position="bg-center"
            needToContain={false}
            onClick={() => {
              navigate("./../course-details", {state : json[1]} )
            }}
          ></Box>
        </div>
        <div className="z-10 col-start-3 col-end-9 bg-[#CAB2EF]  row-start-13 row-end-20">
          <Box
            buttonText="دوره بوت استرپ"
            logo="bg-bootstrap"
            position="bg-center"
            needToContain={true}
            onClick={() => {
              navigate("./../course-details", {state : json[4]})
            }}
          ></Box>
        </div>
        <div className="z-10 col-start-10 bg-[#FFC7F8] row-start-12 col-end-18 row-end-19">
          <Box
            buttonText="دوره جاوا"
            logo="bg-java"
            position="bg-center"
            needToContain={false}
            onClick={() => {
              navigate("./../course-details", {state : json[6]})
            }}
          ></Box>
        </div>
        <div
          className={`border-[#09B28B] absolute border-2 h-3/4 w-3/4 top-1/3 left-2/3 -translate-x-2/3 -translate-y-1/3 z-0`}
        ></div>
      </div>
    </section>
  );
}
