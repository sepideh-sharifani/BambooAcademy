import {  useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import imgOne from "./../../../../../public/assets/scott-graham-5fNmWej4tAA-unsplash.png";
import imgTwo from "./../../../../../public/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.png";
import imgThree from "./../../../../../public/assets/neonbrand-1-aA2Fadydc-unsplash.png";
import imgFour from "./../../../../../public/assets/neonbrand-zFSo6bnZJTw-unsplash.png";

const sources: any[] = [imgOne, imgTwo, imgThree, imgFour];

function Image({ index }: { index: number }) {
  return (
    <img
      className="absolute w-full h-full -z-10"
      alt={`unsplash`}
      src={sources[index]}
      width="100%"
      height="100%"
    />
  );
}

function Dots({ index }: { index: number }) {
  return (
    <div className={`flex justify-center gap-4 items-center `}>
      {sources.map((_, dotIndex) => {
        return (
          <div
            key={dotIndex.toString()}
            className={`w-[12px] h-[12px] rounded-full bg-[#303030] ${
              dotIndex === index ? `` : `opacity-50`
            } `}
          ></div>
        );
      })}
    </div>
  );
}

export default function Slider() {
  const [sourceIndex, setIndex] = useState<number>(0);

  const previousCallBack = () => {
    if (sourceIndex > 0) setIndex(sourceIndex - 1);
  };

  const nextCallBack = () => {
    console.log("smt");
    if (sourceIndex < sources.length - 1) setIndex(sourceIndex + 1);
  };

  return (
    <div
      className={` p-2 flex flex-col justify-center items-center w-[63%] h-[57vh] max-lg:w-full`}
    >
      <div
        className={` border-2 border-gray max-w-[48.1875rem] max-h-[32.625rem] w-full h-full relative
       flex gap-3 flex-col justify-end
        `}
      >
        <Image index={sourceIndex} />
        <Dots index={sourceIndex} />
        <div
          className={`h-[5.6rem] bg-blue-500 opacity-[.85] flex justify-center items-center`}
        >
          <p className={`text-white text-2xl truncate`} dir="rtl">
            {"مقایسه ی راکت با فریمورک های جدید جاوااسکریپت"}
          </p>
        </div>
      </div>
      <div
        className={`max-w-[39.375rem] max-h-[6rem] w-full h-full border-2 border-[#088568] flex justify-between items-center px-5 border-t-0`}
      >
        <button
          className={`text-[3rem] text-[#088568] ${
            sourceIndex === 0
              ? `opacity-30`
              : `active:text-blue-500 active:scale-110`
          }`}
          onClick={previousCallBack}
          disabled={sourceIndex === 0}
        >
          <IoChevronBack />
        </button>
        <button
          className={`text-[3rem] text-[#088568]  ${
            sourceIndex === sources.length - 1
              ? `opacity-30`
              : `active:text-blue-500 active:scale-110`
          }`}
          onClick={nextCallBack}
          disabled={sourceIndex === sources.length - 1}
        >
          <IoChevronForward></IoChevronForward>
        </button>
      </div>
    </div>
  );
}
