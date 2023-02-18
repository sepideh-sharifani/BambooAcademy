import React from 'react'
// @ts-ignore
import loginImg from '../../../../public/register-assets/login.png'
import {AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineClose} from 'react-icons/ai'
import {TbBrandTelegram} from 'react-icons/tb'
import {BiHomeSmile} from 'react-icons/bi'
// @ts-ignore
import Link from "next/link";
import Image from "next/image";

interface CrossProps {
    onLogin: React.MouseEventHandler<HTMLDivElement>
}

export const Reset = () => {
    return (
        <section className='flex items-center justify-center h-screen bg-gray-100 font-Yekan'>
            <div className='w-100 h-auto'>
                <div
                    className='flex flex-col items-center justify-center w-1/2 h-auto m-auto overflow-hidden bg-white rounded shadow-lg md:w-full md:flex-row'>
                    <div className='relative w-full h-full md:block'>
                        <Image className='animate-slideDown' src={loginImg} alt="register"/>
                        <Link href={"/register/login"}>
                            <div
                                className="absolute flex items-center justify-center w-10 h-10 border-2 border-white border-solid rounded-full cursor-pointer top-4 right-4">
                                <AiOutlineClose className='text-xl font-extrabold text-white'/>
                            </div>
                        </Link>
                        <div
                            className='absolute -translate-x-1/2 divide-y divide-white top-1/2 left-1/2 -tranlate-y-1/2 md:top-1/3 md:left-1/2 md:-translate-x-2/4 md:-tranlate-y-2/4'>
                            <div
                                className='mb-4 text-xl tracking-wider text-center text-white divide-y sm:text-2xl'>آکادمی
                                آموزشی بامبو
                            </div>
                            <div className='flex flex-row items-center justify-center'>
                                <AiOutlineInstagram
                                    className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-orange-400'/>
                                <TbBrandTelegram
                                    className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-blue-400'/>
                                <AiOutlineWhatsApp
                                    className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-green-400'/>
                                <AiOutlineYoutube
                                    className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-red-700'/>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex flex-col justify-between w-full h-full mx-5 animate-slideUp md:w-2/3'>
                        <div className='flex items-center justify-between mb-12'>
                            <h2 className='mx-2 my-6 text-lg sm:text-xl text-center'>فراموشی رمز</h2>
                            <button>
                                <Link href={'/'}>
                                    <BiHomeSmile className='mx-4 mt-2 text-2xl cursor-pointer top-3/4 left-2/4'/>
                                </Link>
                            </button>
                        </div>
                        <form className='flex flex-col items-center justify-between mx-5 py-2'>
                            <input type="email"
                                   className='w-full px-1 py-2 mb-2 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue placeholder:text-xs'
                                   placeholder='ایمیل:'/>
                            <button
                                className='px-4 py-2 my-4 text-center text-sm text-white transition duration-500 border border-transparent rounded cursor-pointer bg-greenishBlue hover:bg-gray-200 hover:text-black hover:border-greenishBlue'>ارسال
                                ایمیل
                            </button>
                            <span
                                className='my-2 text-xs text-center'>به زودی برای شما یک لینک بازنشانی ارسال خواهد شد</span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

