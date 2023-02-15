import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../../data.json";
import { Data } from "../../DataInterface";

interface INavBody {
  getData: (datas: Data[]) => void;
}

function NavBody({ getData }: INavBody) {
  const [datas, setDatas] = useState<Data[]>([]);
  const [isActive,setIsActive] = useState([
    true,false,false,false
  ])
  const dataNavBody = [
    { title: "همه دوره ها", pointer: "دوره ها" },
    { title: "جدیدترین ها", pointer: "جدیدترین" },
    { title: "گران ترین ها", pointer: "گران‌ترین" },
    { title: "تکمیل نشده ها", pointer: "تکمیل نشده" },
  ];

  function handleClick(e:  any,index:number) {
    const wasActive = isActive.indexOf(true)
    index !== wasActive && setIsActive(isActive.map((isActive,indexMap)=>isActive ? !isActive :indexMap === index ? !isActive : isActive))

    switch (e.currentTarget.id) {
      case "همه دوره ها":
        setDatas([...data]);
        break;
      case "جدیدترین ها":
        setDatas(
          [...data].sort((a, b) =>
            b.startDate
              .split("/")
              .join()
              .localeCompare(a.startDate.split("/").join())
          )
        );
        break;
      case "گران ترین ها":
        setDatas([...data].sort((a, b) => Number(b.price) - Number(a.price)));
        break;
      case "تکمیل نشده ها":
        setDatas([...data].filter((a) => a.courseStatus !== 100));
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    getData(datas);
  }, [datas]);

  return (
    <ul className="font-sans min-w-screen transition delay-150 list-none flex justify-around flex-row-reverse flex-none
     text-center gap-2 mt-2 items-center mx-5 sm:m-0">
      {dataNavBody.map((data,i) => (
        <li key={i} onClick={(e) => handleClick(e,i)} id={data.title}>
          <NavLink
            className={
              `rounded-sm text-center text-xs xxs:text-sm xxs:tracking-wide no-underline whitespace-nowrap p-0.5 xxs:p-2 w-full cursor-pointer 
              ${isActive[i]
                ? " text-[#eaeff1] hover:bg-[#025b76] bg-[#004458]"
                : " hover:text-[#eaeff1] bg-transparent hover:bg-[#3E7788] transition hover:duration-100 hover:delay-100 "}`}
            to={"#" + data.pointer}
          >
            {data.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default NavBody;
