import React from 'react';

interface LeaderboardItemProps {
    color: string,
    name: string,
    score: number,
    position: number
}

const LeaderboardItem = ({color, name, score, position}: LeaderboardItemProps) => {
    return (
        <div className="flex">
            <div className="rounded-full h-10 w-10 flex items-center justify-center" style={{background: color}}>
                <span className="text-h6">{position}</span>
            </div>

        </div>
    )
}

export default LeaderboardItem;
