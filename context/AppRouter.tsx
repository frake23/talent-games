import React, {createContext, useContext} from 'react';
import GameType from "../types/games";
import AccountType from "../types/accounts";

type AppRoute =
    | {
        category: "accounts",
        subcategory: AccountType
      }
    | {
        category: "results" | "leaderboard",
        subcategory: GameType
      }

const AppRouterContext = createContext(null);

const useAppRouter = useContext(AppRouterContext);

const AppRouterContextProvider = ({ children }) => {

}

export {AppRouterContextProvider, useAppRouter}
