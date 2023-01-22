import { useState } from 'react'
import loginImg from '../assets/login.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from 'react-hook-form'

interface buttonClickedProps {
  onRegisterPart: React.MouseEventHandler<HTMLAnchorElement>
  onReset: React.MouseEventHandler<HTMLAnchorElement>
}

interface Inputs {
  email: string,
  Password: number | string | symbol,
};


export const Login = (props: buttonClickedProps) => {

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("ایمیل خود را وارد کنید")
      .email("ایمیل وارد شده معتبر نمی باشد"),

    Password: Yup.string()
      .required("رمز عبور جدید را وارد کنید")
      .min(7, "رمز عبور نمی تواند کمتر از 7 کاراکتر باشد")
      .matches(/([0-9])/, "در رمز عبور خود از عدد استفاده کنید")
      .matches(/([!,@,#,$,%,^,&,*,?,~,_,-,+,=,/])/, "در رمز عبور خود از علامت استفاده کنید"),
  });

  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode: "onTouched",
    resolver: yupResolver(formSchema)
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <section className='font-Lalezar tracking-wider'>
      <div className='w-1/2 m-auto h-auto flex flex-col items-center justify-center rounded overflow-hidden bg-white shadow-lg md:w-full md:flex-row'>
        <div className='relative w-full h-full md:block'>
          <img className='animate-slideDown' src={loginImg} alt="register" />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -tranlate-y-1/2 divide-y divide-white md:top-1/3 md:left-1/2 md:-translate-x-2/4 md:-tranlate-y-2/4'>
            <div className='text-white text-center text-xl tracking-wider divide-y mb-4 sm:text-2xl'>آکادمی آموزشی بامبو</div>
            <div className='flex flex-row items-center justify-center'>
              <AiOutlineInstagram className='mt-2 mx-4 text-xl text-white cursor-pointer hover:text-orange-400' />
              <TbBrandTelegram className='mt-2 mx-4 text-xl text-white cursor-pointer hover:text-blue-400' />
              <AiOutlineWhatsApp className='mt-3 mx-4 text-xl text-white cursor-pointer hover:text-green-400' />
              <AiOutlineYoutube className='mt-3 mx-4 text-xl text-white cursor-pointer hover:text-red-700' />
            </div>
          </div>
          <div className='hidden md:block absolute top-3/4 left-1/2 -translate-x-2/4'>
            <BiHomeSmile className='mt-2 mx-4 top-2/4 left-2/4 text-3xl text-white cursor-pointer' />
          </div>
        </div>
        <div className='relative mx-5 w-full h-full flex flex-col justify-between animate-slideUp md:w-2/3'>
          <div className='flex items-center justify-between'>
            <h2 className='mb-12 mx-2 text-2xl text-center'>ورود کاربر</h2>
            <BiHomeSmile className='mt-2 mx-4 top-3/4 left-2/4 text-2xl cursor-pointer md:hidden' />
          </div>
          <form className='mx-5 flex flex-col items-center justify-between' onSubmit={handleSubmit(onSubmit)}>
            {/* email validatation */}
            <input type="email" {...register("email")} className='w-full mb-2 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='ایمیل:' />
            <p className="text-red-700 text-sm">{errors.email?.message?.toString()}</p>
            {/* password, icon , validate */}
            <div className="w-full relative">
              <input type={showPassword ? "text" : "password"} {...register("Password")} className='w-full my-2 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='رمز عبور*:' />
              <p className="text-red-700 text-sm">{errors.Password?.message?.toString()}</p>
              <span onClick={() => { setShowPassword(!showPassword) }} className="absolute top-4 left-3 text-xl cursor-pointer text-greenishBlue">
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>

            <div className='w-full flex flex-row flex-wrap items-center justify-between my-4'>
              <span>مرا به خاطر بسپار<input className='mx-2' type="checkbox" /></span>
              <a href="#" className='text-sm mx-2 hover:text-lg' onClick={props.onReset}>فراموشی رمز</a>
            </div>
            <button className='py-2 px-4 my-4 text-center border border-transparent rounded cursor-pointer transition duration-500 bg-greenishBlue text-white hover:w-1/2'>ورود</button>
            <span className='text-sm mb-2'>هنوز ثبت نام نکرده اید؟<a href="#" className='text-sm mx-2 hover:text-lg' onClick={props.onRegisterPart}>ثبت نام</a></span>
          </form>
        </div>
      </div>
    </section>
  )
}

