import { useState } from 'react'
// @ts-ignore
import loginImg from '../../../../public/register-assets/login.png'
import {
    AiOutlineInstagram,
    AiOutlineWhatsApp,
    AiOutlineYoutube,
    AiOutlineEyeInvisible,
    AiOutlineEye
} from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from 'react-hook-form'
// import { useNavigate } from 'react-router';
// @ts-ignore
import Link from "next/link"
import Image from "next/image"


interface Inputs {
    email: string,
    Password: number | string | symbol,
};

interface ItemsProps {
    email: string,
    Password: number | string | symbol,
}


export const Login = () => {
    // const navigate = useNavigate()

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("ایمیل خود را وارد کنید")
            .email("ایمیل وارد شده معتبر نمی باشد"),

        Password: Yup.string()
            .required("رمز عبور خود را وارد کنید")
            .min(7, "رمز عبور نمی تواند کمتر از 7 کاراکتر باشد")
            .matches(/([0-9])/, "در رمز عبور خود از عدد استفاده کنید")
            .matches(/([!,@,#,$,%,^,&,*,?,~,_,-,+,=,/])/, "در رمز عبور خود از علامت استفاده کنید"),
    });

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => {
        const getuserArr = localStorage.getItem(`${data.email}`);
        console.log(getuserArr)
        if (getuserArr && getuserArr.length) {
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((item: ItemsProps) => {
                return item.email === data.email && item.Password === data.Password
            });

            console.log(userlogin)

            if (userlogin.length === 0) {
                alert("invalid details")
            } else {
                console.log("user login succesfulyy");

                localStorage.setItem("user_login", JSON.stringify(userlogin))

                // navigate("../../landing")
            }
        }

    }

    return (
        <section className='flex items-center justify-center h-screen bg-gray-100 font-Yekan'>
            <div className='w-100 h-auto'>
                <div
                    className='flex flex-col items-center justify-center w-1/2 h-auto m-auto overflow-hidden bg-white rounded shadow-lg md:w-full md:flex-row'>
                    <div className='relative w-full h-full md:block'>
                        <Image className='animate-slideDown' src={loginImg} alt="register" />
                        <div
                            className='absolute -translate-x-1/2 divide-y divide-white top-1/2 left-1/2 -tranlate-y-1/2 md:top-1/3 md:left-1/2 md:-translate-x-2/4 md:-tranlate-y-2/4'>
                            <div className='mb-4 text-xl text-center text-white divide-y sm:text-2xl'>آکادمی آموزشی
                                بامبو
                            </div>
                            <div className='flex flex-row items-center justify-center'>
                                <AiOutlineInstagram
                                    className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-orange-400' />
                                <TbBrandTelegram
                                    className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-blue-400' />
                                <AiOutlineWhatsApp
                                    className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-green-400' />
                                <AiOutlineYoutube
                                    className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-red-700' />
                            </div>
                        </div>
                        <button className='absolute hidden md:block top-3/4 left-1/2 -translate-x-2/4'>
                            <Link href={'/'}>
                                <BiHomeSmile className='mx-4 mt-2 text-3xl text-white cursor-pointer top-2/4 left-2/4' />
                            </Link>
                        </button>
                    </div>
                    <div className='relative flex flex-col justify-between w-full h-full mx-5 animate-slideUp md:w-2/3'>
                        <div className='flex items-center justify-between'>
                            <h2 className='m-4 text-lg sm:mb-10 sm:text-xl text-center'>ورود کاربر</h2>
                            <BiHomeSmile className='mx-4 mt-2 text-2xl cursor-pointer top-3/4 left-2/4 md:hidden' />
                        </div>
                        <form className='flex flex-col items-center justify-between mx-5 py-4'
                            onSubmit={handleSubmit(onSubmit)}>
                            {/* email validatation */}
                            <input type="email" {...register("email")}
                                className='w-full px-1 py-2 mb-2 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue placeholder:text-xs'
                                placeholder='ایمیل:' />
                            <p className="text-xs text-red-700">{errors.email?.message?.toString()}</p>
                            {/* password, icon , validate */}
                            <div className="relative w-full">
                                <input dir='ltr' type={showPassword ? "text" : "password"} {...register("Password")}
                                    className='w-full px-1 py-2 my-2 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue placeholder:text-xs'
                                    placeholder='رمز عبور*:' />
                                <p className="text-xs text-red-700">{errors.Password?.message?.toString()}</p>
                                <span onClick={() => {
                                    setShowPassword(!showPassword)
                                }} className="absolute text-xl cursor-pointer top-4 right-3 text-greenishBlue">
                                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                            </div>

                            <div className='flex flex-row flex-wrap items-center justify-between w-full my-4'>
                                <span className='text-sm'>مرا به خاطر بسپار<input className='mx-2'
                                    type="checkbox" /></span>
                                <Link href={"/register/reset"}><p
                                    className='text-sm text-gray-400 hover:text-black'>فراموشی رمز</p></Link>
                            </div>
                            <button type='submit' onSubmit={handleSubmit(onSubmit)}
                                className='w-1/2 px-4 py-2 my-4 text-center text-white shadow-2xl border border-transparent rounded cursor-pointer bg-greenishBlue hover:bg-gray-200 hover:text-black hover:border-greenishBlue'>ورود
                            </button>
                            <Link href={"/register/register"}><span
                                className='text-xs'>هنوز ثبت نام نکرده اید؟</span></Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

