import React from 'react';
import Latex from 'react-latex';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { insertTex, setInputTex } from "../../redux/inputTexSlice";
import { setCurrentIndex, incrementIndex } from '@/redux/indexSlice';
import { cn } from '@/app/lib/utils';

interface KeyboardButtonProps {
    children: React.ReactNode;
    specieal?: boolean
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ children, specieal = false }) => {
    const index = useSelector((state: RootState) => state.index.currentIndex);
    const inputTex = useSelector((state: RootState) => state.inputTex.value)
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
                        dispatch(insertTex({index: lastMatchIndex, tex: `\\frac{~${lastMatch}}{}`}));
                        dispatch(setCurrentIndex(lastMatchIndex + `\\frac{~${lastMatch}`.length));
                        break;
                    }
                }
                dispatch(insertTex({index: index, tex: "\\frac{~}{}"}));
                dispatch(incrementIndex(7));
                break;
            case "x^{\\boxed{}}":
                const boxedRegex = /[0-9exyzθπ]+/g;
                const boxedMatches = inputTex.slice(0, index).match(boxedRegex);
                if (boxedMatches) {
                    const lastMatch = boxedMatches[boxedMatches.length - 1];
                    const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                    if (lastMatchIndex + lastMatch.length === index) {
                        const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                        dispatch(setInputTex(newTex));
                        console.log("Last matched index: ", lastMatchIndex);
                        dispatch(insertTex({index: lastMatchIndex, tex: `${lastMatch}^{}`}));
                        dispatch(setCurrentIndex(lastMatchIndex + `${lastMatch}^{`.length));
                        break;
                    }
                }
                // dispatch(insertTex({index: index, tex: "\\boxed{}^{\\boxed{}}"}));
                // dispatch(incrementIndex(7));
                break;
            case "\\sqrt{}":
                dispatch(insertTex({index: index, tex: "\\sqrt{}"}));
                dispatch(incrementIndex(6))
                break;
            case "\\ln(~\\boxed{}~)":
                dispatch(insertTex({index: index, tex: "\\ln()"}));
                dispatch(incrementIndex(4));
                break;
            case "\\log{(~\\boxed{}~})":
                dispatch(insertTex({index: index, tex: "\\log_{10}()"}));
                dispatch(incrementIndex(10));
                break;
            default:
                dispatch(insertTex({index: index, tex: children!.toString()}));
                dispatch(incrementIndex(children!.toString().length));
        }
    }

    return (
        <button 
            className={cn("px-4 py-2.5 rounded-lg active:scale-95 transform ease-in-out duration-150", specieal ? "text-white font-semibold bg-white-mode-blue dark:bg-blue-700": "font-mono border-2 border-white-mode-blue dark:border-muted-teal")}
            onClick={handleOnClick}
        >
            <Latex>{`$${children}$`}</Latex>
        </button>
    );
};


export default KeyboardButton;