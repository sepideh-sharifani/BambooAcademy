import { useEffect, useRef, useState } from "react";
// import {Data} from "./DataInterface";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Paginate from "./components/Pagination";
import Cards from "./components/Cards";
import axios from "axios";

export default function Courses() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const getData = (datas: any[]) => setPosts(datas);
  let wrapperRef = useRef(null);
  let refOfSearchBox: any;

  //pagination
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(posts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
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
    baseURL: "http://localhost:5000/",
  });

  const fetchPosts = async () => {
    setLoading(true);
    let response = await dataCards.get("api/course/getall");
    setPosts(response.data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();

    console.log(posts.length >= 8);
    setItemsPerPage(
      screenWidth >= 1024 && posts.length < 8
        ? 8
        : posts.length >= 6 && screenWidth >= 768 && screenWidth < 1024
        ? 6
        : screenWidth > 460 && screenWidth < 768 && posts.length >= 4
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
      <div className="w-full xl:max-w-[100%] h-[7rem]">
        <div className="h-[7rem] bg-coursesHeader">
          <div className="absolute top-0 w-full h-[7rem] bg-[#0666836c]" />
          <Search data={posts} getRefSearchBox={getRefSearchBox} />
        </div>
      </div>
      <main className="flex-col px-4 pt-5 sm:p-10 z-0 bg-[#E9E9E9]">
        <Nav getData={getData} cardData={posts} />
        <Cards loading={loading} currentPost={currentPosts} />
        <Paginate
          postsPerPage={itemsPerPage}
          totalPosts={posts.length}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </main>
    </div>
  );
}
