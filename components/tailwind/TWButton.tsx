import React from 'react';

enum TWButtonColor {
    Emerald = 'emerald',
    DarkBlue = 'blue-dark'
}

enum TWButtonSize {
    Default = 'default',
    Big = 'big'
}

interface TWButtonProps {
    color: TWButtonColor,
    size: TWButtonSize,
    className?: string,
    children: string
}

const TWButton = ({color, size, children, className}: TWButtonProps) => {
    return (
        <button
            className={`
                px-4 
                ${size === TWButtonSize.Default ? 'py-2.5 text-body2': 'py-4 text-subtitle1'} 
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

export {TWButton, TWButtonColor, TWButtonSize};
