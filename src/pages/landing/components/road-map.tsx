import { convertToRem } from "../../../helpers";
import styles from "./gradient.module.css";
export default function RoadMap() {
  return (
    <div
      className={`w-full h-[${convertToRem(
        1080
      )}] flex flex-col items-start bg-blue-400`}
    >
      <div
        className={`self-end grow bg-[#004458] w-3/5 relative 
         after:content-[''] after:absolute after:top-0 after:right-full 
         after:border-l-[12.5rem] after:border-l-transparent
         after:border-t-[22.5rem] after:border-t-[#004458]
         after:border-b-[22.5rem] after:border-b-transparent
         `}
      ></div>
      <div className={styles.gradient}></div>
      <div
        className={`self-end grow bg-[#004458] w-3/5 relative
        after:content-[''] after:absolute after:top-0 after:right-full 
        after:border-l-[12.5rem] after:border-l-transparent
        after:border-t-[22.5rem] after:border-t-[#004458]
        after:border-b-[22.5rem] after:border-b-transparent
        `}
      ></div>
    </div>
  );
}
