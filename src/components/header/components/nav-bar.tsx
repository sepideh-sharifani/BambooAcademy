import { divide } from "lodash";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const [logindata, setLoginData] = useState([]);


  const loginUser = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }
  }

  useEffect(() => {
    loginUser();
  }, [])

  const userlogout = () => {
    localStorage.removeItem("user_login")
    navigate("/");
  }



  const [showBurger, setShowBurger] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showBurger) return;

    const bodyHandler = (event: any) => {
      if (!showBurger) return;
      else if (event.target.classList.contains("nav-btn")) {
        event.target.dataset.route &&
          navigate(`./..${event.target.dataset.route}`);
        setShowBurger(false);
      } else setShowBurger(false);
    };

    document.body.addEventListener("click", bodyHandler);

    return () => {
      document.body.removeEventListener("click", bodyHandler);
    };
  }, [navigate, showBurger]);

  const clickHandler = useCallback((event: any) => {
    navigate(`/`)
    event.stopPropagation();
    if (window.innerWidth > 650) return;
    setShowBurger(true);
  }, []);

  return (
    <nav
      className={` ${!showBurger ? "border-b-[#D1D1D1] border-b-[1px]" : ""
        } w-full xl:max-w-[90%] m-auto fixed top-0 left-1/2 -translate-x-1/2 z-20 h-[4rem]`}
    >
      {!showBurger ? (
        <ul
          className={`w-full flex justify-between h-full bg-black bg-opacity-50`}
        >
          {logindata.length === 0 ? (<div className={` flex`}>
            <Link to={"/register/register"}>
              <li className={`text-white text-xl p-4`}>
                {`ثبت نام`}
              </li>
            </Link>
            <Link to={"/register/login"}>
              <li className={`text-white text-xl p-4`}>
                {`ورود`}
              </li>
            </Link>
          </div>) : (
            <div className={` flex`}>
              <li className={`text-white text-xl p-4`}>
                <button className="bg-black" onClick={userlogout}>خروج</button>
              </li>
              <li className={`text-white text-xl p-4`}>
                خوش آمدید</li>
            </div>)}

          <div className={` flex max-[650px]:hidden`}>
            <li className={`text-white text-xl p-4`}>
              {`درباره ما`}
            </li>
            <li className={`text-white text-xl p-4`}>
              {`خدمات`}
            </li>
            <li className={`text-white text-xl p-4`}>
              {`مقالات`}
            </li>
            <Link to={"/courses"}>
              <li className={`text-white text-xl p-4`}>
                {`دوره‌ها`}
              </li>
            </Link>
          </div>
          <div className={``}>
            <li className={`text-white text-xl p-4`}>
              <button onClick={clickHandler} className={`flex`}>
                <span>{"بامبو"}</span>
                <div
                  className={`bg-bamboIcon bg-no-repeat bg-contain h-5 bg-center w-5 self-center`}
                ></div>
              </button>
            </li>
          </div>
        </ul>
      ) : (
        <ul className={`parent flex flex-col h-[18rem] bg-black opacity-50`}>
          <li
            className={`nav-btn flex justify-center items-center  grow border-b-2 text-white border-b-[#999]`}
          >
            {`درباره ما`}
          </li>
          <li
            className={`nav-btn flex justify-center items-center grow border-b-2 text-white border-b-[#999]`}
          >
            {`خدمات`}
          </li>
          <li
            className={`nav-btn flex justify-center items-center grow border-b-2 text-white border-b-[#999]`}
          >
            {`مقالات`}
          </li>
          <li
            className={`nav-btn flex justify-center items-center grow border-b-2 text-white border-b-[#999]`}
            data-route="/courses"
          >
            {`دوره‌ها`}
          </li>
        </ul>
      )}
    </nav>
  );
}
