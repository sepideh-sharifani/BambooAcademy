import {useEffect, useRef, useState} from "react";
import {Data} from "./DataInterface";
import data from "./data.json";
import ReactPaginate from "react-paginate";
import Search from "./components/Search/Search";
import Nav from "./components/Nav/Nav";
import Cards from "./components/grid/Cards";
import axios from "axios"

export default function Courses() {

    const [itemOffset, setItemOffset] = useState(0);
    const [posts, setPosts] = useState<Data[]>([]);
    const [loading, setLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const getData = (datas: Data[]) => setPosts(datas);
    let wrapperRef = useRef(null);
    let refOfSearchBox: any;

    const endOffset = itemOffset + itemsPerPage;
    let currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
        setItemOffset(newOffset);
    };

    // when click on page expect searchBox ,searchBox disappear
    // function handleClickOutside() {
    //     // if (wrapperRef !== refOfSearchBox) {
    //     refOfSearchBox.current.classList.add("invisible")
    //     // }
    // }

    const getRefSearchBox = (ref: any) => {
        refOfSearchBox = ref;
    };

    const dataCards = axios.create({
        baseURL: "http://localhost:5000/" 
     });

    const fetchPosts = async() => {
        setLoading(true);
        let response = await dataCards.get("api/course/getall")
        setPosts(response.data.result);
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();

        setItemsPerPage(
            screenWidth >= 1024
                ? 8
                : screenWidth >= 768 && screenWidth < 1024
                    ? 6
                    : screenWidth > 460 && screenWidth < 768
                        ? 4
                        : 3
        );

        //sensitive item of cards to window width
        const updateScreen = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateScreen);

        //when click on page expect searchBox ,searchBox disappear
        // window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("resize", updateScreen);
            // window.removeEventListener("mousedown", handleClickOutside);

        };
    }, [refOfSearchBox, screenWidth]);

    return (
        <div dir="ltr" ref={wrapperRef}>
            <div className="w-full xl:max-w-[100%] h-[7rem]" >
                <div className="h-[7rem] bg-coursesHeader">
                    <div className="absolute top-0 w-full h-[7rem] bg-[#0666836c]"/>
                    <Search data={posts} getRefSearchBox={getRefSearchBox}/>
                </div>
            </div>
            <main className="flex-col px-4 pt-5 sm:p-10 z-0 bg-[#E9E9E9]">
                <Nav getData={getData}/>
                <Cards loading={loading} currentPost={currentItems}/>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={() => null}
                    containerClassName="group flex-wrap p-3 pt-5 flex items-center justify-center max-w-1/3 mx-auto"
                    pageLinkClassName="group px-3 py-2 text-sm cursor-pointer hover:bg-[#004458] hover:text-white transition group-hover:duration-100 group-hover:delay-100 group-text-[#004458] bg-transparent"
                    pageClassName="py-2 mx-1"
                    previousClassName="mr-1 px-2 py-1 text-lg cursor-pointer  hover:bg-[#0f7898] transition hover:duration-100 hover:delay-100 text-white bg-[#004458]"
                    nextClassName="ml-1 px-2 py-1 text-lg cursor-pointer hover:bg-[#0f7898] hover:text-white transition hover:duration-100 hover:delay-100 text-white bg-[#004458]"
                    activeClassName="px-1 py-2 text-sm text-white hover:bg-[#004458] bg-[#004458]"
                />
            </main>
        </div>
    );
}
