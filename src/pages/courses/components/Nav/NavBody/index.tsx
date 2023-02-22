import Link from "next/Link";
import { useContext, useEffect, useState } from "react";
import { courseDataType } from "../../../@types/api.type";
import { AppContext } from "../../../context/store";

interface INavBody {
  getData: (datas: courseDataType[]) => void;
  cardData: any;
}

function NavBody({ getData, cardData }: INavBody) {
  const [datas, setDatas] = useState<courseDataType[]>([]);
  const dispatch = useContext(AppContext).dispatch
  const { state } = useContext(AppContext);
  const [isActive, setIsActive] = useState([true, false, false, false]);
  const dataNavBody = [
    { title: "همه دوره ها", pointer: "دوره ها" },
    { title: "جدیدترین ها", pointer: "جدیدترین" },
    { title: "گران ترین ها", pointer: "گران‌ترین" },
    { title: "تکمیل نشده ها", pointer: "تکمیل نشده" },
  ];

  function handleClick(e: any, index: number) {
    const wasActive = isActive.indexOf(true);
    index !== wasActive &&
      setIsActive(
        isActive.map((isActive, indexMap) =>
          isActive ? !isActive : indexMap === index ? !isActive : isActive
        )
      );

    switch (e.currentTarget.id) {
      case "همه دوره ها":
        // dispatch({type:"Get_All_Cards_Data"})
        setDatas([...cardData]);
        break;
      case "جدیدترین ها":
        // dispatch({type:"Newest_Course"})

        setDatas(
          [...cardData].sort((a, b) =>
            b.startDate
              .slice(0,10)
              .split("-")
              .join()
              .localeCompare(a.startDate.slice(0,10).split("-").join())
          )
        );
        break;
      case "گران ترین ها":
        setDatas([...cardData].sort((a, b) => Number(b.cost) - Number(a.cost)));
        break;
      case "تکمیل نشده ها":
        setDatas([...cardData].filter((a) => a.capacity <35));
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    getData(datas);
  }, [datas]);

  return (
    <ul
      className="font-sans min-w-screen transition delay-150 list-none flex justify-around flex-row-reverse flex-none
     text-center gap-2 mt-2 items-center mx-5 sm:m-0"
    >
      {dataNavBody.map((data, i) => (
        <li key={i} onClick={(e) => handleClick(e, i)} id={data.title}>
          <Link
            className={`rounded-sm text-center text-xs xxs:text-sm xxs:tracking-wide no-underline whitespace-nowrap p-0.5 xxs:p-2 w-full cursor-pointer 
              ${
                isActive[i]
                  ? " text-[#eaeff1] hover:bg-[#025b76] bg-[#004458]"
                  : " hover:text-[#eaeff1] bg-transparent hover:bg-[#3E7788] transition hover:duration-100 hover:delay-100 "
              }`}
            href={"#" + data.pointer}
          >
            {data.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default NavBody;
