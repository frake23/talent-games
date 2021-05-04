import React from 'react';

const TWContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="xl:container xl:px-10">
            {children}
        </div>
    )
}

export default TWContainer;
