import { courseContextActionType, courseContextStateType } from "../../@types/context/context.type";


export const navSearchCourseReducer = (state: courseContextStateType[], action: courseContextActionType<string,any>) :courseContextStateType[]=> {
  switch (action.type) {
    case "ALL_COURSE":
      state = action.payload;
      return state;
    case "NEWEST_COURSE":
      state = action.payload.sort((a: any, b: any) =>
        b.startDate
          .slice(0, 10)
          .split("-")
          .reverse()
          .join()
          .localeCompare(a.startDate.slice(0, 10).split("-").reverse().join())
      );
      return state;
    case "EXPENSIVE_COURSE":
      state = action.payload.sort(
        (a: any, b: any) => Number(b.cost) - Number(a.cost)
      );
      return state;
    case "COMPLETE_COURSE":
      state = action.payload.filter((a: any) => a.capacity < 35);
      return state;
    default:
      return state;
  }
};
