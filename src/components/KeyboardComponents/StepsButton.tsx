import React from 'react';
import { useStepsModalContext } from '@/context/context';

interface StepsButtonProps {
    getSteps: () => void;
}

const StepsButton: React.FC<StepsButtonProps> = ({ getSteps }) => {
    const { setOpen } = useStepsModalContext();

    const handleClick = () => {
        setOpen(true);
        getSteps();
    };

    return (
        <div>
            <button 
            className="px-1 m-auto rounded-lg font-bold text-xl text-center h-full w-full font-mono text-wrap text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150"
            onClick={handleClick}
            >
                <h3>Show<br/>Steps</h3>
            </button>
        </div>
    );
};


export default StepsButton;