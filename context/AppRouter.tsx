import React, {createContext, useContext, useReducer} from 'react';
import GameType from "../types/gameType";
import AccountType from "../types/accountType";
import AppCategory from "../types/appCategory";

type AppRouterState = {
    category: AppCategory,
    game: GameType,
    account: AccountType
}
const initialState: AppRouterState = {
    category: AppCategory.Accounts,
    game: GameType.CSGO,
    account: AccountType.Kruzhok
}
interface AppRouterValue {
    state: AppRouterState,
    dispatch: React.Dispatch<any>
}

const AppRouterContext = createContext<AppRouterValue>(null);

const useAppRouter = () => useContext<AppRouterValue>(AppRouterContext);

interface AppRouterAction {
    type: "SET_CATEGORY" | "SET_GAME" | "SET_ACCOUNT",
    payload: AppCategory | GameType | AccountType
}

const AppRouterReducer = (state: AppRouterState, action: AppRouterAction): AppRouterState => {
    switch (action.type) {
        case "SET_CATEGORY":
            return {
                ...state,
                category: action.payload as AppCategory
            }
        case "SET_ACCOUNT":
            return {
                ...state,
                account: action.payload as AccountType
            }
        case "SET_GAME":
            return {
                ...state,
                game: action.payload as GameType
            }
        default:
            return state;
    }
}



const AppRouterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<AppRouterState, AppRouterAction>>(AppRouterReducer, initialState);

    return (
        <AppRouterContext.Provider value={{state, dispatch}}>
            {children}
        </AppRouterContext.Provider>
    )
}

export {AppRouterContextProvider, useAppRouter}
