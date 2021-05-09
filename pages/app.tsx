import React from 'react';
import {AppRouterContextProvider} from "../context/AppRouter";
import {Header} from "../components/Header";

const AppPage = () => {
    return (
        <AppRouterContextProvider>
            <Header/>
        </AppRouterContextProvider>
    )
}

export default AppPage;
