import { GeneralInfo, LandingCourses, RoadMap, News, Suggestions } from "./components";
import Header from "../../components/header";
export default function Landing() {
    return <div className={`w-full`} >
        <Header/>
        <GeneralInfo></GeneralInfo>
        <LandingCourses></LandingCourses>
        <RoadMap></RoadMap>
        <News></News>
        <Suggestions></Suggestions>
    </div >
}