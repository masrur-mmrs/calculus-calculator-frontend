import React from 'react';
import { ChevronLeft, ChevronRight, Delete } from 'lucide-react';
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {  handleClear, handleBackSpace, handleNext, handlePrev } from '../_utils/handler';
import { cn } from '@/app/utils/helpers';
import { useAlgebraEquationContext } from '@/context/context';

interface AlgebraNavigationKeysProps {
    navKeyStyle?: string;
}

const AlgebraNavigationKeys: React.FC<AlgebraNavigationKeysProps> = ({ navKeyStyle = "sm:px-6" }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { equation } = useAlgebraEquationContext();
    const inputTex = useSelector((state: RootState) => state.algebraInputTex.value);
    const index = useSelector((state: RootState) => state.algebraIndexSlice[`${equation}Index`]);
    
    return (
        // Reminder: the mobile version of the nav keys alignment looks weird in firefox devtools, but looks fine in the actual mobile browser
        <div className="col-span-2 min-w-max relative flex flex-row justify-evenly items-stretch z-auto m-0">
            <div className="grid grid-cols-2 gap-2.5">
                <button
                    className={cn(navKeyStyle, "px-3.5 min-w-16 w-full rounded-lg font-bold text-2xl font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150")}
                    onClick={()=>handleClear(dispatch)}
                >
                    <h1>C</h1>
                </button>
                <button
                    className={cn(navKeyStyle, "px-3.5 min-w-16 w-full flex justify-center items-center rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150")}
                    onClick={()=>handleBackSpace(inputTex, equation, index, dispatch)}
                >
                    <Delete className="h-10 w-10 sm:h-11 sm:w-11"/>
                </button>
                <button
                    className={cn(navKeyStyle, "px-3.5 min-w-16 w-full flex justify-center items-center rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150")}
                    onClick={()=>handlePrev(inputTex, equation, index, dispatch)}
                >
                    <ChevronLeft className="h-10 w-10 sm:h-11 sm:w-11"/>
                </button>
                <button
                    className={cn(navKeyStyle, "px-3.5 min-w-16 w-full flex justify-center items-center rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150")}
                    onClick={()=>handleNext(inputTex, equation, index, dispatch)}
                    >
                    <ChevronRight className="h-10 w-10 sm:h-11 sm:w-11"/>
                </button>
            </div>
        </div>
    );
};


export default AlgebraNavigationKeys;