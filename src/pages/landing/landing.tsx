import {
  GeneralInfo,
  LandingCourses,
  RoadMap,
  News,
  Suggestions,
  HeaderContentLandingRoute
} from "./components";

export default function Landing() {
  return (
    <div className={`w-full absolute contents`} dir='ltr'>
        <HeaderContentLandingRoute/>
      <main>
        <GeneralInfo />
        <LandingCourses />
        <RoadMap />
        <News />
        <Suggestions />
      </main>
    </div>
  );
}
