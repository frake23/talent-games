import React from "react";
import {AppRouterContextProvider} from "../context/AppRouter";
import {Header} from "../components/Header";
import {UserInfoProvider} from "../context/UserContext";
import Footer from "../components/Footer";
import TWRowGrid from "../components/tailwind/TWRowGrid";
import SideMenu from "../components/app/SideMenu";
import TWContainer from "../components/tailwind/TWContainer";

const AppPage = () => {
    return (
        <AppRouterContextProvider>
            <UserInfoProvider>
                <div className="flex flex-col min-h-screen">
                    <Header/>
                    <div className="flex-1 py-16 bg-blue-light">
                        <TWContainer>
                            <TWRowGrid>
                                <SideMenu className="lg:col-span-3"/>
                                <div className="lg:col-span-9 lg:col-start-4 flex flex-col">
                                    // Тут меню + главное окно
                                </div>
                            </TWRowGrid>
                        </TWContainer>
                    </div>
                    <Footer/>
                </div>
            </UserInfoProvider>
        </AppRouterContextProvider>
    )
}

export default AppPage;
