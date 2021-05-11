import React, {MouseEventHandler} from 'react';

interface TWButtonProps {
    color: 'emerald' | 'blue-dark',
    size: 'default' | 'big',
    onClick?: MouseEventHandler,
    className?: string,
    children: string
}

const TWButton = ({color, size, children, className, onClick}: TWButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`
                px-4 
                ${size === 'default' ? 'py-2.5 text-body2': 'py-4 text-subtitle1'} 
                bg-${color} hover:bg-${color}-hover transition-colors
                hover:shadow-md transition-hover
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
