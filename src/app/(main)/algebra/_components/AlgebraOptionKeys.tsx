import React from 'react';
import AlgebraNavigationKeys from './AlgebraNavigationKeys';

interface AlgebraOptionKeysProps {
    children: React.ReactNode;
    navKeyStyle?: string;
}

const AlgebraOptionKeys: React.FC<AlgebraOptionKeysProps> = ({children, navKeyStyle}) => {
    return (
        <div className="grid grid-cols-5 gap-2 mt-1.5 relative z-auto">
            {children}
            <AlgebraNavigationKeys navKeyStyle={navKeyStyle}/>
        </div>
    );
};


export default AlgebraOptionKeys;