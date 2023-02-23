import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { AiOutlineFolderAdd, AiFillEdit, AiFillDelete } from 'react-icons/ai'

interface LessonItemProps extends React.PropsWithChildren {
    time: string;
    description: string;
    image: string;
    name: string;
}

export const LessonItem: React.FunctionComponent<LessonItemProps> = ({
    time,
    description,
    image,
    name,
}) => {

    return (
        <div className="w-[600px] inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="[&>th]:py-3 [&>th]:text-md [&>th]:font-normal  [&>th]:text-center xs:[&>th]:text-right [&>th]:text-gray-600">
                            <th scope="col" className="px-0.5 md:px-6">
                                <span className="inline-flex items-center">
                                    عنوان
                                    <BsArrowDown />
                                </span>
                            </th>
                            <th scope="col" className="px-0.5 md:px-6">
                                <span className="inline-flex items-center">
                                    تاریخ
                                    <BsArrowUp />
                                </span>
                            </th>
                            <th scope="col" className="px-0.5 md:px-6">
                                توضیحات
                            </th>
                            <th scope="col" className="px-1 flex place-content-center">
                                <button
                                    className="text-[#00a0acghu] font-black hover:text-[#43cbd5ghu]"
                                >
                                    <AiOutlineFolderAdd size={25} fontWeight={50} />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-slate-400">
                        <tr
                            className="group [&>td]:py-4 [&>td]:text-md [&>td]:text-slate-400 [&>td]:item-center xs:[&>td]:text-right [&>td]:hover:text-white hover:bg-[#1c79958a] duration-100 "
                        >
                            <td className="px-0.5 md:px-7">
                                <div className='flex items-center gap-2'>
                                    <img
                                        className="rounded-full w-9 h-9 overflow-hidden"
                                        src={image}
                                        alt="user"
                                    />
                                    {name}
                                </div>
                            </td>
                            <td className="px-0.5 md:px-7">
                                {new Date(time).toLocaleDateString()}
                            </td>
                            <td className="px-0.5 md:px-7">{description}</td>
                            <td className=" relative group text-center text-lg flex md:flex-row flex-col md:justify-evenly md:items-center gap-1 [&>span]:cursor-pointer ">
                                <button
                                    className="text-[#60f96c] invisible font-bold group-hover:animate-showingup group-hover:visible duration-50 cursor-pointer"
                                >
                                    <AiFillEdit size={20} />
                                </button>
                                <button
                                    className="text-[#ff6969] invisible font-bold group-hover:animate-showingup group-hover:visible duration-50 cursor-pointer"
                                >
                                    <AiFillDelete size={20} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}