import React from "react";
import {AppRouterContextProvider} from "../context/AppRouter";
import {Header} from "../components/Header";
import {UserInfoProvider, UserInfoValue, useUserInfo} from "../context/UserContext";
import TWButton from "../components/tailwind/TWButton";
import Footer from "../components/Footer";
import TWRowGrid from "../components/tailwind/TWRowGrid";
import SideMenu from "../components/app/SideMenu";
import TWContainer from "../components/tailwind/TWContainer";

function Cringe() {
    const userInfo = useUserInfo()
    return <div className="cringe">
        <TWButton color={'emerald'} size={'default'} onClick={()=>{
            fetch('http://localhost/api/user/?format=json', {
                credentials: 'include'
            })
                .then(async (res) => {
                    console.log(await res.json())
                })
        }}>
            Data
        </TWButton>
        {userInfo.state?.first_name}
    </div>;
}

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
                            </TWRowGrid>
                        </TWContainer>

                    </div>
                    <Footer/>
                </div>
                <Cringe/>
            </UserInfoProvider>
        </AppRouterContextProvider>
    )
}

export default AppPage;
