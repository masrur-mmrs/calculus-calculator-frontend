import React from 'react';


interface SolveButtonProps {
    inputTex: string;
    handleClick: () => void;
}


const SolveButton: React.FC<SolveButtonProps> = ({ inputTex, handleClick }) => {
    return (
        <button 
            onClick={handleClick}
            disabled={inputTex === "|"}
            className="px-1 rounded-lg font-bold text-xl text-center font-mono text-wrap 
                text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 
                sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150
                disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60
            "
        >
            <h3>Solve</h3>
         </button>
    );
};


export default SolveButton;