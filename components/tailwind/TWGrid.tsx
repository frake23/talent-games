import React from 'react';

interface TWGridProps {
    children: React.ReactNode,
    className?: string
}

const TWGrid = ({children, className}: TWGridProps) => {
    return (
        <div className={`grid lg:grid-cols-12 gap-4 ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default TWGrid;
