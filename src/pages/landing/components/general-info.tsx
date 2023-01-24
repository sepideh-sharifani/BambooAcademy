// import { convertToRem } from "../../../helpers";
import { FaGraduationCap, FaUserTie, FaDesktop } from "react-icons/fa";
import React from "react";

interface InfoBoxProps {
  children: React.ReactNode;
}

function InfoBox({ children }: InfoBoxProps) {
  return (
    <div
      className={`w-1/3 bg-black opacity-40 h-[45%] 
       m-[1px] text-black text-4xl flex flex-col justify-evenly items-center max-md:w-full `}
    >
      {children}
    </div>
  );
}

export default function GeneralInfo() {
  return (
    <div
      className={`w-full bg-generalInfo h-[100vh] bg-no-repeat bg-fixed bg-cover bg-center 
       flex flex-row items-end max-md:flex-col max-md:items-stretch `}
    >
      <InfoBox>
        <FaDesktop color={"white"} fontSize={"3rem"} />
        <h3 className="text-3xl text-white opacity-100 " dir="rtl">
          {"219 دوره"}{" "}
        </h3>
        <p className="mx-4 overflow-hidden text-xl text-center text-white opacity-100 text-ellipsis h-1/3 max-h-1/3">
          {
            ".تا کنون بیش از 200 دوره از دسته بندی های متفاوت در سایت ثبت شد و قابل دسترسی است"
          }
        </p>
      </InfoBox>
      <InfoBox>
        <FaUserTie color={"white"} fontSize={"3rem"} />
        <h3 className="text-3xl text-white opacity-100 " dir="rtl">
          {"34 استاد"}
        </h3>
        <p className="mx-4 overflow-hidden text-xl text-center text-white opacity-100 text-ellipsis h-1/3 max-h-1/3">
          {
            "بیش از 30 استاد،ازبرترین اساتید ایران همراه ما هستند و دوره های خودشونو ثبتکرده‌اند"
          }
        </p>
      </InfoBox>
      <InfoBox>
        <FaGraduationCap color={"white"} fontSize={"3rem"} />
        <h3 className="text-3xl text-white opacity-100 " dir="rtl">
          {" 575 دانشجو"}
        </h3>
        <p className="mx-4 overflow-hidden text-xl text-center text-white opacity-100 text-ellipsis h-1/3 max-h-1/3">
          {
            "تا کنون بیش از 500 نفر از آموزش های بامبو استفاده کرده‌اند و نظرات خودشونو ثبت کرده‌اند"
          }
        </p>
      </InfoBox>
    </div>
  );
}
