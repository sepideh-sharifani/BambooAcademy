import { GeneralInfo, LandingCourses, RoadMap, News, Suggestions } from "./components";

export default function Landing() {
    return <div className={`w-full`} >
        <GeneralInfo></GeneralInfo>
        <LandingCourses></LandingCourses>
        <RoadMap></RoadMap>
        <News></News>
        <Suggestions></Suggestions>
    </div >
}