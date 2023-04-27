import Link from "next/link"

export default function HeaderContentLandingRoute() {
    return (
        <header className="bg-[#088568] w-full">
            <div
                className="w-full bg-landingHeader h-[calc(100vh)] flex flex-col justify-center bg-[#088568] p-[5%] opacity-50"
                dir="rtl"
            >
                <h2 className={`text-white text-5xl opacity-100`}>
                    {"باید راه بهتری برای آموزش ساخته میشد، پس ما ساختیمش  ..."}
                </h2>
                <p className="pt-10 text-2xl text-white">
                    {
                        " سایت بامبو با  هدف تولید و انتشار محتوای با کیفیت آموزشی  و همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امیدواریم با راهکارهای نوین ، فرصتی برای افراد خواهان پیشرفت فراهم کنیم  "
                    }
                </p>
                <Link href={"./courses"}>
                    <button
                        className={`bg-white px-10 py-5 self-center mt-[5rem]`}
                    >
                        {`مشاهده دوره‌ها`}
                    </button>
                </Link>
            </div>
        </header>
    );
}
