import React from 'react';
import TWButton from "../../tailwind/TWButton";

const UnauthorizedContent = ({account}: {account: string}) => {
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <span className="text-upper mb-4">ПРИВЯЖИТЕ СВОЙ АККАУНТ {account}</span>
            <TWButton color={"emerald"} size={"default"}>Авторизоваться</TWButton>
        </div>
    )
}

export default UnauthorizedContent;
