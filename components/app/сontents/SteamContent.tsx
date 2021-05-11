import React from 'react';
import TWButton from "../../tailwind/TWButton";
import UnauthorizedContent from "./UnauthorizedContent";

const SteamContent = ({className}: {className?: string}) => {
    const isAuthenticated = false
    if (isAuthenticated) {
        return (
                <div className={`col-span-4 gap-y-2 flex flex-col items-center justify-center min-h-400`}>
                    <span>Steam</span>
                </div>
        )
    } else {
        return (
                <UnauthorizedContent account={"STEAM"}/>
        )
    }

}

export default SteamContent;
