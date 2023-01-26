import {
  GeneralInfo,
  LandingCourses,
  RoadMap,
  News,
  Suggestions,
} from "./components";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function Landing() {
  return (
    <div className={`w-full absolute contents`} dir='ltr'>
      <Header hideSearchBar={true} />
      <main>
        <GeneralInfo></GeneralInfo>
        <LandingCourses></LandingCourses>
        <RoadMap></RoadMap>
        <News></News>
        <Suggestions></Suggestions>
      </main>
      <Footer/>
    </div>
  );
}
