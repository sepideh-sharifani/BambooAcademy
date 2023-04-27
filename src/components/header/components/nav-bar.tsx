import React, { useEffect, useState, useCallback, useContext } from "react";
import Link from "next/Link"
import { Router, useRouter } from "next/router";

type UserData = {
    fullName: string,
}[]

export default function NavBar() {
    const [logindata, setLoginData] = useState<UserData>([]);
    const { fullName }: any = logindata;


    const loginUser = () => {
        const getuser = localStorage.getItem('user_Data');
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser)
            setLoginData(user)
        }
    }
    console.log(logindata)


    useEffect(() => {
        loginUser();
    }, [])

    const userlogout = () => {
        localStorage.clear();
        window.location.reload();
        // navigate("/");
    }


    const [showBurger, setShowBurger] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        if (!showBurger) return;

        const bodyHandler = (event: any) => {
            if (!showBurger) return;
            else if (event.target.classList.contains("nav-btn")) {
                event.target.dataset.route &&
                    // navigate(`./..${event.target.dataset.route}`);
                    setShowBurger(false);
            } else setShowBurger(false);
        };

        document.body.addEventListener("click", bodyHandler);

        return () => {
            document.body.removeEventListener("click", bodyHandler);
        };
    }, [showBurger]);
    //navigate
    const clickHandler = useCallback((event: any) => {
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
                        <Link href={"/register/register"}>
                            <li className={`text-white text-xl p-4`}>
                                {`ثبت نام`}
                            </li>
                        </Link>
                        <Link href={"/register/login"}>
                            <li className={`text-white text-xl p-4`}>
                                {`ورود`}
                            </li>
                        </Link>
                    </div>) : (
                        <div className={` flex`}>
                            <li className={`text-white text-xl p-4`}>
                                <p>{fullName} خوش آمدید</p>
                            </li>
                            <li className={`text-white text-xl p-4`}>
                                <button onClick={userlogout}>خروج</button>
                            </li>

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
                        <Link href={"/courses"}>
                            <li className={`text-white text-xl p-4`}>
                                {`دوره‌ها`}
                            </li>
                        </Link>
                    </div>
                    <div className={``}>
                        <Link href={"/"}>
                            <li className={`text-white text-xl p-4`}>
                                <button onClick={clickHandler} className={`flex`}>

                                    <span>{"بامبو"}</span>
                                    <div
                                        className={`bg-bamboIcon bg-no-repeat bg-contain h-5 bg-center w-5 self-center`}
                                    />
                                </button>
                            </li>
                        </Link>
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
