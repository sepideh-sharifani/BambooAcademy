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
        <section className='font-Lalezar tracking-wider'>
            <div className='w-1/2 m-auto h-auto flex flex-col items-center justify-center rounded overflow-hidden bg-white shadow-lg md:w-full md:flex-row'>
                <div className='relative w-full h-full md:block'>
                    <img className='animate-slideDown' src={loginImg} alt="register" />
                    <div onClick={props.onLogin} className="absolute top-4 right-4 h-10 w-10 border-2 border-solid border-white rounded-full flex justify-center items-center cursor-pointer">
                        <AiOutlineClose className='text-white text-xl font-extrabold' />
                    </div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -tranlate-y-1/2 divide-y divide-white md:top-1/3 md:left-1/2 md:-translate-x-2/4 md:-tranlate-y-2/4'>
                        <div className='text-white text-center text-xl tracking-wider divide-y mb-4 sm:text-2xl'>آکادمی آموزشی بامبو</div>
                        <div className='flex flex-row items-center justify-center'>
                            <AiOutlineInstagram className='mt-2 mx-4 text-xl text-white cursor-pointer hover:text-orange-400' />
                            <TbBrandTelegram className='mt-2 mx-4 text-xl text-white cursor-pointer hover:text-blue-400' />
                            <AiOutlineWhatsApp className='mt-3 mx-4 text-xl text-white cursor-pointer hover:text-green-400' />
                            <AiOutlineYoutube className='mt-3 mx-4 text-xl text-white cursor-pointer hover:text-red-700' />
                        </div>
                    </div>
                </div>
                <div className='relative mx-5 w-full h-full flex flex-col justify-between animate-slideUp md:w-2/3'>
                    <div className='flex mb-12 items-center justify-between'>
                        <h2 className='my-6 mx-2 text-2xl text-center'>فراموشی رمز</h2>
                        <BiHomeSmile className='mt-2 mx-4 top-3/4 left-2/4 text-2xl cursor-pointer' />
                    </div>
                    <form className='mx-5 flex flex-col items-center justify-between'>
                        <input type="email" className='w-full mb-2 py-2 px-1 bg-gray-100 rounded-sm outline-none focus:border-b-2 focus:border-greenishBlue' placeholder='ایمیل:' />
                        <button className='py-2 px-4 my-4 text-center border border-transparent rounded cursor-pointer transition duration-500 bg-greenishBlue text-white hover:w-1/2'>ارسال ایمیل</button>
                        <span className='text-sm my-2 text-center'>به زودی برای شما یک لینک بازنشانی ارسال خواهد شد</span>
                    </form>
                </div>

            </div>
        </section>
    )
}

