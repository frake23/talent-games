import {AppRouterContextProvider} from "../context/AppRouter";
import {Header} from "../components/Header";
import {UserContextProvider} from "../context/UserContext";
import * as React from "react";

const AppPage = () => {
    return (
        <AppRouterContextProvider>
            <UserContextProvider>
                <Header/>
            </UserContextProvider>
        </AppRouterContextProvider>
    )
}

export default AppPage;
