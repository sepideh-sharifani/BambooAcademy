export default function NavBar() {
    return <nav className={`border-b-[1px] border-b-[#D1D1D1] w-full xl:max-w-[90%] m-auto fixed top-0 left-1/2 -translate-x-1/2 z-20 h-[4rem]`}>
    <ul className={`w-full flex justify-between h-full `}>
      <div className={` flex`}>
        <li className={`text-white text-xl p-4`}>
          <a href="">{`ثبت نام`}</a>
        </li>
        <li className={`text-white text-xl p-4`}>
          <a href="">{`ورود`}</a>
        </li>
      </div>
      <div className={` flex max-[650px]:hidden`}>
        <li className={`text-white text-xl p-4`}>
          <a href="">{`درباره ما`}</a>
        </li>
        <li className={`text-white text-xl p-4`}>
          <a href="">{`خدمات`}</a>
        </li>
        <li className={`text-white text-xl p-4`}>
          <a href="">{`مقالات`}</a>
        </li>
        <li className={`text-white text-xl p-4`}>
          <a href="">{`دوره‌ها`}</a>
        </li>
      </div>
      <div className={``}>
        <li className={`text-white text-xl p-4`}>
          <a href="" className={`flex`}>
            <span>{"بامبو"}</span>
            <div className={`bg-bamboIcon bg-no-repeat bg-contain h-5 bg-center w-5 self-center`}></div>
          </a>
        </li>
      </div>
    </ul>
  </nav>
}