import { NavBar } from "./components";

export default function Header() {
  return (
    <header className={`h-[100vh] w-full bg-[#088568]  `}>
      <div className={`h-full w-full bg-landingHeader bg-fixed opacity-[80%] relative z-20 flex flex-col justify-end overflow-visible`}>
        <NavBar/>
        <div className={`bg-blue-500 w-full xl:max-w-[90%] fixed top-[4rem] left-0 z-20 h-7 self-center`}></div>
      </div>
    </header>
  );
}
