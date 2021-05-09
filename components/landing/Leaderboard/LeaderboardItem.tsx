import * as React from "react";

interface LeaderboardItemProps {
    color: string,
    name: string,
    score: number,
    position: number,
    className?: string
}

const LeaderboardItem = ({color, name, score, position, className}: LeaderboardItemProps) => {
    return (
        <div className={`flex ${className}`}>
            <div className="rounded-full h-10 w-10 flex items-center justify-center" style={{background: color}}>
                <span className="text-h6">{position}</span>
            </div>
            <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 40C4.89508 34.6924 7.8716 27.6835 7.8716 20C7.8716 12.3165 4.89509 5.30756 8.02597e-06 0H18V40H0Z" fill={color}/>
            </svg>
            <div className="h-10 flex-1 flex justify-between items-center pr-4 pl-2" style={{background: color}}>
                <span className="text-subtitle1">{name}</span>
                <span className="text-body2">{score} points</span>
            </div>
        </div>
    )
}

export default LeaderboardItem;
