import React from 'react';
import { ChevronLeft, ChevronRight, Delete } from 'lucide-react';
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {  handleClear, handleBackSpace, handleNext, handlePrev } from '@/redux/handler';

const ArrowKeys: React.FC = ({}) => {
    const dispatch = useDispatch<AppDispatch>();
    const index = useSelector((state: RootState) => state.index.currentIndex);
    const inputTex = useSelector((state: RootState) => state.inputTex.value);
    

    return (
        <div className="grid grid-cols-2 gap-2 mt-2">
            <button 
                className="px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 hover:scale-103 active:scale-95 transform ease-in-out duration-150"
                onClick={()=>handleClear(dispatch)}
            >
                <h1>CLEAR</h1>
            </button>
            <button 
                className="flex justify-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 hover:scale-103 active:scale-95 transform ease-in-out duration-150"
                onClick={()=>handleBackSpace(inputTex, index, dispatch)}
            >
                <Delete className="h-10 w-10"/>
            </button>
            <button 
                className="flex justify-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 hover:scale-103 active:scale-95 transform ease-in-out duration-150"
                onClick={()=>handlePrev(inputTex, index, dispatch)}
            >
                <ChevronLeft className="h-10 w-10"/>
            </button>
            <button 
                className="flex justify-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 hover:scale-103 active:scale-95 transform ease-in-out duration-150"
                onClick={()=>handleNext(inputTex, index, dispatch)}
                >
                <ChevronRight className="h-10 w-10"/>
            </button>
        </div>
    );
};


export default ArrowKeys;