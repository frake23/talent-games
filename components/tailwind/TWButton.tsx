import React from 'react';

interface TWButtonProps {
    color: 'emerald' | 'blue-dark',
    size: 'default' | 'big',
    className?: string,
    children: string
}

const TWButton = ({color, size, children, className}: TWButtonProps) => {
    return (
        <button
            className={`
                px-4 
                ${size === 'default' ? 'py-2.5 text-body2': 'py-4 text-subtitle1'} 
                bg-${color} 
                text-white 
                ${className ?? ''}
                rounded-full
            `}
        >
            {children}
        </button>
    )
}

export default TWButton;
