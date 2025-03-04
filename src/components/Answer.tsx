import React from 'react';
import Latex from 'react-latex';

interface AnswerProps {
    resultTex: string;
}

const Answer: React.FC<AnswerProps> = ({resultTex}) => {
    return (
        <div className="p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Answer</h2>
        <div className="p-4 rounded border h-16">
            <Latex>{`$${resultTex}$`}</Latex>
        </div>
      </div>
    );
};


export default Answer;