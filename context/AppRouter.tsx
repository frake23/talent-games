import React, {createContext, useCallback, useContext, useState} from 'react';
import GameType from "../types/games";
import AccountType from "../types/accounts";
import App from "next/app";

type AppRoute =
    | {
        category: "accounts",
        subcategory: AccountType
      }
    | {
        category: "results" | "leaderboard",
        subcategory: GameType
      }

interface AppRouterValue {
    route: AppRoute,
    setRoute: (route: AppRoute) => void
}

const AppRouterContext = createContext<AppRouterValue>(null);

const useAppRouter = () => useContext<AppRouterValue>(AppRouterContext);

const AppRouterContextProvider = ({ children }) => {
    const [route, setRoute] = useState<AppRoute>({
        category: "accounts",
        subcategory: AccountType.Kruzhok
    });
    const onRouteChange = useCallback((route: AppRoute) => {
        setRoute(route);
    }, []);
    return (
        <AppRouterContext.Provider value={{route, setRoute: onRouteChange}}>
            {children}
        </AppRouterContext.Provider>
    )
}

export {AppRouterContextProvider, useAppRouter}
