import NavHeader from "./NavHeader";
import NavBody from "./NavBody";
import { Data } from "../../DataInterface";
interface INav {
  getData: (datas: Data[]) => void;
}
function Nav({ getData }: INav) {
  return (
    <div className=" font-Lalezar flex flex-col sm:flex-row-reverse sm:justify-between sm:h-15 mb-10">
      <NavHeader />
      <NavBody getData={getData} />
    </div>
  );
}
export default Nav;
