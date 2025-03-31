import React from 'react';
import { ChevronLeft, ChevronRight, Delete } from 'lucide-react';
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {  handleClear, handleBackSpace, handleNext, handlePrev } from '@/app/utils/handler';

interface NavigationKeysProps {
    optionsChildren?: React.ReactNode;
}

const NavigationKeys: React.FC<NavigationKeysProps> = ({optionsChildren}) => {
    const dispatch = useDispatch<AppDispatch>();
    const index = useSelector((state: RootState) => state.index.currentIndex);
    const inputTex = useSelector((state: RootState) => state.inputTex.value);
    
    return (
        <div className="relative flex flex-row justify-between z-auto">
            {optionsChildren}
            <div className="grid grid-cols-2 gap-2 mt-2 max-w-full">
                <button
                    className="px-4 sm:px-6 rounded-lg font-bold text-2xl font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150"
                    onClick={()=>handleClear(dispatch)}
                >
                    <h1>C</h1>
                </button>
                <button
                    className="flex justify-center items-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150"
                    onClick={()=>handleBackSpace(inputTex, index, dispatch)}
                >
                    <Delete className="h-10 w-10 sm:h-11 sm:w-11"/>
                </button>
                <button
                    className="flex justify-center items-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150"
                    onClick={()=>handlePrev(inputTex, index, dispatch)}
                >
                    <ChevronLeft className="h-10 w-10 sm:h-11 sm:w-11"/>
                </button>
                <button
                    className="flex justify-center items-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150"
                    onClick={()=>handleNext(inputTex, index, dispatch)}
                    >
                    <ChevronRight className="h-10 w-10 sm:h-11 sm:w-11"/>
                </button>
            </div>
        </div>
    );
};


export default NavigationKeys;