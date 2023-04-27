import Form from "./form"


export default function Suggestions() {
  return (
    <section className={`w-full  h-[70vh] flex flex-row bg-[#088568]`}>
      <Form/>
      <div className={` bg-suggestions grow w-1/2 max-lg:hidden  bg-no-repeat bg-right bg-cover max-[1600px]:w-[30%]`}></div>
    </section>
  );
}
