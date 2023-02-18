import {MouseEventHandler, useState} from "react";
import Link from 'next/link'

interface ICard {
    card: any;
    onclick: MouseEventHandler<HTMLButtonElement> | undefined;
    imgsrc: string;
    loading: boolean;
}

function OneCard({card, imgsrc, onclick, loading}: ICard) {
    const [isHovering, setIsHovering] = useState(false);
    const params = {state: {...card}};

    if (loading) {
        return (
            <>
                <span className="p-0 m-0">loading</span>
                <div role="status">
                    <svg
                        className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
            </>
        );
    }

    function handleMouseOver() {
        setIsHovering(true);
    }

    function handleMouseOut() {
        setIsHovering(false);
    }

    return (
        <section
            className="relative overflow-hidden w-full h-[25rem] xl:h-[27rem]  flex flex-col gap-2 min-w-0 bg-white shadow-sm hover:shadow-lg shadow-[#00000097] hover:shadow-[#0000005d] rounded-lg group"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div
                className={`max-h-56 w-full shrink group-hover:-translate-y-10 duration-300`}
            >
                <img
                    className="bg-slate-300 object-cover h-full w-full"
                    src={imgsrc}
                    alt={card.title}
                />
            </div>
            <div
                className=" grow px-4 pt-2 pb-3 w-18 gap-3 flex flex-col text-center xs:text-right group-hover:-translate-y-10 duration-300
       font-medium tracking-wide"
            >
                <h1 className="grow text-[#004458] text-lg">
                    {card.lesson.lessonName}
                </h1>
                <p className="grow text-[#3E7788] text-sm ">
                    {card.teacher.fullName} : مدرس
                </p>
                <div className="grow gap-2 xs:gap-0 flex xs:flex-row-reverse justify-between flex-col text-sm">
                    <p className="text-[#3E7788] ">ظرفیت : {card.capacity} نفر</p>
                    <div className="w-1/3 m-auto xs:m-0">
                        <button
                            className="rounded-md text-white bg-[#004458] hover:bg-[#025b76] py-1 px-3 pb-2 transition
               hover:duration-150 hover:delay-150 shadow-md shadow-slate-400"
                            onClick={onclick}
                        >
                            جزئیات
                        </button>
                    </div>
                </div>
                <div className="w-4/5 h-[1.8px] bg-slate-400 mx-auto"/>
                <p className="grow text-[#09B28B] xs:text-left"> تومان {card.cost} </p>
            </div>

            <button
                className={`self-center absolute -bottom-2 whitespace-nowrap mb-3
                rounded-md px-1.5 py-[0.4rem] pb-3 mx-auto text-[#004458] bg-[#DBDBDB] hover:text-white 
                 hover:bg-[#3E7788] group-hover:-translate-y-5 translate-y-16 duration-500 shadow-lg shadow-slate-200`}
            >
                <Link href={`/courses/${params?.state?.altName}`}>
                    مشاهده دوره
                </Link>
            </button>
        </section>
    );
}

export default OneCard;
