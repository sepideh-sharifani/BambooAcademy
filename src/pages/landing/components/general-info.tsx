import { convertToRem } from "../../../helpers";
import { FaGraduationCap } from "react-icons/fa";
import React from "react";

interface InfoBoxProps {
  children: React.ReactNode;
}

function InfoBox({ children }: InfoBoxProps) {
  return (
    <div
      className={`w-1/3 bg-black opacity-40 h-[${convertToRem(488)}] 
       m-[1px] text-black text-4xl flex flex-col justify-evenly items-center`}
    >
      {children}
    </div>
  );
}

export default function GeneralInfo() {
  return (
    <div
      className={`w-full bg-red-400 h-[${convertToRem(1080)}]
       flex flex-row items-end border-2 border-white`}
    >
      <InfoBox>
        <FaGraduationCap color={"white"} fontSize={"2rem"} />
        <h3 className="text-3xl text-white opacity-100 ">{"575 دانشجو"}</h3>
        <p className="mx-4 overflow-hidden text-2xl text-center text-white bg-blue-400 opacity-100 text-ellipsis h-1/3 max-h-1/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          sapiente in.
        </p>
      </InfoBox>
      <InfoBox>
      <FaGraduationCap color={"white"} fontSize={"2rem"} />
        <h3 className="text-3xl text-white opacity-100 ">{"575 دانشجو"}</h3>
        <p className="mx-4 overflow-hidden text-2xl text-center text-white bg-blue-400 opacity-100 text-ellipsis h-1/3 max-h-1/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          sapiente in.
        </p>
      </InfoBox>
      <InfoBox>
      <FaGraduationCap color={"white"} fontSize={"2rem"} />
        <h3 className="text-3xl text-white opacity-100 ">{"575 دانشجو"}</h3>
        <p className="mx-4 overflow-hidden text-2xl text-center text-white bg-blue-400 opacity-100 text-ellipsis h-1/3 max-h-1/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          consequatur debitis reprehenderit ut fuga, aperiam itaque ab earum
          sapiente in.
        </p>
      </InfoBox>
    </div>
  );
}
