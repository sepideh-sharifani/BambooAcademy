import {
    NavBar,
} from "./components";
import Footer from "../footer";

interface HeaderProps {
    children: React.ReactNode;
}

export default function Header({children}: HeaderProps) {
    //!page.pathname.startsWith('/register')
    if (true) {
        return (
            <div
                className={` w-full min-h-[4rem] bg-fixed opacity-[80%] relative z-20 flex flex-col justify-end overflow-visible`}
            >
                <NavBar/>
                {children}
                <Footer/>
            </div>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}
