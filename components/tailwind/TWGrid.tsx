import React from 'react';

interface TWGridProps {
    className?: string
}

const TWGrid: React.FC<TWGridProps> = ({children, className}) => {
    return (
        <div className={`grid lg:grid-cols-12 gap-4 ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default TWGrid;
