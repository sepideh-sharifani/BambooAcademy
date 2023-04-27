import Link from "next/link";
import { courseDataType } from "../../@types/api.type";

interface IModal {
  modal: courseDataType;
  open: boolean;
  onclose: () => void;
}

function Modal({ open, modal, onclose }: IModal) {
  const params = { state: { ...modal } };
  if (!open) return null;

  return (
    <div>
      <div
        className="bg-[#00000081] fixed top-0 left-0 right-0 bottom-0 animate-showingup"
        onClick={onclose}
      />
      <div
        className="animate-showingup sm:tracking-wider font-Lalezar z-100 text-[#3E7788] h-full
      overflow-y-auto overflow-x-hidden "
      >
        <div
          className=" p-6 flex fixed flex-col gap-4  text-right max-w-[450px] w-full  bg-white shadow-xl
         shadow-[rgb(0,0,0,0.7)] overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span
            className="cursor-pointer text-3xl font-sans font-normal absolute top-1 right-2 text-black hover:outline-black "
            onClick={onclose}
          >
            x
          </span>
          <div className="w-24 h-24 sm:w-40 sm:h-36 top-6 left-6 absolute flex-none bg-current">
            <img
              src={modal.lesson.image}
              alt={modal.title}
              className="object-fill w-full h-full"
            />
          </div>
          <h2 className="text-[#004458] text-xl mt-2">{modal.title}</h2>
          <p>مدرس : {modal.teacher.fullName} </p>
          <p>ظرفیت : {modal.capacity} نفر</p>
          <p>تاریخ شروع :{modal.startDate.slice(0, 10)}</p>
          <p>تاریخ پایان : {modal.startDate.slice(0, 10)} </p>
          <p>
            قیمت : <span className="text-[#09B28B]"> {modal.cost} تومان</span>
          </p>
          <div className="flex flex-row-reverse gap-3 justify-end">
            <p className="whitespace-nowrap">: وضعیت دوره </p>
            <div className="w-full flex justify-end">
              <div className="w-3/5 bg-gray-200">
                <div
                  className="bg-[#004458] text-sm font-medium text-white text-left p-1 pl-2"
                  style={{ width: `${modal.capacity}%` }}
                >
                  % {modal.capacity}
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/5 flex-auto items-center">
            <span className="devide-y bg-[#004458]" />
          </div>
          <div className="w-4/5 h-[1.8px] bg-slate-400 mx-auto " />
          <button
            className="self-start text-md font-semibold text-[#004458] bg-[#DBDBDB] hover:text-white hover:bg-[#004458]
                            hover:shadow-lg hover:shadow-slate-400 rounded-md shadow-md shadow-slate-200 p-3 "
          >
            <Link href={`/courses/${params?.state?.title}`}>مشاهده کامل</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
