import { FaGraduationCap, FaUserTie, FaDesktop } from "react-icons/fa";
import InfoBox from './info-box'

export default function GeneralInfo() {
  return (
    <section
      className={`w-full bg-generalInfo h-[100vh] bg-no-repeat bg-fixed bg-cover bg-center 
       flex flex-row items-end max-md:flex-col max-md:items-stretch `}
    >
      <InfoBox
        title="219 دوره"
        text=".تا کنون بیش از 200 دوره از دسته بندی های متفاوت در سایت ثبت شد و قابل دسترسی است"
      >
        <FaDesktop color={"white"} fontSize={"3rem"} />
      </InfoBox>
      <InfoBox
        title="34 استاد"
        text="بیش از 30 استاد،ازبرترین اساتید ایران همراه ما هستند و دوره های خودشونو ثبتکرده‌اند"
      >
        <FaUserTie color={"white"} fontSize={"3rem"} />
      </InfoBox>
      <InfoBox
        title=" 575 دانشجو"
        text="تا کنون بیش از 500 نفر از آموزش های بامبو استفاده کرده‌اند و نظرات خودشونو ثبت کرده‌اند"
      >
        <FaGraduationCap color={"white"} fontSize={"3rem"} />
      </InfoBox>
    </section>
  );
}
