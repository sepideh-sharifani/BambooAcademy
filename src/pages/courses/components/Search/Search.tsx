import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Data } from "../../DataInterface";

interface ISearch {
  data: Data[];
}

const Search = ({ data }: ISearch) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: any) => {
    inputEl.current?.focus();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = [...data].filter((value) => {
      return value.headerCard.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <div className="font-Lalezar bg-transparent absolute top-20 left-0 right-0 w-full flex flex-row-reverse items-center gap-2">
        <div className="basis-1 p-2 flex self-start">
          <FaSearch
            size="1.2rem"
            style={{ margin: "0 auto" }}
            cursor="pointer"
            color="black"
            onClick={handleFilter}
          ></FaSearch>
        </div>
        <div className="reletive basis-11/12 w-[calc(100%-200px)] ml-10 font-sans">
          <input
            className="cursor-pointer outline-[#4a4a4a] outline-0.5 tracking-wider bg-transparent text-black text-xl p-2 pt-1 mr-2 w-full rounded-3 text-right"
            ref={inputEl}
            type="text"
            placeholder="...جستوجو"
            onChange={handleFilter}
            value={wordEntered}
          />
          <div className="flex justify-end">
            {filteredData.length !== 0 && (
              <div className=" w-2/3 min-h-0 max-h-[200px] flex flex-col justify-center items-end bg-white shadow-md shadow-slate-700 overflow-hidden overflow-y-auto scroll-smooth scrollbar-hide">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <Link
                      key={key}
                      className="w-full pr-3 max-h-[50px] min-h-[50px] flex items-center justify-end text-black hover:bg-zinc-300 transition hover:duration-100 "
                      to={"#"}
                      target="_blank"
                    >
                      <p className="ml-2">{value.headerCard} </p>
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
