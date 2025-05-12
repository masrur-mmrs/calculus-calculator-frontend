import React from 'react';
import Latex from 'react-latex';

interface SimplifiedStepProps {
    simplified: string;
}

const SimplifiedStep: React.FC<SimplifiedStepProps> = ({simplified}) => {
    return (
        <Latex>{`Simplifying we get, $${simplified}$`}</Latex>
    );
};

export default SimplifiedStep;