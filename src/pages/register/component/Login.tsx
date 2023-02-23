import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'
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
// @ts-ignore
import Link from "next/link"
import Image from "next/image"
import { Input } from '../component/base/Input'
import instance from '../../../core/config/axios'


const LOGIN_URL = '/api/auth/login'

const Login = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email,
            password
        };
        try {
            const response = await instance.post(LOGIN_URL, user,);
            console.log(response)
            //clear input fields
            setEmail('');
            setPassword('');
            localStorage.setItem('token', JSON.stringify(response.data.result.jwtToken))
            localStorage.setItem('user_Data', JSON.stringify(response.data.result.studentModel))
            setSuccess(true);
        } catch (error: any) {
            setErrMsg(error?.response?.data?.message?.message[0].message)
        }
    }

    return (
        <>
            {success ? (
                router.back()
            ) : (
                <section className='flex items-center justify-center h-screen bg-gray-100 font-Yekan'>
                    <div className='w-100 h-auto'>
                        <div
                            className='flex flex-col items-center justify-center w-11/12 h-auto m-auto overflow-hidden bg-white rounded shadow-lg sm:w-full sm:flex-row'>
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
                            <div className='relative flex flex-col justify-start items-center w-full h-full mx-5 animate-slideUp'>
                                <div className='flex items-center justify-between'>
                                    <h2 className='m-4 text-lg sm:mb-10 sm:text-xl text-center'>ورود کاربر</h2>
                                    <BiHomeSmile className='mx-4 mt-2 text-2xl cursor-pointer top-3/4 left-2/4 md:hidden' />
                                </div>
                                <form
                                    className='flex flex-col gap-2 w-full items-center justify-between p-4'
                                    onSubmit={handleSubmit}>
                                    {/* email validatation */}
                                    <Input
                                        type="email"
                                        variant='Primary'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        placeholder='ایمیل:' />
                                    {/* password, icon , validate */}
                                    <div className="relative w-full">
                                        <Input
                                            dir='ltr'
                                            type={showPassword ? "text" : "password"}
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            required
                                            variant="Primary"
                                            placeholder='رمز عبور*:' />
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
                                    <button
                                        type='submit'
                                        className='w-1/2 px-4 py-2 my-4 text-center text-white shadow-2xl border border-transparent rounded cursor-pointer bg-greenishBlue hover:bg-gray-200 hover:text-black hover:border-greenishBlue'>ورود
                                    </button>
                                    <Link href={"/register/register"}><span
                                        className='text-lg font-semibold'>هنوز ثبت نام نکرده اید؟</span></Link>
                                    <Link href={"/register/loginEmployee"}><span
                                        className='text-lg font-semibold'>ورود به حساب داشبورد</span></Link>
                                </form>
                                <p className={errMsg ? "bg-greenishBlue text-white p-2 mb-2" : ""}>{errMsg}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login;