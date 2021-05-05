import React from 'react';

interface GamesHeaderButtonProps {
    text: string,
    active: boolean
}

const GamesHeaderButton = ({text, active}: GamesHeaderButtonProps) => {
    return (
        <div className={`rounded-lg bg-${active ? 'emerald-light': 'white'} px-4 py-2 text-h6`}>
            {text}
        </div>
    )
}

export default GamesHeaderButton;
