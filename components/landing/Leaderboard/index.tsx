import * as React from "react";
import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = ({className}: { className: string }) => {

    return (
        <div className={`flex flex-col p-4 ${className} shadow-lg rounded-xl`}>
            <LeaderboardItem color={"#FFE456"} name={"steam_account#1"} score={100} position={1} className="mb-4"/>
            <LeaderboardItem color={"#E3F1F2"} name={"steam_account#2"} score={73} position={2} className="mb-4"/>
            <LeaderboardItem color={"#ECCD7D"} name={"steam_account#3"} score={54} position={3}/>
        </div>
    )
}

export default Leaderboard;
