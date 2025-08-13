import React from 'react';
import NavigationKeys from './NavigationKeys';

interface OptionKeysProps {
    children: React.ReactNode;
    navKeyStyle?: string;
}

const OptionKeys: React.FC<OptionKeysProps> = ({children, navKeyStyle}) => {
    return (
        <div className="grid grid-cols-5 gap-2 mt-1.5 relative z-auto">
            {children}
            <NavigationKeys navKeyStyle={navKeyStyle}/>
        </div>
    );
};


export default OptionKeys;