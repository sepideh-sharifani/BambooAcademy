import {text} from "stream/consumers";
import json from "../../../data/data.json";
import React from "react";

const SingleCourseDetails = () => {
    return (
        <div className={'w-full flex flex-row-reverse items-center max-md:flex-col max-md:items-stretch gap-x-36 p-24'}>
            <div className={'w-50'} dir={'rtl'}>
                <h3 className={'text-2xl mb-2 font-bold text-[#004458]'}>
                    توضیحات :
                </h3>
                <p>
                    امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و
                    مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار
                    خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب
                    و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان
                    برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری
                    روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا
                    اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله
                </p>
            </div>
            <div className={'w-11/12 p-3 bg-[#c3c3c3]'} dir={'rtl'}>
                <div className={'flex items-end py-2 border-b-2 border-[#004458]'}>
                    <img
                        src={require("./../../../assets/jsMark.png")}
                        className={" h-[2rem] w-[2rem] ml-2"}
                        alt="logo"
                        width={"2rem"}
                        height={"2rem"}
                    />
                    <p className={'text-2l mb-2 font-bold text-[#004458] flex-auto'}>
                        دوره جاوا اسکریپت
                    </p>
                </div>
                <div>
                    {/*<Box*/}
                    {/*    buttonText={"دوره جاوااسکریپت"}*/}
                    {/*    logo={"bg-js"}*/}
                    {/*    position={"bg-top"}*/}
                    {/*/>*/}
                </div>
                <p>
                    امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و
                    مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار
                    خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب
                    و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان
                    برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری
                    روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا
                    اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله
                </p>
            </div>
        </div>
    )
}

export default SingleCourseDetails