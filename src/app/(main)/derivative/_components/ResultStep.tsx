import React from 'react';
import Latex from 'react-latex';

interface ResultStepProps {
    result: string;
}

const ResultStep: React.FC<ResultStepProps> = ({ result }) => {
    return (
        <Latex>{`Therefore, the final derivative is $${result}$`}</Latex>
    )
};


export default ResultStep;