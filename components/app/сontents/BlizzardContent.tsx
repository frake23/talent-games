import React from 'react';
import TWButton from "../../tailwind/TWButton";
import UnauthorizedContent from "./UnauthorizedContent";

const BlizzardContent = ({className}: {className?: string}) => {
    const isAuthenticated = false
    if (isAuthenticated) {
        return (
                <div className={`flex justify-center items-center`}>
                    <span>Blizzard</span>
                </div>
        )
    } else {
        return (
                <UnauthorizedContent account="BLIZZARD"/>
        )
    }

}

export default BlizzardContent;
