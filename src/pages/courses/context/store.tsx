import { createContext, useReducer } from "react";
import { courseContextStateType,courseContextActionType} from "../@types/context/context.type";
import {
  courseDataReducer,
} from "../context/dataCard/dataCard.reducer";
import {
  navSearchCourseReducer,
} from "../context/sortData/sortData.reducer";

type initialStateType ={
  courseData:courseContextStateType[],
  navSearchCourse:courseContextStateType[]
}

const initialState:initialStateType= {
  courseData:[],
  navSearchCourse:[]
};

const AppContext = createContext<{
  state:initialStateType;
  dispatch:React.Dispatch<courseContextActionType<any,any>>;
}>({ state: initialState, dispatch: () => null });

const combineReducer = (
    {courseData,navSearchCourse}:initialStateType,
    action: courseContextActionType<string,any>
  ) => ({
    courseData:courseDataReducer(courseData,action),
    navSearchCourse:  navSearchCourseReducer(navSearchCourse,action)
  });
  

interface AppContextProviderProps extends React.PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
    const [state, dispatch] = useReducer(combineReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };