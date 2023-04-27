import { courseContextStateType,courseContextActionType } from './../../@types/context/context.type';


export const courseDataReducer = (state: courseContextStateType[], action:courseContextActionType<string,any>)=> {
  switch (action.type) {
    //get
    case "GET_COURSE_DATA":
      state = action.payload;
      return state;
    //add
    case "ADD_COURSE":
      return [
        ...state,
        {
          title: action.payload?.title,
          cost: action.payload?.cost,
          endData: action.payload?.endDate,
          startDate: action.payload?.startDate,
          capacity: action.payload?.capacity,
          teacherId: action.payload?.teacherId,
          lessonId: action.payload?.lessonId,
        },
      ];

    //delete
    case "DELETE_COURSE":
      return [...state].filter((course) => course.courseId !== action.payload?.id);

    //update
    case "EDIT_COURSE":
      const newState = [...state].filter(
        (course) => course.lessonId !== action.payload.lessonId
      );
      return [
        ...newState,
        {
          title: action.payload?.title,
          cost: action.payload?.cost,
          endData: action.payload?.endDate,
          startDate: action.payload?.startDate,
          capacity: action.payload?.capacity,
          teacherId: action.payload?.teacherId,
          lessonId: action.payload?.lessonId,
        },
      ];
    default:
      return state;
  }
};

