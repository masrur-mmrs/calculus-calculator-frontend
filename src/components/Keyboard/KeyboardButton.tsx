import React from 'react';
import Latex from 'react-latex';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { insertTex, setInputTex } from "@/redux/inputTexSlice";
import { setCurrentIndex, incrementIndex } from '@/redux/indexSlice';
import { incrementCursorIndex } from "@/redux/cursorSlice";
import { cn } from '@/app/utils/helpers';

interface KeyboardButtonProps {
    children: React.ReactNode;
    specieal?: boolean
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ children, specieal = false }) => {
    const index = useSelector((state: RootState) => state.index.currentIndex);
    const inputTex = useSelector((state: RootState) => state.inputTex.value);
    const dispatch = useDispatch<AppDispatch>();

    const handleOnClick = () => {
        switch (children!.toString()) {
            case "\\div":
                const regex = /[0-9xyzθ]+/g;
                const matches = inputTex.slice(0, index).match(regex);
                if (matches) {
                    const lastMatch = matches[matches.length - 1];
                    const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                    if (lastMatchIndex + lastMatch.length === index) {
                        const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                        dispatch(setInputTex(newTex));
                        dispatch(insertTex({index: lastMatchIndex, tex: `\\frac{${lastMatch}}{}`}));
                        dispatch(setCurrentIndex(lastMatchIndex + `\\frac{${lastMatch}}{`.length));
                        dispatch(incrementCursorIndex(1));
                        break;
                    }
                }
                dispatch(insertTex({index: index, tex: "\\frac{}{}"}));
                dispatch(incrementIndex(6));
                dispatch(incrementCursorIndex(1));
                break;
            case "\\boxed{~}^{\\boxed{}}":
                const boxedRegex = /[0-9exyzθπ]+/g;
                const boxedMatches = inputTex.slice(0, index).match(boxedRegex);
                if (boxedMatches) {
                    const lastMatch = boxedMatches[boxedMatches.length - 1];
                    const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                    if (lastMatchIndex + lastMatch.length === index) {
                        const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                        dispatch(setInputTex(newTex));
                        dispatch(insertTex({index: lastMatchIndex, tex: `${lastMatch}^{}`}));
                        dispatch(setCurrentIndex(lastMatchIndex + `${lastMatch}^{`.length));
                        dispatch(incrementCursorIndex(1));
                        break;
                    }
                }
                break;
            case "\\boxed{~}^{-1}":
                const boxedInverseRegex = /[0-9exyzθπ]+/g;
                const boxedInverseMatches = inputTex.slice(0, index).match(boxedInverseRegex);
                if (boxedInverseMatches) {
                    const lastMatch = boxedInverseMatches[boxedInverseMatches.length - 1];
                    const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                    if (lastMatchIndex + lastMatch.length === index) {
                        const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                        dispatch(setInputTex(newTex));
                        dispatch(insertTex({index: lastMatchIndex, tex: `${lastMatch}^{-1}`}));
                        dispatch(setCurrentIndex(lastMatchIndex + `${lastMatch}^{-1}`.length));
                        dispatch(incrementCursorIndex(3));
                        break;
                    }
                }
                break;
            case "\\sqrt{~}":
                dispatch(insertTex({index: index, tex: "\\sqrt{}"}));
                dispatch(incrementIndex(6))
                dispatch(incrementCursorIndex(1));
                break;
            case "\\ln(~\\boxed{~}~)":
                dispatch(insertTex({index: index, tex: "\\ln()"}));
                dispatch(incrementIndex(4));
                dispatch(incrementCursorIndex(4));
                break;
            case "\\log{(~\\boxed{~}~})":
                dispatch(insertTex({index: index, tex: "\\log()"}));
                dispatch(incrementIndex(5));
                dispatch(incrementCursorIndex(5));
                break;
            case "\\sin(~\\boxed{~}~)":
                dispatch(insertTex({index: index, tex: "\\sin()"}));
                dispatch(incrementIndex(5));
                dispatch(incrementCursorIndex(5));
                break;
            case "\\cos(~\\boxed{~}~)":
                dispatch(insertTex({index: index, tex: "\\cos()"}));
                dispatch(incrementIndex(5));
                dispatch(incrementCursorIndex(5));
                break;
            case "\\tan(~\\boxed{~}~)":
                dispatch(insertTex({index: index, tex: "\\tan()"}));
                dispatch(incrementIndex(5));
                dispatch(incrementCursorIndex(5));
                break; 
            default:
                dispatch(insertTex({index: index, tex: children!.toString()}));
                dispatch(incrementIndex(children!.toString().length));
                dispatch((children!.toString().length>1)?incrementCursorIndex(3):incrementCursorIndex(1))
        }
    }

    return (
        <button 
            className={cn("px-4 py-2.5 rounded-lg active:scale-95 sm:hover:scale-105 transform ease-in-out duration-150", specieal ? "text-white font-semibold bg-white-mode-blue dark:bg-blue-700 text-lg": "font-mono border-2 border-white-mode-blue dark:border-muted-teal")}
            onClick={handleOnClick}
        >
            <Latex>{`$${children}$`}</Latex>
        </button>
    );
};


export default KeyboardButton;