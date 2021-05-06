import React from 'react';

const Leaderboard = ({className}: { className: string }) => {

    return (
        <div className={`flex flex-col p-4 ${className} shadow-lg rounded-xl`}>
            <div className="flex">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 11.5L8.82759 40.5H31.4483L40 11.5L26.7586 21.8333L19.8621 0.5L13.2414 24.1667L0 11.5Z" fill="#FFE456"/>
                    <path d="M21.9824 34.5H20.4004V24.3242C20.4004 23.4779 20.4264 22.6771 20.4785 21.9219C20.3418 22.0586 20.1888 22.2018 20.0195 22.3516C19.8503 22.5013 19.0755 23.1361 17.6953 24.2559L16.8359 23.1426L20.6152 20.2227H21.9824V34.5Z" fill="black"/>
                </svg>

            </div>
        </div>
    )
}

export default Leaderboard;
