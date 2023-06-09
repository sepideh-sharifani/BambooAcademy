import {MouseEventHandler, useState} from "react";
import {Data} from "../../DataInterface";
// @ts-ignore
import Link from "next/link";

interface ICard {
    card: Data;
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
                <div className="animate-spin"/>
                <span className="">loading...</span>
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
            className=" overflow-hidden w-full h-[25rem] xl:h-[27rem]  flex flex-col gap-2 min-w-0 bg-white shadow-md shadow-[#0000003c]"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div
                className={`max-h-56 shrink ${isHovering && " h-32 sm:h-40 lg:h-32"}`}
            >
                <img
                    className="object-fill h-full w-full"
                    src={imgsrc}
                    alt={card.altName}
                />
            </div>
            <div className="grow px-4 pt-2 pb-3 w-18 gap-3 flex flex-col text-center xs:text-right
       font-medium tracking-wide">
                <h1 className="grow text-[#004458] text-lg">{card.headerCard}</h1>
                <p className="grow text-[#3E7788] text-sm ">مدرس : {card.presenter}</p>
                <div className="grow gap-2 xs:gap-0 flex xs:flex-row-reverse justify-between flex-col text-sm">
                    <p className="text-[#3E7788] ">ظرفیت : {card.capacity} نفر</p>
                    <div className="w-1/3 m-auto xs:m-0">
                        <button
                            className="text-white bg-[#004458] hover:bg-[#025b76] py-1 px-3 pb-2 transition
               hover:duration-150 hover:delay-150"
                            onClick={onclick}
                        >
                            جزئیات
                        </button>
                    </div>
                </div>
                <div className="w-4/5 h-[1.8px] bg-slate-400 mx-auto"/>
                <p className="grow text-[#09B28B] xs:text-left"> تومان {card.price} </p>
            </div>
            {isHovering && (
                <button
                    className="animate-showingup self-center flex-none whitespace-nowrap mb-3
                 px-0.5 py-[0.4rem] pb-3 mx-auto text-[#004458] bg-[#DBDBDB] hover:text-white 
                 hover:bg-[#3E7788] transition hover:duration-150 hover:delay-150 "
                >
                    <Link href={`/courses/${params?.state?.altName}`}>
                        مشاهده دوره
                    </Link>
                </button>
            )}
        </section>
    );
}

export default OneCard;
