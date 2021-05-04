import React from 'react';
import TWContainer from './TWContainer';

const TWGrid: React.FC = ({children}) => {
    return (
        <TWContainer>
            <div className="lg:grid-cols-12 gap-4">
                {children}
            </div>
        </TWContainer>
    )
}

export default TWGrid;
