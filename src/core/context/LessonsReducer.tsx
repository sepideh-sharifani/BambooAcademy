import { ContextAction, LessonActionTypes, LessonState } from '../../types/context/Context.types';

const LessonsReducer = (
    state: LessonState,
    action: ContextAction<LessonActionTypes, any>
): LessonState => {
    switch (action.type) {
        case LessonActionTypes.Get_All_Lessons:
            state.result = action.payload.result;
            return state;
        // case LessonActionTypes.Filter_Lesson:
        //     const LowerCased = action.payload.toLowerCase();
        //     const filterLessons = state.LessonList.filter((n) => n.result.lessonName.toLowerCase().includes(LowerCased))
        //     state.searchList = filterLessons;
        //     return state;
        default:
            return state;
    }
}

export default LessonsReducer