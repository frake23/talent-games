import React, {useState} from 'react';
import GamesHeaderButton from "./GamesHeaderButton";

enum GamesType {
    CSGO = 'CS:GO',
    Dota2 = 'Dota 2',
    Overwatch = 'Overwatch'
}

const AllGames = () => {
    const [activeGame, setActiveGame] = useState<GamesType>(GamesType.CSGO);

    return (
        <div className="flex flex-col">
            <div className="flex justify-around mb-4 shadow-lg rounded-md">
                {Object.keys(GamesType).map((key, index) =>
                    <GamesHeaderButton
                        active={activeGame === GamesType[key]}
                        text={GamesType[key]}
                        key={index}
                    />)}
            </div>
        </div>
    )
}

export default AllGames;
