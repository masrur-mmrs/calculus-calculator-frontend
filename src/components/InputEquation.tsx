import React from 'react';

interface InputEquationProps {
    inputTex: string;
    error: string;
    handleWrtChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleTexChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const visible = process.env.NODE_ENV === "development"

const InputEquation: React.FC<InputEquationProps> = ({inputTex, error, handleTexChange, handleWrtChange}) => {
    return (
      <>
        <div className="flex flex-row w-full m-1 justify-between mt-5 mx-2">
            {visible && <textarea
                id="latex-input"
                value={inputTex}
                onChange={handleTexChange}
                rows={1}
                className="w-full p-4 border-2 border-white-mode-blue dark:border-muted-teal rounded-2xl font-mono text-md outline-none text-center align-middle"
                placeholder="Enter LaTeX formula"
            />}
            <div className="flex flex-col ml-2 border-2 border-white-mode-blue dark:border-muted-teal rounded-xl mr-2">
                <label htmlFor="wrt" className="block text-sm font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    WRT
                </label>
                <select
                    id="wrt"
                    onChange={handleWrtChange}
                    className="h-min w-min p-1.5 ml-0.5 font-mono text-md italic"
                >
                    <option value="x" defaultChecked>x</option>
                    <option value="y">y</option>
                    <option value="z">z</option>
                    <option value="θ">θ</option>
                </select>
            </div>
        </div>
        {error && <p className="text-red-500 mt-1">{error}</p>}
      </>
    );
};

export default InputEquation;