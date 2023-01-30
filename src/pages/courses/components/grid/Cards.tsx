import OneCard from "./OneCard";
import { Data } from "../../DataInterface";
import { useState, useRef } from "react";
import Modal from "../Modal/Modal";

interface ICards {
  currentPost: Array<Data>;
  loading: boolean;
}
//
function Cards({ currentPost, loading }: ICards) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<Data>({
    id: 1,
    srcImage: "img5",
    altName: "angular",
    presenter: "فربد مهدوی",
    capacity: "78",
    headerCard: " angular دوره",
    price: "600,000",
    courseStatus: 95,
    startDate: "1401/08/01",
    endDate: "1401/12/01",
  });
  const myref = useRef<HTMLDivElement | null>(null);

  function handleClickModal() {
    setOpenModal(false);
  }

  function handleClickButton(post: Data) {
    setOpenModal(true);
    setModalData(post);
  }
  
  return (
    <>
      <div>
        <article
          ref={myref}
          className="px-8 py-4 grid justify-items-center gap-6 grid-rows-2 lg:grid-cols-4  md:grid-cols-3
           sm:grid-cols-2 xxs:grid-cols-2 grid-cols-1 "
        >
          {currentPost &&
            currentPost.map((post) => (
              <OneCard
                key={post.id}
                card={post}
                imgsrc={require("../../assets/" + post.srcImage + ".jpg")}
                onclick={() => handleClickButton(post)}
                loading={loading}
              />
            ))}
        </article>
      </div>
      <div>
        <Modal
          open={openModal}
          modal={modalData}
          onclick={handleClickModal}
          onclose={() => setOpenModal(false)}
        />
      </div>
    </>
  );
}
export default Cards;
