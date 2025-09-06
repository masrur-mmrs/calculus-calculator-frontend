import React from 'react';
import Latex from 'react-latex';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { handleOnKeyClick } from '../_utils/handler';
import { cn } from '@/app/utils/helpers';
import { useAlgebraEquationContext } from '@/context/context';

interface AlgebraKeyboardButtonProps {
    children: React.ReactNode;
    specieal?: boolean;
    disabled?: boolean;
    fetchResult?: () => void;
}

const AlgebraKeyboardButton: React.FC<AlgebraKeyboardButtonProps> = ({ children, specieal = false, disabled = false, fetchResult }) => {
    const { equation } = useAlgebraEquationContext();
    const index = useSelector((state: RootState) => state.algebraIndexSlice[`${equation}Index`]);
    const inputTex = useSelector((state: RootState) => state.algebraInputTex.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <button
            disabled={disabled}
            className={cn("px-2.5 py-2.5 inline-flex text-center justify-center items-center content-center text-lg min-w-16 rounded-lg active:scale-95 sm:hover:scale-105 transform ease-in-out duration-150 disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60", specieal ? "text-white font-semibold bg-white-mode-blue dark:bg-blue-700": "font-mono border-2 border-white-mode-blue dark:border-muted-teal")}
            onClick={() => handleOnKeyClick(inputTex, equation, index, dispatch, children, fetchResult!)}
        >
            <Latex>{`$${children}$`}</Latex>
        </button>
    );
};


export default AlgebraKeyboardButton;