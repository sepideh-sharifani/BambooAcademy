import Grid from "./grid";
import Article from "./article";

export default function LandingCourses() {
  return (
    <section
      className={`w-full  bg-white h-[100vh] flex flex-row max-lg:flex-col `}
    >
      <Article />
      <Grid />
    </section>
  );
}
