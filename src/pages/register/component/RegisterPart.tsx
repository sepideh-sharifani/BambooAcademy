import { FormEvent, useEffect, useRef, useState } from 'react'
// @ts-ignore
import registerImg from '../../../../public/register-assets/register.png'
import { Input } from '../component/base/Input'
import {
    AiOutlineInstagram,
    AiOutlineWhatsApp,
    AiOutlineYoutube,
    AiOutlineEyeInvisible,
    AiOutlineEye,
    AiOutlineExclamation
} from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BiHomeSmile } from 'react-icons/bi'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// @ts-ignore
import Link from "next/link";
import Image from "next/image";

const USER_REGEX = /^[\u0600-\u06FF\s][\u0600-\u06FF\s0-9-_]{3,24}$|^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const MOBILE_REGEX = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;

export const RegisterPart: React.FunctionComponent = () => {
    //using refrence for user input that allows us to set the focus on user input when the component loads

    const userRef = useRef<HTMLInputElement>(null!)
    const errRef = useRef(null)

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [mobile, setMobile] = useState('');
    const [validMobile, setValidMobile] = useState(false);
    const [mobileFocus, setMobileFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user])


    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = MOBILE_REGEX.test(mobile);
        setValidMobile(result);
    }, [mobile])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(true)
    }

    const [showCPassword, setShowCPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section className='flex items-center justify-center h-screen bg-gray-100 font-Yekan'>
                    {/* <p ref={errRef} className={errMsg ? "bg-black text-white" : ""}>{errMsg}</p> */}
                    <div className='w-100 h-auto'>
                        <div
                            className='flex items-center justify-center w-4/5 h-auto m-auto overflow-hidden bg-white rounded shadow-lg md:w-full'>
                            <div
                                className='relative flex flex-col justify-evenly items-center w-2/3 h-full mx-5 animate-slideUp'>
                                <h2 className='text-xl'>ثبت نام</h2>
                                <form className='flex flex-col mx-5 w-full' onSubmit={handleSubmit}>
                                    {/* user verification */}
                                    <Input
                                        title='لطفا نام کاربری خود را وارد کنید'
                                        type="text"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        required
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                        variant='Primary'
                                        placeholder='نام کاربری:' />
                                    <p className={userFocus && user && !validName ? "text-red-900 font-semibold text-xs" : "hidden"}>نام کاربری بایستی شامل حداقل 4 حرف باشد</p>
                                    {/* email validatation */}
                                    <Input
                                        title='لطفا ایمیل خود را وارد کنید'
                                        type="email"
                                        dir='ltr'
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                        variant='Primary'
                                        placeholder='ایمیل*:' />
                                    <p className={emailFocus && email && !validEmail ? "text-red-900 font-semibold text-xs" : "hidden"}>ایمیل معتبر وارد کنید</p>
                                    {/* phoneNumber validation */}
                                    <Input
                                        title='لطفا شماره موبایل خود را وارد کنید'
                                        type="number"
                                        dir='ltr'
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                        onFocus={() => setMobileFocus(true)}
                                        onBlur={() => setMobileFocus(false)}
                                        variant='Primary'
                                        placeholder='شماره موبایل*:' />
                                    <p className={mobileFocus && mobile && !validMobile ? "text-red-900 font-semibold text-xs" : "hidden"}>شماره موبایل معنبر وارد کنید</p>
                                    {/* Identification Number validation */}
                                    {/* <Input type="number" {...register("ID", { required: true })}
                                variant='Primary'
                                placeholder='شماره ملی*:' />
                            <p className="text-xs text-red-700">{errors.ID?.message?.toString()}</p> */}

                                    {/* password, icon , validate */}
                                    <div className="relative">
                                        <Input dir='ltr' type={showPassword ? "text" : "password"}
                                            variant='Primary'
                                            onChange={(e) => setPwd(e.target.value)}
                                            required
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                            placeholder='رمز عبور*:' />
                                        <p className={pwdFocus && pwd && !validPwd ? "text-red-900 font-semibold text-xs" : "hidden"}>رمز عبور بایستی شامل حداقل 8 حرف بزرگ و کوچک، عدد و علامت باشد</p>
                                        <span onClick={() => {
                                            setShowPassword(!showPassword)
                                        }} className="absolute text-xl cursor-pointer top-4 right-3 text-greenishBlue">
                                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                        </span>
                                    </div>
                                    {/* {password confirmation} */}
                                    <div className="relative">
                                        <Input dir='ltr'
                                            type={showCPassword ? "text" : "password"}
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            value={matchPwd}
                                            required
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                            variant='Primary'
                                            placeholder='تایید رمز عبور:*' />
                                        <p className={matchFocus && matchPwd && !validMatch ? "text-red-900 font-semibold text-xs" : "hidden"}>
                                            رمز عبور مطابقت ندارد
                                        </p>
                                        <span onClick={() => {
                                            setShowCPassword(!showCPassword)
                                        }} className="absolute text-xl cursor-pointer top-4 right-3 text-greenishBlue">
                                            {showCPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                        </span>
                                    </div>
                                    <Link href={'/register/login'}><span
                                        className='text-xs my-4'>حساب کاربری دارید؟ورود</span></Link>
                                    <button disabled={!validName || !validMatch || !validPwd ? true : false}
                                        type='submit'
                                        className='py-2 my-4 text-center text-white transition duration-100 border border-transparent rounded cursor-pointer bg-greenishBlue hover:bg-neutral-200 hover:text-black hover:border-greenishBlue'>ثبت
                                        نام
                                    </button>
                                </form>

                                <div className='absolute rounded-full bg-greenishBlue w-44 h-44 -left-48 -top-10 md:hidden' />
                                <div className='absolute rounded-full bg-greenishBlue w-44 h-44 -right-52 top-56 md:hidden' />
                            </div>
                            <div className='hidden w-full h-full md:block md:relative p-0 m-0'>
                                <Image className='animate-slideDown' src={registerImg} alt="register" />
                                <div
                                    className='absolute divide-y divide-white top-1/3 left-1/2 -translate-x-2/4 -tranlate-y-2/4'>
                                    <div className='mb-4 text-xl text-center text-white divide-y'>آکادمی آموزشی بامبو</div>
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
                                <button className='absolute top-3/4 left-1/2 -translate-x-2/4'
                                >
                                    <Link href={'/'}>
                                        <BiHomeSmile className='mx-4 mt-2 text-3xl text-white cursor-pointer top-2/4 left-2/4' />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}