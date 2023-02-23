import { createContext, useReducer } from "react";
import { ContextAction, ContextAppState } from "../../types/context/Context.types";
import LessonsReducer from "./LessonsReducer";

const initialState: ContextAppState = {
    Lessons: {
        result: []
    }
}

const AppContext = createContext<{
    state: ContextAppState;
    dispatch: React.Dispatch<ContextAction<any, any>>
}>({
    state: initialState,
    dispatch: () => null
})

const CombineReducer = ({ Lessons }: ContextAppState, action: any) => ({
    Lessons: LessonsReducer(Lessons, action),
})

interface AppContextProviderProps extends React.PropsWithChildren { }

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(CombineReducer, initialState);
    return (
        <>
            <AppContext.Provider value={{ state, dispatch }}>
                {children}
            </AppContext.Provider>
        </>

    )
}


export { AppContext, AppContextProvider }