import { useState } from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import namadEtemad from './../../assets/enamad.png'
import kasboKar from './../../assets/kasboKar.png'
import samandehi from './../../assets/samandehi.png'


const Footer = () => {
    const [text, setText] = useState('')


    const handleSubscribe = () => {
        setText('شما با موفقیت عضو شدید!')
    }

    return (
        <footer className="w-full bg-greenishBlue font-Lalezar">
            <div className="flex flex-col items-center justify-between w-11/12 gap-10 m-auto md:flex md:flex-row">
                <div className="flex flex-col items-start py-5">
                    <h4 className="mb-2 text-white">درباره بامبو</h4>
                    <p className="text-sm text-white">بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
                        است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
                        دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد</p>
                </div>
                <div className="flex flex-col py-5">
                    <h4 className="mb-2 text-white">خبرنامه</h4>
                    <div className="flex flex-col sm:flex sm:flex-row">
                        <input className="w-full px-2 text-white border-none outline-none bg-footerBg h-9" type="email" placeholder="ایمیل خود را وارد کنید ..." />
                        <button className="w-20 my-2 cursor-pointer bg-footerBg2 text-footerText hover:text-white sm:my-0" onClick={() => { handleSubscribe() }}>عضویت</button>
                    </div>
                    <p className='my-2 text-footerText'>{text}</p>
                </div>
            </div>
            <span className="block w-11/12 m-auto border-b-2 border-gray-400"></span>
            <div className='flex flex-col items-center justify-between w-11/12 gap-10 m-auto mt-2 sm:flex sm:flex-row'>
                <div className="flex flex-col items-start justify-between gap-2">
                    <h4 className="mb-2 text-white">ارتباط با ما</h4>
                    <p className="text-xs text-white">iwillbemyvision@gmail.com</p>
                    <p className="text-xs text-white">amir.azhkan@yahoo.com</p>
                    <div className='flex justify-between gap-3 mb-2 text-lg text-white cursor-pointer'>
                        <AiOutlineInstagram />
                        <AiOutlineWhatsApp />
                        <AiOutlineYoutube />
                        <TbBrandTelegram />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-between gap-2 m-auto">
                    <h4 className="mb-2 text-white">همراه باشید</h4>
                    <p className="text-xs text-white cursor-pointer">سوالات رایج</p>
                    <p className="text-xs text-white cursor-pointer">قوانین</p>
                    <p className="text-xs text-white cursor-pointer">خدمات</p>
                </div>
                <div className='flex flex-row items-center justify-center gap-3' >
                    <div className='w-16 h-16 bg-white'>
                        <img src={namadEtemad} alt="نماد اعتماد الکترونیک" />
                    </div>
                    <div className='flex items-center justify-center w-16 h-16 bg-white'>
                        <img className='max-w-full max-h-full p-1' src={kasboKar} alt="عضو اتحادیه کسب و کارهای مجازی" />
                    </div>
                    <div className='w-16 h-16 bg-white'>
                        <img src={samandehi} alt="نشان ملی ثبت" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center my-5 tracking-wider bg-footerBg2 h-14'>
                <p className='text-xs text-white'>کليه حقوق محصولات و محتوای اين سایت متعلق به <span className='text-footerText'>بامبو</span> می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست</p>
            </div>
        </footer>
    )
}

export default Footer