import { FaUserTie, FaCalendar, FaThumbsUp, FaStar } from "react-icons/fa";

interface InfoBoxProps {
  children: React.ReactNode;
}

function InfoBox({ children }: InfoBoxProps) {
  return (
    <div
      className={`w-1/3 bg-black opacity-40 h-[33vh] max-md:h-[11vh]
         m-[1px] text-black text-4xl flex flex-col max-md:flex-row-reverse justify-evenly items-center max-md:w-full `}
    >
      {children}
    </div>
  );
}

interface HeaderContentDetailsRouteProps {
  mentorName?: string;
  title?: string;
  capacity?: string;
  studentsNumber?: number;
  // logo?: string;
  imageSrc?: string;
  endDate?: string;
  startDate?: string;
}

export default function HeaderContentDetailsRoute({
  mentorName = "دکتر بحرالعلومی",
  title = "دوره جاوااسکریپت",
  capacity = "59",
  studentsNumber = 53,
  imageSrc = "",
  startDate = '1400/1/1',
  endDate= '1400/1/1'
}: HeaderContentDetailsRouteProps) {
  return (
    <div
      className={`w-full bg-detailsHeader h-[100vh] bg-no-repeat bg-fixed bg-cover bg-center 
     flex flex-col max-md:flex-col max-md:items-stretch `}
    >
      <div
        className={`grow  flex flex-col items-center justify-evenly h-[67vh]  `}
      >
        <div className={`h-[4rem] bg-blue-400`}></div>
        <img
          src={require("./../../../assets/jsMark.png")}
          className={" h-[14.3rem] w-[14.3rem]"}
          alt="logo"
          width={"14rem"}
          height={"14rem"}
        />
        {/* <div className={`bg-jsMark self-stretch h-[14.3rem] bg-contain bg-center m bg-no-repeat `}></div> */}
        <h1 className={`text-white text-4xl `}>{title}</h1>
        <div className="flex gap-8">
          <p className="text-2xl text-white ">{`ظرفیت ${capacity} نفر`}</p>
          <p className="text-2xl text-white ">{`دانشجو ${studentsNumber} نفر`}</p>
        </div>
        <div className="relative w-1/2 min-w-[450px] h-[2rem] bg-[#888] opacity-50 p-2">
          <div className={`absolute top-0 left-0 h-full bg-white w-3/4 `}></div>
          <p
            className={`absolute top-0 h-full text-black text-2xl  `}
          >{`63%`}</p>
        </div>
      </div>
      <div
        className={`w-full flex flex-row items-end max-md:flex-col max-md:items-stretch  `}
      >
        <InfoBox>
          <div className="max-md:hidden">
            <FaThumbsUp color={"white"} fontSize={"3rem"} />
          </div>
          <h3 className="text-2xl text-white opacity-100 " dir="rtl">
            {"رتبه:"}
          </h3>
          <div className={`flex justify-center gap-4`}>
            <FaStar color={"yellow"} fontSize={"2rem"} />
            <FaStar color={"yellow"} fontSize={"2rem"} />
            <FaStar color={"yellow"} fontSize={"2rem"} />
            <FaStar color={"yellow"} fontSize={"2rem"} />
          </div>
        </InfoBox>
        <InfoBox>
          <div className="max-md:hidden">
            <FaCalendar color={"white"} fontSize={"3rem"} />
          </div>
          <h3 className="px-3 text-2xl text-center text-white opacity-100 shrink" dir="rtl">
            {`تاریخ شروع : ${startDate}`}
          </h3>
          <h3 className="self-center text-2xl text-center text-white opacity-100 shrink" dir="rtl">
            {`تاریخ پایان : ${endDate}`}
          </h3>
        </InfoBox>
        <InfoBox>
          <div className="max-md:hidden">
            <FaUserTie color={"white"} fontSize={"3rem"} />
          </div>
          <h3 className="text-2xl text-white opacity-100 " dir="rtl">
            {"مدرس:"}
          </h3>
          <p className="mx-4 overflow-hidden text-2xl text-center text-white opacity-100 text-ellipsis max-h-1/3">
            {mentorName}
          </p>
        </InfoBox>
      </div>
    </div>
  );
}
