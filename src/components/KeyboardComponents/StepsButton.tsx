import React from 'react';

import { useStepsModalContext } from '@/context/context';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface StepsButtonProps {
    getSteps: () => void;
}

const StepsButton: React.FC<StepsButtonProps> = ({ getSteps }) => {
    const { setOpen } = useStepsModalContext();
    const inputTex = useSelector((state: RootState) => state.inputTex.value);

    const handleClick = () => {
        setOpen(true);
        getSteps();
    };

    return (
        <button 
            onClick={handleClick}
            disabled={inputTex === "|"}
            className="px-1 m-auto rounded-lg font-bold text-xl text-center h-full w-full font-mono text-wrap 
                text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 
                sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150
                disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60
            "
        >
            <h3>Show<br/>Steps</h3>
        </button>
    );
};


export default StepsButton;