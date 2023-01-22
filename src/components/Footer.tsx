import { useState } from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import namadEtemad from '../../../assets/enamad.png'
import kasboKar from '../../../assets/kasboKar.png'
import samandehi from '../../../assets/samandehi.png'


const Footer = () => {
    const [text, setText] = useState('')


    const handleSubscribe = () => {
        setText('شما با موفقیت عضو شدید!')
    }

    return (
        <footer className="bg-greenishBlue w-full font-Lalezar">
            <div className="flex flex-col items-center justify-between w-11/12 m-auto gap-10 md:flex md:flex-row">
                <div className="flex flex-col items-start py-5">
                    <h4 className="text-white mb-2">درباره بامبو</h4>
                    <p className="text-white text-sm">بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
                        است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
                        دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد</p>
                </div>
                <div className="flex flex-col py-5">
                    <h4 className="text-white mb-2">خبرنامه</h4>
                    <div className="flex flex-col sm:flex sm:flex-row">
                        <input className="bg-footerBg w-full h-9 px-2 border-none outline-none text-white" type="email" placeholder="ایمیل خود را وارد کنید ..." />
                        <button className="bg-footerBg2 w-20 my-2 text-footerText cursor-pointer hover:text-white sm:my-0" onClick={() => { handleSubscribe() }}>عضویت</button>
                    </div>
                    <p className='text-footerText my-2'>{text}</p>
                </div>
            </div>
            <span className="block border-b-2 border-gray-400 w-11/12 m-auto"></span>
            <div className='flex flex-col items-center justify-between w-11/12 m-auto gap-10 mt-2 sm:flex sm:flex-row'>
                <div className="flex flex-col items-start justify-between gap-2">
                    <h4 className="text-white mb-2">ارتباط با ما</h4>
                    <p className="text-white text-xs">iwillbemyvision@gmail.com</p>
                    <p className="text-white text-xs">amir.azhkan@yahoo.com</p>
                    <div className='flex justify-between gap-3 text-white mb-2 text-lg cursor-pointer'>
                        <AiOutlineInstagram />
                        <AiOutlineWhatsApp />
                        <AiOutlineYoutube />
                        <TbBrandTelegram />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-between m-auto gap-2">
                    <h4 className="text-white mb-2">همراه باشید</h4>
                    <p className="text-white text-xs cursor-pointer">سوالات رایج</p>
                    <p className="text-white text-xs cursor-pointer">قوانین</p>
                    <p className="text-white text-xs cursor-pointer">خدمات</p>
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
            <div className='flex items-center justify-center my-5 bg-footerBg2 h-14 tracking-wider'>
                <p className='text-white text-xs'>کليه حقوق محصولات و محتوای اين سایت متعلق به <span className='text-footerText'>بامبو</span> می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست</p>
            </div>
        </footer>
    )
}

export default Footer