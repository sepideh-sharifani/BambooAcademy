import {
  NavBar,
  HeaderContentLandingRoute,
  HeaderContentDetailsRoute,
} from "./components";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  hideSearchBar?: boolean;
}

export default function Header({ hideSearchBar = false }: HeaderProps) {
  const { pathname, state } = useLocation();
  console.log("location", pathname, state);

  let bgColor: string = "";
  switch (pathname) {
    case "/landing": {
      bgColor = "bg-[#088568]";
      break;
    }
    case "/courses": {
      bgColor = "bg-[#004458]";
      break;
    }
    case "/course-details": {
      bgColor = "bg-[#000]";
      break;
    }
    default:
      break;
  }

  let position: string =
    pathname === "/courses" ? "fixed opacity-50" : "sticky bg-[#088568] ";

  return (
    <>
      <header className={` w-full ${bgColor}`}>
        <div
          className={` w-full min-h-[4rem] {${
            pathname === "/courses" ? "" : ""
          }} bg-fixed opacity-[80%] relative z-20 flex flex-col justify-end overflow-visible`}
        >
          <NavBar />
          {pathname === "/landing" && <HeaderContentLandingRoute />}
          {pathname === "/courses" && (
            <div className={`h-[7rem] bg-coursesHeader opacity-50`}></div>
          )}
          {pathname === "/course-details" && (
            <HeaderContentDetailsRoute
              mentorName={state.presenter}
              title={state.headerCard}
              capacity={state.capacity}
              studentsNumber={state.courseStatus}
              startDate={state.startDate}
              endDate={state.endDate}
            />
          )}
        </div>
      </header>
      <div
        className={`w-full xl:max-w-[100%] ${position} h-[3rem] top-[4rem] z-20 ${
          hideSearchBar ? `hidden` : ""
        }`}
      >
        <p>hi</p>
      </div>
    </>
  );
}
