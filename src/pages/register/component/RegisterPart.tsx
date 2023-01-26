import { useState } from 'react'
import registerImg from '../assets/register.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface buttonClickProps {
    onLogin: React.MouseEventHandler<HTMLAnchorElement>
}

interface Inputs {
    username: string,
    email: string,
    phoneNumber: number,
    ID: number,
    Password: number | string | symbol,
    CPassword: number | string | symbol
};

export const RegisterPart = (props: buttonClickProps) => {

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

    const [showCPassword, setShowCPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <section className='font-Lalezar'>
            <div className='w-3/4 m-auto h-auto flex items-center justify-center rounded overflow-hidden bg-white shadow-lg md:w-full'>
                <div className='relative mx-5 w-2/3 h-full flex flex-col justify-center items-center animate-slideUp'>
                    <h2 className='my-2 text-2xl'>ثبت نام</h2>
                    <form className='mx-5' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")} className='w-full my-1 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='نام کاربری:' />
                        {/* email validatation */}
                        <input type="email" {...register("email")} className='w-full my-1 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='ایمیل*:' />
                        <p className="text-red-700 text-sm">{errors.email?.message?.toString()}</p>
                        {/* phoneNumber validation */}
                        <input type="number" {...register("phoneNumber", { required: true })} className='w-full my-1 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='شماره موبایل*:' />
                        <p className="text-red-700 text-sm">{errors.phoneNumber?.message?.toString()}</p>
                        {/* Identification Number validation */}
                        <input type="number" {...register("ID", { required: true })} className='w-full my-1 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='شماره ملی*:' />
                        <p className="text-red-700 text-sm">{errors.ID?.message?.toString()}</p>
                        {/* password, icon , validate */}
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} {...register("Password")} className='w-full my-1 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='رمز عبور*:' />
                            <p className="text-red-700 text-sm">{errors.Password?.message?.toString()}</p>
                            <span onClick={() => { setShowPassword(!showPassword) }} className="absolute top-4 left-3 text-xl cursor-pointer text-greenishBlue">
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div>
                        {/* {password confirmation} */}
                        <div className="relative">
                            <input type={showCPassword ? "text" : "password"} {...register("CPassword")} className='w-full my-1 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='تایید رمز عبور*:' />
                            <p className="text-red-700 text-sm">{errors.CPassword?.message?.toString()}</p>
                            <span onClick={() => { setShowCPassword(!showCPassword) }} className="absolute top-4 left-3 text-xl cursor-pointer text-greenishBlue">
                                {showCPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div>


                        <div className='flex flex-row items-center justify-between'>
                            <span className='text-sm'>حساب کاربری دارید؟<a href="#" className='text-sm mx-2 hover:text-lg' onClick={props.onLogin}>ورود</a></span>
                            <button className='py-2 px-4 my-4 text-center border border-transparent rounded cursor-pointer transition duration-100 bg-greenishBlue text-white hover:bg-neutral-200 hover:text-black'>ثبت نام</button>
                        </div>
                    </form>

                    <div className='absolute rounded-full bg-greenishBlue w-44 h-44 -left-48 -top-10 md:hidden'></div>
                    <div className='absolute rounded-full bg-greenishBlue w-44 h-44 -right-52 top-56 md:hidden'></div>
                </div>
                <div className='hidden w-full h-full md:block md:relative'>
                    <img className='animate-slideDown' src={registerImg} alt="register" />
                    <div className='absolute top-1/3 left-1/2 -translate-x-2/4 -tranlate-y-2/4 divide-y divide-white'>
                        <div className='text-white text-2xl tracking-wider divide-y mb-4'>آکادمی آموزشی بامبو</div>
                        <div className='flex flex-row items-center justify-center'>
                            <AiOutlineInstagram className='mt-2 mx-4 text-xl text-white cursor-pointer hover:text-orange-400' />
                            <TbBrandTelegram className='mt-2 mx-4 text-xl text-white cursor-pointer hover:text-blue-400' />
                            <AiOutlineWhatsApp className='mt-3 mx-4 text-xl text-white cursor-pointer hover:text-green-400' />
                            <AiOutlineYoutube className='mt-3 mx-4 text-xl text-white cursor-pointer hover:text-red-700' />
                        </div>
                    </div>
                    <div className='absolute top-3/4 left-1/2 -translate-x-2/4'>
                        <BiHomeSmile className='mt-2 mx-4 top-2/4 left-2/4 text-3xl text-white cursor-pointer' />
                    </div>
                </div>
            </div>

        </section>
    )
}