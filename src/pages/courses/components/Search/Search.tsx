import {useRef, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";
// import {Data} from "../../DataInterface";

interface ISearch {
    data: any[],
    getRefSearchBox: (ref: any) => any
}

const Search = ({data, getRefSearchBox}: ISearch) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [wordEntered, setWordEntered] = useState("");
    const ref = useRef(null)

    const handleFilter = (event: any, ref: any) => {
        if (ref.current.classList.contains("invisible")) ref.current.classList.remove("invisible")
        inputEl.current?.focus();
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = [...data].filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());

        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    function handleClickSearchBox() {
        getRefSearchBox(ref)
    }

    return (
        <>
            <div
                className="font-sans absolute top-[4.38rem] left-0 right-0 w-full flex flex-row-reverse items-center gap-2 z-10">
                <div className="basis-1 p-2 mr-14 flex self-start bg-transparent">
                    <FaSearch
                        size="1.3rem"
                        style={{margin: "0 auto"}}
                        cursor="pointer"
                        color="white"
                        onClick={(e) => handleFilter(e, ref)}
                    />
                </div>
                <div className="w-[calc(100%-200px)] ml-10">
                    <input
                        className="cursor-pointer outline-none tracking-wider bg-transparent text-white placeholder-white text-xl p-2 pb-[0.66rem] pt-1 mr-2 w-full rounded-3 "
                        dir="rtl"
                        ref={inputEl}
                        type="text"
                        placeholder="جستوجو..."
                        onChange={(e) => handleFilter(e, ref)}
                        value={wordEntered}
                    />
                    <div className="flex justify-end" onClick={handleClickSearchBox} ref={ref}>
                        {filteredData.length !== 0 && (
                            <div
                                className=" w-full sm:w-2/3 min-h-0 max-h-[200px] flex flex-col justify-center items-end bg-white shadow-md shadow-slate-700 overflow-hidden overflow-y-auto scroll-smooth scrollbar-hide">
                                {filteredData.slice(0, 15).map((value, key) => {
                                    return (
                                        <Link
                                            key={key}
                                            className="w-full pr-3 max-h-[50px] min-h-[50px] flex items-center justify-end text-black hover:bg-zinc-300 transition hover:duration-100 "
                                            to={`/courses/${value?.title}`}
                                            target="_self"
                                        >
                                            <p className="ml-2">{value.title} </p>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Search;
