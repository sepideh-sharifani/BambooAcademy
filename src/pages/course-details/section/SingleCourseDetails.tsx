import React from "react";
import {FaTrophy, FaBookOpen, FaChartLine} from "react-icons/fa";

const SingleCourseDetails = () => {
    return (
        <>
            <div
                className={'w-full flex flex-row items-center max-md:flex-col max-md:items-stretch gap-x-24 p-24'}>
                <div className={'w-full'} dir={'rtl'}>
                    <h3 className={'text-4xl mb-2 font-bold text-[#004458]'}>
                        توضیحات :
                    </h3>
                    <p>
                        امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و
                        مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار
                        خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب
                        و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان
                        برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری
                        روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است.
                        جاوا
                        اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله
                    </p>
                </div>
                <div className={'w-[560px] p-3 bg-[#f9f9f9]'} dir={'rtl'}>
                    <div className={'flex items-end py-2 border-b-2 border-[#004458]'}>
                        <img
                            src={require("./../../../assets/480px-Unofficial_JavaScript_logo_2.svg.png")}
                            className={" h-[2rem] w-[2rem] ml-2"}
                            alt="logo"
                            width={"2rem"}
                            height={"2rem"}
                        />
                        <p className={'text-l mb-2 font-bold text-[#004458] flex-auto'}>
                            دوره جاوا اسکریپت
                        </p>
                    </div>
                    {[
                        {
                            title: 'قیمت دوره :',
                            value: '۲۰۰.۰۰۰ تومن',
                            key: 'price',
                            style: 'text-[#004458] text-lg opacity-70',
                            valueStyle: 'text-[#004458] text-lg opacity-70'
                        },
                        {
                            title: 'تخفیف :',
                            value: '۱۰٪',
                            key: 'percent',
                            style: 'text-[#004458] text-lg opacity-70',
                            valueStyle: 'text-[#f20000] text-lg'
                        },
                        {
                            title: 'مبلغ قابل پرداخت :',
                            value: '۱۸۰.۰۰۰ تومن',
                            key: 'total',
                            style: 'text-[#004458] text-lg',
                            valueStyle: 'text-[#09b28b] text-lg opacity-70'
                        },
                    ].map(item => {
                        return (
                            <div className={'flex justify-between p-2'}>
                                <p className={item.style}>{item?.title}</p>
                                <p className={item.valueStyle}>{item?.value}</p>
                            </div>
                        )
                    })}
                    <div className={'flex justify-center item-center gap-1 my-1'}>
                        <div className={'w-6 h-8 bg-[#d8d8d8]'}/>
                        <div className={'w-6 h-8 bg-[#d8d8d8]'}/>
                        <p>:</p>
                        <div className={'w-6 h-8 bg-[#d8d8d8]'}/>
                        <div className={'w-6 h-8 bg-[#d8d8d8]'}/>
                        <p>:</p>
                        <div className={'w-6 h-8 bg-[#d8d8d8]'}/>
                        <div className={'w-6 h-8 bg-[#d8d8d8]'}/>
                    </div>
                    <div className={'flex justify-center'}>
                        <button className={'p-2 bg-[#09b28b] text-[#fff] m-4 w-7/12'}>ثبت نام در دوره</button>
                    </div>
                </div>
            </div>
            <div className={'w-full flex justify-between flex-row'}>
                <div className={'relative w-full h-[23rem] bg-[#f9f9f9] flex justify-end'}>
                    <div className={'py-8 pl-24'}>
                        <h3 className={'text-4xl mb-2 font-bold text-[#004458]'}>
                            مزایای این دوره :
                        </h3>
                        {[
                            {
                                title: 'آشنایی با زبان برنامه نویسی جاوااسکریپت',
                                icon: <FaBookOpen fontSize={"1.5rem"}/>,
                                context: 'در پایان این دوره آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهیداد'
                            },
                            {
                                title: 'آشنایی با زبان برنامه نویسی جاوااسکریپت',
                                icon: <FaTrophy fontSize={"1.5rem"}/>,
                                context: 'در پایان این دوره آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهیداد'
                            },
                            {
                                title: 'آشنایی با زبان برنامه نویسی جاوااسکریپت',
                                icon: <FaChartLine fontSize={"1.5rem"}/>,
                                context: 'در پایان این دوره آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهیداد'
                            },
                        ].map(item => {
                            return (
                                <div className={'flex items-end py-4'}>
                                    <div className={'p-4 ml-4'}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className={'text-[#004458] w-auto'}>
                                            {item.title}
                                        </p>
                                        <p className={'text-[#004458] w-full'}>
                                            {item.context}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <img
                    src={require("./../../../assets/courseOne.png")}
                    className={" h-[23rem] w-[22rem] ml-2 absolute"}
                    alt="logo"
                    width={"22rem"}
                    height={"23rem"}
                />
            </div>
        </>
    )
}

export default SingleCourseDetails