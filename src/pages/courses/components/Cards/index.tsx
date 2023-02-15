import OneCard from "./OneCard";
// import { Data } from "../../DataInterface";
import { useState, useRef } from "react";
import Modal from "../Modal";

interface ICards {
  currentPost: Array<any>;
  loading: boolean;
}
//
function Cards({ currentPost, loading }: ICards) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<any>({});
  const myref = useRef<HTMLDivElement | null>(null);

  function handleClickModal() {
    setOpenModal(false);
  }

  function handleClickButton(post: any) {
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
                key={post._id}
                card={post}
                imgsrc={post.lesson.image}
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
