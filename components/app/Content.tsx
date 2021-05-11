import React from 'react';
import {useAppRouter} from "../../context/AppRouter";
import Image from "next/image";
import TWButton from "../tailwind/TWButton";
import {useUserInfo} from "../../context/UserContext";

const Content = ({className}: {className?: string}) => {
    const {state, dispatch} = useAppRouter();
    const userInfo = useUserInfo()
    const isAuthenticated = !!userInfo?.state?.email
    return (
        <div className={`py-4 px-12 grid gap-x-2 lg:grid-cols-12 ${className} bg-white rounded-lg shadow-md`}>
            <div className={`col-span-4 gap-y-2 flex flex-col items-center`}>
                <div className={`flex flex-col gap-y-2 py-2 self-stretch items-center border-2 border-emerald-secondary rounded-md`}>
                    <Image
                        className="cursor-pointer"
                        src="/assets/icons/camera_icon.svg"
                        width={40}
                        height={40}
                    />
                    <span className={`text-body2`}>{`${userInfo.state?.last_name} ${userInfo.state?.first_name[0]}.`}</span>
                    <span className={`text-overline`}>{`${userInfo.state?.email}`}</span>
                    <span className={`text-caption text-emerald`}>Talent ID: 158011</span>
                </div>
                <TWButton color={"emerald"} size={"big"} className={"self-stretch"}>Изменить</TWButton>
                <TWButton color={"blue-dark"} size={"big"} className={"self-stretch"}>Выйти</TWButton>
            </div>
            <div className={`col-span-4`}>
                b
            </div>
            <div className={`col-span-4`}>
                b
            </div>
        </div>
    )
}

export default Content;
