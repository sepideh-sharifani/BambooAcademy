import React from 'react'
import loginImg from '../assets/login.png'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube, AiOutlineClose } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'

interface CrossProps {
    onLogin: React.MouseEventHandler<HTMLDivElement>
}

export const Reset = (props: CrossProps) => {
    return (
        <section className='tracking-wider font-Lalezar'>
            <div className='flex flex-col items-center justify-center w-1/2 h-auto m-auto overflow-hidden bg-white rounded shadow-lg md:w-full md:flex-row'>
                <div className='relative w-full h-full md:block'>
                    <img className='animate-slideDown' src={loginImg} alt="register" />
                    <div onClick={props.onLogin} className="absolute flex items-center justify-center w-10 h-10 border-2 border-white border-solid rounded-full cursor-pointer top-4 right-4">
                        <AiOutlineClose className='text-xl font-extrabold text-white' />
                    </div>
                    <div className='absolute -translate-x-1/2 divide-y divide-white top-1/2 left-1/2 -tranlate-y-1/2 md:top-1/3 md:left-1/2 md:-translate-x-2/4 md:-tranlate-y-2/4'>
                        <div className='mb-4 text-xl tracking-wider text-center text-white divide-y sm:text-2xl'>آکادمی آموزشی بامبو</div>
                        <div className='flex flex-row items-center justify-center'>
                            <AiOutlineInstagram className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-orange-400' />
                            <TbBrandTelegram className='mx-4 mt-2 text-xl text-white cursor-pointer hover:text-blue-400' />
                            <AiOutlineWhatsApp className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-green-400' />
                            <AiOutlineYoutube className='mx-4 mt-3 text-xl text-white cursor-pointer hover:text-red-700' />
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col justify-between w-full h-full mx-5 animate-slideUp md:w-2/3'>
                    <div className='flex items-center justify-between mb-12'>
                        <h2 className='mx-2 my-6 text-2xl text-center'>فراموشی رمز</h2>
                        <BiHomeSmile className='mx-4 mt-2 text-2xl cursor-pointer top-3/4 left-2/4' />
                    </div>
                    <form className='flex flex-col items-center justify-between mx-5'>
                        <input type="email" className='w-full px-1 py-2 mb-2 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='ایمیل:' />
                        <button className='px-4 py-2 my-4 text-center text-white transition duration-500 border border-transparent rounded cursor-pointer bg-greenishBlue hover:w-1/2'>ارسال ایمیل</button>
                        <span className='my-2 text-sm text-center'>به زودی برای شما یک لینک بازنشانی ارسال خواهد شد</span>
                    </form>
                </div>

            </div>
        </section>
    )
}

