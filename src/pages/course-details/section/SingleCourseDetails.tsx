import React from "react";
import {FaTrophy, FaBookOpen, FaChartLine} from "react-icons/fa";
import {useParams} from "react-router-dom";
import img3 from '../../courses/assets/img3.jpg'
import img1 from '../../courses/assets/img1.jpg'
import img2 from '../../courses/assets/img2.jpg'
import img4 from '../../courses/assets/img4.jpg'
import img5 from '../../courses/assets/img5.jpg'
import img6 from '../../courses/assets/img6.jpg'
import img7 from '../../courses/assets/img7.jpg'
import img8 from '../../courses/assets/img8.jpg'
import HeaderContentDetailsRoute from "./header-content-detail-route";

const SingleCourseDetails = () => {

    const {courseName} = useParams<{ courseName?: string }>();

    const courseData: { [index: string]: any } = {
        python: {
            name: 'پایتون',
            price: '200.000 تومن',
            priceNumber: 200000,
            imageSrc: img7,
        },
        sass: {
            name: 'Sass',
            price: '400.000 تومن',
            priceNumber: 400000,
            imageSrc: img3,
        },
        javascript: {
            name: 'جاوا اسکریپت',
            price: '200.000 تومن',
            priceNumber: 200000,
            imageSrc: img1,
        },
        'c-charp': {
            name: 'سی شارپ',
            price: '300.000 تومن',
            priceNumber: 300000,
            imageSrc: img2,
        },
        react: {
            name: 'React',
            price: '20.000 تومن',
            priceNumber: 200000,
            imageSrc: img4,
        },
        bootstrap: {
            name: 'Bootstrap',
            price: '500.000 تومن',
            priceNumber: 500000,
            imageSrc: img5,
        },
        java: {
            name: 'Java',
            price: '500.000 تومن',
            priceNumber: 500000,
            imageSrc: img6,
        },
        angular: {
            name: 'Angular',
            price: '600.000 تومن',
            priceNumber: 600000,
            imageSrc: img8,
        },
    }

    return (
        <>
            <HeaderContentDetailsRoute
                // mentorName={'ali'}
                // title={'gg'}
                // capacity={'33'}
                // // studentsNumber={f}
                // startDate={'123'}
                // endDate={'3'}
            />
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
                        و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است.
                        {courseName != undefined && courseData[courseName].name}
                        زبان
                        برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری
                        روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است.
                        {courseName != undefined && courseData[courseName].name}
                        زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله
                    </p>
                </div>
                <div className={'w-[560px] p-3 bg-[#f9f9f9]'} dir={'rtl'}>
                    <div className={'flex items-end py-2 border-b-2 border-[#004458]'}>
                        <img
                            src={courseName != undefined && courseData[courseName].imageSrc}
                            className={" h-[2rem] w-[2rem] ml-2"}
                            alt="logo"
                            width={"2rem"}
                            height={"2rem"}
                        />
                        <p className={'text-l mb-2 font-bold text-[#004458] flex-auto'}>
                            دوره {courseName != undefined && courseData[courseName].name}
                        </p>
                    </div>
                    {[
                        {
                            title: 'قیمت دوره :',
                            value: courseName != undefined && courseData[courseName].price,
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
                            value: courseName != undefined && courseData[courseName].priceNumber * 0.9,
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
            <div className={'w-full flex justify-between flex-row mb-10'}>
                <div className={'relative w-full h-[23rem] bg-[#f9f9f9] flex justify-end'}>
                    <div className={'py-8 pl-24'}>
                        <h3 className={'text-4xl mb-2 font-bold text-[#004458]'}>
                            مزایای این دوره :
                        </h3>
                        {[
                            {
                                title: `آشنایی با زبان برنامه نویسی ${courseName != undefined && courseData[courseName].name}`,
                                icon: <FaBookOpen fontSize={"1.5rem"}/>,
                                context: 'در پایان این دوره آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهیداد'
                            },
                            {
                                title: `آشنایی با زبان برنامه نویسی ${courseName != undefined && courseData[courseName].name}`,
                                icon: <FaTrophy fontSize={"1.5rem"}/>,
                                context: 'در پایان این دوره آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهیداد'
                            },
                            {
                                title: `آشنایی با زبان برنامه نویسی ${courseName != undefined && courseData[courseName].name}`,
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