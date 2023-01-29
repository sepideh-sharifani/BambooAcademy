import {
  GeneralInfo,
  LandingCourses,
  RoadMap,
  News,
  Suggestions,
  HeaderContentLandingRoute
} from "./components";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Landing() {
  return (
    <div className={`w-full absolute contents`} dir='ltr'>
      <Header>
        <HeaderContentLandingRoute/>
      </Header>
      <main>
        <GeneralInfo />
        <LandingCourses />
        <RoadMap />
        <News />
        <Suggestions />
      </main>
      <Footer/>
    </div>
  );
}
