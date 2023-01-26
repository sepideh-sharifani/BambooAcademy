import { useState } from 'react'
import loginImg from '../assets/login.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router';

interface buttonClickedProps {
  onRegisterPart: React.MouseEventHandler<HTMLAnchorElement>
  onReset: React.MouseEventHandler<HTMLAnchorElement>
}

interface Inputs {
  email: string,
  Password: number | string | symbol,
};


export const Login = (props: buttonClickedProps) => {
  const navigate = useNavigate()
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
    <section className='tracking-wider font-Lalezar'>
      <div className='flex flex-col items-center justify-center w-1/2 h-auto m-auto overflow-hidden bg-white rounded shadow-lg md:w-full md:flex-row'>
        <div className='relative w-full h-full md:block'>
          <img className='animate-slideDown' src={loginImg} alt="register" />
          <div className='absolute -translate-x-1/2 divide-y divide-white top-1/2 left-1/2 -tranlate-y-1/2 md:top-1/3 md:left-1/2 md:-translate-x-2/4 md:-tranlate-y-2/4'>
            <div className='mb-4 text-xl tracking-wider text-center text-white divide-y sm:text-2xl'>آکادمی آموزشی بامبو</div>
            <div className='flex flex-row items-center justify-center'>
              <AiOutlineInstagram className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-orange-400' />
              <TbBrandTelegram className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-blue-400' />
              <AiOutlineWhatsApp className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-green-400' />
              <AiOutlineYoutube className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-red-700' />
            </div>
          </div>
          <button className='absolute hidden md:block top-3/4 left-1/2 -translate-x-2/4' onClick={()=> navigate("./../landing")}>
            <BiHomeSmile className='mx-4 mt-2 text-3xl text-white cursor-pointer top-2/4 left-2/4' />
          </button>
        </div>
        <div className='relative flex flex-col justify-between w-full h-full mx-5 animate-slideUp md:w-2/3'>
          <div className='flex items-center justify-between'>
            <h2 className='mx-2 mb-12 text-2xl text-center'>ورود کاربر</h2>
            <BiHomeSmile className='mx-4 mt-2 text-2xl cursor-pointer top-3/4 left-2/4 md:hidden' />
          </div>
          <form className='flex flex-col items-center justify-between mx-5' onSubmit={handleSubmit(onSubmit)}>
            {/* email validatation */}
            <input type="email" {...register("email")} className='w-full px-1 py-2 mb-2 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='ایمیل:' />
            <p className="text-sm text-red-700">{errors.email?.message?.toString()}</p>
            {/* password, icon , validate */}
            <div className="relative w-full">
              <input type={showPassword ? "text" : "password"} {...register("Password")} className='w-full px-1 py-2 my-2 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='رمز عبور*:' />
              <p className="text-sm text-red-700">{errors.Password?.message?.toString()}</p>
              <span onClick={() => { setShowPassword(!showPassword) }} className="absolute text-xl cursor-pointer top-4 left-3 text-greenishBlue">
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>

            <div className='flex flex-row flex-wrap items-center justify-between w-full my-4'>
              <span>مرا به خاطر بسپار<input className='mx-2' type="checkbox" /></span>
              <a href="#" className='mx-2 text-sm hover:text-lg' onClick={props.onReset}>فراموشی رمز</a>
            </div>
            <button className='px-4 py-2 my-4 text-center text-white transition duration-500 border border-transparent rounded cursor-pointer bg-greenishBlue hover:w-1/2'>ورود</button>
            <span className='mb-2 text-sm'>هنوز ثبت نام نکرده اید؟<a href="#" className='mx-2 text-sm hover:text-lg' onClick={props.onRegisterPart}>ثبت نام</a></span>
          </form>
        </div>
      </div>
    </section>
  )
}

