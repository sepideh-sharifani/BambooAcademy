import { FormEvent, useEffect, useRef, useState } from 'react'
import DatePicker from "react-multi-date-picker"
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
import instance from '../../../core/config/axios'
import Login from './Login'

const USER_REGEX = /^[\u0600-\u06FF\s][\u0600-\u06FF\s0-9-_]{3,24}$|^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const MOBILE_REGEX = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
const ID_REGEX = /^(?!(\d)\1{9})\d{10}$/;
const REGISTER_URL = '/api/auth/register';

export const RegisterPart: React.FunctionComponent = () => {

    const [birthDate, setBirthDate] = useState('');

    const [fullName, setFullName] = useState('');
    const [validFullName, setValidFullName] = useState(false);
    const [fullNameFocus, setFullNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [nationalId, setNationalId] = useState('');
    const [validNationalId, setValidNationalId] = useState(false);
    const [nationalIdFocus, setNationalIdFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [Msg, setMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const result = USER_REGEX.test(fullName);
        setValidFullName(result);
    }, [fullName])


    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = MOBILE_REGEX.test(phoneNumber);
        setValidPhoneNumber(result);
    }, [phoneNumber])

    useEffect(() => {
        const result = ID_REGEX.test(nationalId);
        setValidNationalId(result);
    }, [nationalId])

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        setValidPassword(result);
        const match = password === matchPwd;
        setValidMatch(match)
    }, [password, matchPwd])

    useEffect(() => {
        setMsg('');
    }, [fullName, password, matchPwd, phoneNumber, email, nationalId])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            fullName,
            email,
            password,
            phoneNumber,
            birthDate,
            nationalId,
            profile: "image.png",
        };
        try {
            const response = await instance.post(REGISTER_URL, user);
            setSuccess(true);
            //clear input fields
            console.log(response)
            setEmail('');
            setFullName('');
            setPassword('');
            setMatchPwd('');
            setNationalId('');
            setPhoneNumber('');
            setBirthDate('');
        } catch (error: any) {
            setMsg(error?.response.data?.message[0].message)
        }
    }

    const [showCPassword, setShowCPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {success ? (
                <Login />
            ) : (
                <section className='flex items-center justify-center h-screen bg-gray-100 font-Yekan'>
                    <div className='w-100 h-auto'>
                        <div
                            className='flex items-center justify-center m-auto overflow-hidden bg-white rounded shadow-lg'>
                            <div
                                className='relative flex flex-col justify-start items-center w-2/3 h-full mx-5 animate-slideUp'>
                                <h2 className='text-xl mt-2 font-bold'>ثبت نام</h2>
                                <form className='flex flex-col justify-center items-center mx-5 w-full' onSubmit={handleSubmit}>
                                    {/* user verification */}
                                    <Input
                                        title='لطفا نام کاربری خود را وارد کنید'
                                        type="text"
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                        onFocus={() => setFullNameFocus(true)}
                                        onBlur={() => setFullNameFocus(false)}
                                        variant='Primary'
                                        placeholder='نام کاربری:' />
                                    <p className={fullNameFocus && fullName && !validFullName ? "text-red-900 font-semibold text-xs" : "hidden"}>نام کاربری بایستی شامل حداقل 4 حرف باشد</p>
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
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                        onFocus={() => setPhoneNumberFocus(true)}
                                        onBlur={() => setPhoneNumberFocus(false)}
                                        variant='Primary'
                                        placeholder='شماره موبایل*:' />
                                    <p className={phoneNumberFocus && phoneNumber && !validPhoneNumber ? "text-red-900 font-semibold text-xs" : "hidden"}>شماره موبایل معنبر وارد کنید</p>
                                    {/* Identification Number validation */}
                                    <Input
                                        title='لطفا کد ملی خود را وارد کنید'
                                        type="number"
                                        onChange={(e) => setNationalId(e.target.value)}
                                        required
                                        onFocus={() => setNationalIdFocus(true)}
                                        onBlur={() => setNationalIdFocus(false)}
                                        variant='Primary'
                                        placeholder='شماره ملی*:' />
                                    <p className={nationalIdFocus && nationalId && !validNationalId ? "text-red-900 font-semibold text-xs" : "hidden"}>کد ملی معنبر وارد کنید</p>
                                    <Input
                                        type="date"
                                        onChange={(e) => setBirthDate(e.target.value)} />
                                    {/* password, icon , validate */}
                                    <div className="relative w-full">
                                        <Input dir='ltr' type={showPassword ? "text" : "password"}
                                            variant='Primary'
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            onFocus={() => setPasswordFocus(true)}
                                            onBlur={() => setPasswordFocus(false)}
                                            placeholder='رمز عبور*:' />
                                        <p className={passwordFocus && password && !validPassword ? "text-red-900 font-semibold text-xs" : "hidden"}>رمز عبور بایستی شامل حداقل 8 حرف بزرگ و کوچک، عدد و علامت باشد</p>
                                        <span onClick={() => {
                                            setShowPassword(!showPassword)
                                        }} className="absolute text-xl cursor-pointer top-4 right-3 text-greenishBlue">
                                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                        </span>
                                    </div>
                                    {/* {password confirmation} */}
                                    <div className="relative w-full">
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
                                    <span className='text-sm font-bold my-4'>حساب کاربری دارید؟<Link href={'/register/login'}><span className='m-2 hover:text-lg'>ورود</span></Link></span>
                                    <Link href={'/register/registerEmployee'}><span className='text-sm font-bold my-4'>ایجاد حساب کاربری ادمین</span></Link>
                                    <button disabled={!validFullName || !validMatch || !validPassword || !validPhoneNumber || !validNationalId ? true : false}
                                        type='submit'
                                        className='w-[100px] py-2 my-4 text-white transition duration-500 border border-transparent rounded cursor-pointer bg-greenishBlue hover:bg-neutral-200 hover:text-black'>ثبت
                                        نام
                                    </button>
                                </form>
                                <p className={Msg ? "bg-greenishBlue text-white p-2 mb-2" : ""}>{Msg}</p>
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