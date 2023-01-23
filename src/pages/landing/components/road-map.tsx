
import styles from "./gradient.module.css";
export default function RoadMap() {
  return (
    <div className={`w-full h-[100vh] flex flex-col bg-blue-400`}>
      <div className="grow bg-[#004458] flex flex-row ">
        <div
          className={` grow w-2/3 h-full relative max-[1255px]:bg-cover max-[1255px]:w-1/2 max-[560px]:w-full
          bg-mentoring opacity-[.65] bg-contain bg-no-repeat
          flex justify-start  items-center max-[1255px]:justify-center
         `} 
        >
          <button className={'bg-[#DBDBDB] ml-[14.5rem] max-[1255px]:ml-0 opacity-80 py-6 px-10 text-xl '}>{'مشاوره'}</button>
        </div>
        <div className={`flex flex-col justify-center grow max-[1255px]:w-1/2 max-[560px]:hidden `} >
          <h3 className={`text-white mb-3 text-3xl px-9  text-right`}>{'مشاوره ی آنلاین'}</h3>
          <p className={`text-[#D1D1D1] text-x px-9  text-right`} >{' ... مشاوران برای مشکلات شما آماده اند'}</p>
        </div>
      </div>
      <div className={styles.gradient}>
        <div className={`flex flex-col justify-center max-[560px]:w-full max-[1255px]:w-1/2 `} >
          <h3 className={`text-white mb-3 text-3xl px-9  text-right`}>{'ارائه  مدرک معتبر'}</h3>
          <p className={`text-[#D1D1D1] text-x px-9  text-right`} >{"بهترین راه برای ساختن رزومه ی حرفه ای"}</p>
        </div>
        <div
          className={` grow  h-full  max-[1255px]:w-1/2  max-[560px]:hidden max-[790px]:bg-center
          bg-license  bg-contain bg-no-repeat bg-right
          min-[1255px]:bg-right max-[1255px]:bg-cover
         `} 
        >
        </div>
      </div>
      <div className="grow bg-[#004458] flex flex-row">
      <div
          className={` grow w-2/3 h-full relative max-[1255px]:bg-cover max-[1255px]:w-1/2 max-[560px]:hidden 
          bg-construction opacity-[.65] bg-contain bg-no-repeat
          flex justify-start  items-center max-[1255px]:justify-center
         `} 
        >
        </div>
        <div className={`flex flex-col justify-center grow max-[1255px]:w-1/2  max-[560px]:w-full`} >
          <h3 className={`text-white mb-3 text-3xl px-9  text-right`}>{'همکاری در آموزش'}</h3>
          <p className={`text-[#D1D1D1] text-x px-9  text-right`} >{' ... به اساتید آموزشی ما در بامبو بپیوندید'}</p>
        </div>
      </div>
    </div>
  );
}
