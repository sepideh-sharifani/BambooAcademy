import Box from "./box";
import { useNavigate } from "react-router-dom";
import json from "../../../../data/data.json";

export default function Grid(){
    const navigate = useNavigate()
    return <div
    className={`grid gap-2 grid-rows-20 grid-cols-20  w-3/5 grow relative max-lg:w-full`}
  >
    <div className="z-10 col-start-2 col-end-9 row-start-2 bg-[#F7DF1E] row-end-12">
      <Box
        buttonText="دوره جاوااسکریپت"
        logo="bg-js"
        position="bg-top"
        needToContain={true}
        onClick={() => {
          navigate("./../course-details", { state: json[0] });
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
          navigate("./../course-details", { state: json[1] });
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
          navigate("./../course-details", { state: json[4] });
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
          navigate("./../course-details", { state: json[6] });
        }}
      ></Box>
    </div>
    <div
      className={`border-[#09B28B] absolute border-2 h-3/4 w-3/4 top-1/3 left-2/3 -translate-x-2/3 -translate-y-1/3 z-0`}
    ></div>
  </div>
}