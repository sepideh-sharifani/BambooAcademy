import Row from "./row";

export default function RoadMap() {

    const data = [
        {
            title: "مشاوره ی آنلاین",
            paragraph: " ... مشاوران برای مشکلات شما آماده اند",
            backgroundImageStyle: "bg-mentoring  bg-contain bg-no-repeat max-[1255px]:bg-cover opacity-[.65]",
            articleStyle: "max-[560px]:hidden",
            reverse: true,
            childComponent: <button
                className={
                    "bg-[#DBDBDB] ml-[14.5rem] max-[1255px]:ml-0 opacity-80 py-6 px-10 text-xl "
                }
            >
                {"مشاوره"}
            </button>
        },
        {
            title: "ارائه  مدرک معتبر",
            backgroundPalette: "bg-gradient-to-r from-[#004458] via-[#09b28b] to-[#09b28b] ",
            paragraph: "بهترین راه برای ساختن رزومه ی حرفه ای",
            backgroundImageStyle: "bg-license bg-right max-[790px]:bg-center bg-contain bg-no-repeat min-[1255px]:bg-right max-[1255px]:bg-cover max-[560px]:hidden ",
            reverse: false,
        },
        {
            title: "همکاری در آموزش",
            paragraph: " ... به اساتید آموزشی ما در بامبو بپیوندید",
            backgroundImageStyle: "bg-construction bg-no-repeat bg-contain max-[1255px]:bg-cover  max-[1255px]:bg-cover",
            reverse: true,
            articleStyle: "max-[560px]:hidden",
        },
    ]

    return (
        <section className={`w-full h-[100vh] flex flex-col bg-blue-400`}>

            {data.map(item => {
                return (
                    <Row
                        title={item.title}
                        paragraph={item.paragraph}
                        backgroundPalette={item.backgroundPalette}
                        backgroundImageStyle={item.backgroundImageStyle}
                        articleStyle={item.articleStyle}
                        reverse={item.reverse}
                    >
                        {item.childComponent}
                    </Row>
                )
            })}

        </section>
    );
}
