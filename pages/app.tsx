import React from "react";
import {AppRouterContextProvider} from "../context/AppRouter";
import {Header} from "../components/Header";
import {UserInfoProvider, UserInfoValue, useUserInfo} from "../context/UserContext";
import TWButton from "../components/tailwind/TWButton";

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
                <Header/>
                <Cringe/>
            </UserInfoProvider>
        </AppRouterContextProvider>
    )
}

export default AppPage;
