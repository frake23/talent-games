import {MouseEventHandler} from 'react';
import * as React from "react";

interface TWButtonProps {
    color: 'emerald' | 'blue-dark',
    size: 'default' | 'big',
    className?: string,
    children: string,
    onClick?: MouseEventHandler
}

const TWButton = ({color, size, children, className, onClick}: TWButtonProps) => {
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
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default TWButton;
