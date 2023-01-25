import {
  GeneralInfo,
  LandingCourses,
  RoadMap,
  News,
  Suggestions,
} from "./components";
import Header from "../../components/header";
export default function Landing() {
  return (
    <div className={`w-full absolute contents`}>
      <Header hideSearchBar={true} />
      <main>
        <GeneralInfo></GeneralInfo>
        <LandingCourses></LandingCourses>
        <RoadMap></RoadMap>
        <News></News>
        <Suggestions></Suggestions>
      </main>
    </div>
  );
}
