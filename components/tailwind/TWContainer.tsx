import React from 'react';

const TWContainer: React.FC = ({children}) => {
    return (
        <div className="xl:container xl:px-10">
            {children}
        </div>
    )
}

export default TWContainer;
