import React from "react";
import {AppRouterContextProvider} from "../context/AppRouter";
import {Header} from "../components/Header";
import {UserInfoProvider} from "../context/UserContext";
import Footer from "../components/Footer";
import TWRowGrid from "../components/tailwind/TWRowGrid";
import SideMenu from "../components/app/SideMenu";
import TWContainer from "../components/tailwind/TWContainer";
import Content from "../components/app/Content";
import ContentMenu from "../components/app/ContentMenu";
import Head from "next/head";

const AppPage = () => {
    return (
        <AppRouterContextProvider>
            <Head>
                <link rel="icon" href="/assets/icons/icon.svg"/>
                <title>Талант Games</title>
            </Head>
            <div className="bg-emerald bg-blue-dark hover:bg-emerald-hover hover:bg-blue-dark-hover" style={{display: 'none', visibility: 'hidden'}}/>
            <UserInfoProvider>
                <div className="flex flex-col min-h-screen">
                    <Header/>
                    <div className="flex-1 py-16 bg-blue-light flex flex-col">
                        <TWContainer className="flex-1">
                            <TWRowGrid className="">
                                <SideMenu className="lg:col-span-3 self-start"/>
                                <div className="lg:col-span-9 lg:col-start-4 flex flex-col">
                                    <ContentMenu className="mb-4"/>
                                    <Content className="flex-1"/>
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
