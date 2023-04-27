import OneCard from "./OneCard";
import { useState, useRef } from "react";
import Modal from "../Modal";
import { courseDataType } from "../../@types/api.type";

interface ICards {
  currentPost: Array<any>;
  loading: boolean;
}
//
function Cards({ currentPost, loading }: ICards) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<courseDataType>({
    teacher: {
      _id: "",
      fullName: "",
      email: "",
      profile: "",
    },
    lesson: {
      topics: [],
      _id: "",
      lessonName: "",
      description: "",
      image: "",
    },
    _id: "",
    title: "",
    cost: 0,
    endDate: "",
    startDate: "",
    capacity: 0,
    students: [],
    __v: 0,
  });

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
          onclose={() => setOpenModal(false)}
        />
      </div>
    </>
  );
}
export default Cards;
