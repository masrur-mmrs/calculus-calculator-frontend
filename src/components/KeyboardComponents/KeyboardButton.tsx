import React from 'react';
import Latex from 'react-latex';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { handleOnKeyClick } from '@/app/utils/handler';
import { cn } from '@/app/utils/helpers';

interface KeyboardButtonProps {
    children: React.ReactNode;
    specieal?: boolean;
    fetchResult?: () => void;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ children, specieal = false, fetchResult }) => {
    const index = useSelector((state: RootState) => state.index.currentIndex);
    const inputTex = useSelector((state: RootState) => state.inputTex.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <button 
            className={cn("px-4 py-2.5 text-lg rounded-lg active:scale-95 sm:hover:scale-105 transform ease-in-out duration-150", specieal ? "text-white font-semibold bg-white-mode-blue dark:bg-blue-700": "font-mono border-2 border-white-mode-blue dark:border-muted-teal")}
            onClick={() => handleOnKeyClick(inputTex, index, dispatch, children, fetchResult!)}
        >
            <Latex>{`$${children}$`}</Latex>
        </button>
    );
};


export default KeyboardButton;