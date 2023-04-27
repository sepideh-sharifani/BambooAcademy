import Slider from "./slider";
import Article from "./article";

export default function News() {
  return (
    <section
      className={`w-full  h-[100vh] flex flex-row max-lg:flex-col max-lg:h-auto`}
    >
      <Slider />
      <Article />
    </section>
  );
}
