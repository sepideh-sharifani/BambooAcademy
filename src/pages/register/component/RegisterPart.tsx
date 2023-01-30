import { useState } from 'react'
import registerImg from '../assets/register.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'

interface Inputs {
    username: string,
    email: string,
    phoneNumber: number,
    ID: number,
    Password: number | string | symbol,
    CPassword: number | string | symbol
};

export const RegisterPart = () => {

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("ایمیل خود را وارد کنید")
            .email("ایمیل وارد شده معتبر نمی باشد"),

        phoneNumber: Yup.string()
            .required("شماره موبایل خود را وارد کنید")
            .length(11, "شماره موبایل 11 رقم می باشد"),

        ID: Yup.string()
            .required("شماره ملی خود را وارد کنید")
            .length(10, "شماره ملی ده رقمی می باشد"),

        Password: Yup.string()
            .required("رمز عبور جدید را وارد کنید")
            .min(7, "رمز عبور نمی تواند کمتر از 7 کاراکتر باشد")
            .matches(/([0-9])/, "در رمز عبور خود از عدد استفاده کنید")
            .matches(/([!,@,#,$,%,^,&,*,?,~,_,-,+,=,/])/, "در رمز عبور خود از علامت استفاده کنید"),

        CPassword: Yup.string()
            .required("رمز عبور خود را تکرار کنید")
            .oneOf([Yup.ref("Password")], "رمز عبور ورودی مطابقت ندارد")
    });
    const navigate = useNavigate()
    const [showCPassword, setShowCPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
    });

    const onSubmit: SubmitHandler<Inputs> = data => {
        navigate("/register/login")
        localStorage.setItem(`${data.email}`, JSON.stringify([data]));
    }



    return (
        <section className='flex items-center justify-center h-screen bg-gray-100 font-Yekan'>
            <div className='w-100 h-auto'>
                <div className='flex items-center justify-center w-3/4 h-auto m-auto overflow-hidden bg-white rounded shadow-lg md:w-full'>
                    <div className='relative flex flex-col items-center justify-center w-2/3 h-full mx-5 animate-slideUp'>
                        <h2 className='mt-4 text-xl'>ثبت نام</h2>
                        <form className='flex flex-col mx-5 w-full' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("username")} className='w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue placeholder:text-xs' placeholder='نام کاربری:' />
                            {/* email validatation */}
                            <input type="email" {...register("email")} className='w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue  placeholder:text-xs' placeholder='ایمیل*:' />
                            <p className="text-xs text-red-700">{errors.email?.message?.toString()}</p>
                            {/* phoneNumber validation */}
                            <input type="number" {...register("phoneNumber", { required: true })} className='w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue  placeholder:text-xs' placeholder='شماره موبایل*:' />
                            <p className="text-xs text-red-700">{errors.phoneNumber?.message?.toString()}</p>
                            {/* Identification Number validation */}
                            <input type="number" {...register("ID", { required: true })} className='w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue  placeholder:text-xs' placeholder='شماره ملی*:' />
                            <p className="text-xs text-red-700">{errors.ID?.message?.toString()}</p>
                            {/* password, icon , validate */}
                            <div className="relative">
                                <input dir='ltr' type={showPassword ? "text" : "password"} {...register("Password")} className='w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue  placeholder:text-xs' placeholder='رمز عبور*:' />
                                <p className="text-xs text-red-700">{errors.Password?.message?.toString()}</p>
                                <span onClick={() => { setShowPassword(!showPassword) }} className="absolute text-xl cursor-pointer top-4 right-3 text-greenishBlue">
                                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                            </div>
                            {/* {password confirmation} */}
                            <div className="relative">
                                <input dir='ltr' type={showCPassword ? "text" : "password"} {...register("CPassword")} className='w-full px-1 py-2 my-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue placeholder:text-xs' placeholder='تایید رمز عبور:*' />
                                <p className="text-xs text-red-700">{errors.CPassword?.message?.toString()}</p>
                                <span onClick={() => { setShowCPassword(!showCPassword) }} className="absolute text-xl cursor-pointer top-4 right-3 text-greenishBlue">
                                    {showCPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </span>
                            </div>
                            <Link to={'/register/login'}><span className='text-xs my-4'>حساب کاربری دارید؟ورود</span></Link>
                            <button type='submit' onSubmit={handleSubmit(onSubmit)} className='py-2 my-4 text-center text-white transition duration-100 border border-transparent rounded cursor-pointer bg-greenishBlue hover:bg-neutral-200 hover:text-black hover:border-greenishBlue'>ثبت نام</button>
                        </form>

                        <div className='absolute rounded-full bg-greenishBlue w-44 h-44 -left-48 -top-10 md:hidden'></div>
                        <div className='absolute rounded-full bg-greenishBlue w-44 h-44 -right-52 top-56 md:hidden'></div>
                    </div>
                    <div className='hidden w-full h-full md:block md:relative p-0 m-0'>
                        <img className='animate-slideDown' src={registerImg} alt="register" />
                        <div className='absolute divide-y divide-white top-1/3 left-1/2 -translate-x-2/4 -tranlate-y-2/4'>
                            <div className='mb-4 text-xl text-center text-white divide-y'>آکادمی آموزشی بامبو</div>
                            <div className='flex flex-row items-center justify-center'>
                                <AiOutlineInstagram className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-orange-400' />
                                <TbBrandTelegram className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-blue-400' />
                                <AiOutlineWhatsApp className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-green-400' />
                                <AiOutlineYoutube className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-red-700' />
                            </div>
                        </div>
                        <button className='absolute top-3/4 left-1/2 -translate-x-2/4' onClick={() => navigate('../../landing')}>
                            <BiHomeSmile className='mx-4 mt-2 text-3xl text-white cursor-pointer top-2/4 left-2/4' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}