import React from 'react';
import TWButton from "../../tailwind/TWButton";

const BlizzardContent = ({className}: {className?: string}) => {
    const isAuthenticated = false
    if (isAuthenticated) {
        return (
            <div className={`py-4 px-12 grid gap-x-2 lg:grid-cols-12 ${className} bg-white rounded-lg shadow-md`}>
                <div className={`col-span-4 gap-y-2 flex flex-col items-center justify-center min-h-400`}>
                    <span>Blizzard</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`py-4 px-12 ${className} bg-white rounded-lg shadow-md`}>
                <div className={`gap-y-2 flex flex-col items-center justify-center min-h-400`}>
                    <span>ПРИВЯЖИТЕ СВОЙ АККАУНТ BLIZZARD</span>
                    <TWButton color={"emerald"} size={"big"}>Авторизоваться</TWButton>
                </div>
            </div>
        )
    }

}

export default BlizzardContent;
