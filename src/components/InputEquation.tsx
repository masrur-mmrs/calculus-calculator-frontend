import React from 'react';

interface InputEquationProps {
    inputTex: string;
    handleTexChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error: string;
}

const InputEquation: React.FC<InputEquationProps> = ({inputTex, handleTexChange, error}) => {
    return (
        <div>
            <label htmlFor="latex-input" className="block text-sm font-medium my-2">
                Enter Equation
            </label>
            <textarea
                id="latex-input"
                value={inputTex}
                onChange={handleTexChange}
                rows={2}
                className="w-full p-2 border rounded font-mono text-sm outline-none"
                placeholder="Enter LaTeX formula"
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default InputEquation;