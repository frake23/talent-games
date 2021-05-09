import React from "react";

interface TWRowGridProps {
    children: React.ReactNode,
    className?: string
}

const TWRowGrid = ({children, className}: TWRowGridProps) => {
    return (
        <div className={`grid lg:grid-cols-12 gap-x-4 ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default TWRowGrid;
