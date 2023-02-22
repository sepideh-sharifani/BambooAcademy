import NavHeader from "./NavHeader";
import NavBody from "./NavBody";
import { courseDataType } from "../../@types/api.type";
interface INav {
  getData: (datas: courseDataType[]) => void;
  cardData:courseDataType[]
}
function Nav({ getData,cardData }: INav) {
  return (
    <div className=" font-Lalezar flex flex-col sm:flex-row-reverse sm:justify-between sm:h-15 mb-10">
      <NavHeader />
      <NavBody getData={getData} cardData ={cardData}/>
    </div>
  );
}
export default Nav;
