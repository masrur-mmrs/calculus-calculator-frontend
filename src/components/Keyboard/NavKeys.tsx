import React from 'react';
import { ChevronLeft, ChevronRight, Delete } from 'lucide-react';
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { clearInputTex, setInputTex } from '@/redux/inputTexSlice';
import { incrementIndex, decrementIndex, setCurrentIndex} from '@/redux/indexSlice';

const ArrowKeys: React.FC = ({}) => {
    const dispatch = useDispatch<AppDispatch>();
    const index = useSelector((state: RootState) => state.index.currentIndex);
    const inputTex = useSelector((state: RootState) => state.inputTex.value);
    
    const handleNext = () => {
        console.log(inputTex.substring(index, index + 11));
        if (inputTex.substring(index, index + 11) === "|\\log_{10}(") {
            dispatch(incrementIndex(10))
            return
        }
        if (inputTex.substring(index, index + 9) === "|~\\times~") {
            dispatch(incrementIndex(7))
        }
        if (inputTex.substring(index, index + 5) === "|\\ln(") {
            dispatch(incrementIndex(4))
        }
        if (inputTex.substring(index, index + 3) === "|^{") {
            dispatch(incrementIndex(1))
        }
        if (inputTex.substring(index, index + 3) === "|~}") {
            dispatch(incrementIndex(2))
        }
        if (inputTex.substring(index, index + 3) === "|}{") {
            dispatch(incrementIndex(2))
            return
        }
        if (inputTex.substring(index, index + 2) === "|}") {
            dispatch(incrementIndex(1))
            return
        }
        if (inputTex.substring(index, index + 2) === "|\\") {
            const nextBraceIndex = inputTex.indexOf("{", index);
            if (nextBraceIndex !== -1) {
            dispatch(incrementIndex(nextBraceIndex - index));
            }
            return;
        }
        if (index < inputTex.length - 1) {
            dispatch(incrementIndex(1))
        }
    }

    const handlePrev = () => {
        console.log(inputTex.substring(index - 10, index));
        if (inputTex.substring(index - 10, index) === "\\log_{10}(") {
            dispatch(decrementIndex(9))
        }
        if (inputTex.substring(index - 8, index) === "~\\times~") {
            dispatch(decrementIndex(7))
        }
        if (inputTex.substring(index - 6, index) === "\\sqrt{") {
            dispatch(decrementIndex(4))
        }
        if (inputTex.substring(index - 4, index) === "\\ln(") {
            dispatch(decrementIndex(3))
        }
        if (inputTex.substring(index - 2, index) === "{~") {
            dispatch(decrementIndex(6))
        }
        if (inputTex.substring(index - 1, index) === "{") {
            dispatch(decrementIndex(1))
        }
        if (index > 0) {
            dispatch(decrementIndex(1));
        }
    }

    const handleClear = () => {
        dispatch(clearInputTex());
        dispatch(setCurrentIndex(0));
    }

    const handleBackSpace = () => {
        //TODO: fix backspace when removing in the middle of "\sqrt{\ln(361^{12x})}"
        console.log(inputTex.substring(index - 8, index));
        if (inputTex.substring(index - 8, index) === "~\\times~") {
            const newTex = inputTex.substring(0, index - 8) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(decrementIndex(7));
            return;
        }
        if (inputTex.charAt(index-1) === "}") {
            const fracRegex = /\\frac\{[~a-zA-Z0-9πθ]*\}\{[a-zA-Z0-9πθ]*\}$/;
            const fracMatch = inputTex.substring(0, index).match(fracRegex);
            if (fracMatch) {
                const newTex = inputTex.substring(0, fracMatch.index) + inputTex.substring(index);
                dispatch(setInputTex(newTex));
                dispatch(setCurrentIndex(fracMatch.index!));
                return;
            }
            const expRegex = /\^\{[a-zA-Z0-9πθ]*\}/;
            const expMatch = inputTex.substring(0, index).match(expRegex);
            if (expMatch) {
                const newTex = inputTex.substring(0, expMatch.index) + inputTex.substring(index);
                dispatch(setInputTex(newTex));
                dispatch(setCurrentIndex(expMatch.index!));
                return;
            }
            const sqrtRegex = /\\sqrt\{[^}]*\}/;
            const sqrtMatch = inputTex.substring(0, index).match(sqrtRegex);
            if (sqrtMatch) {
                const newTex = inputTex.substring(0, sqrtMatch.index) + inputTex.substring(index);
                dispatch(setInputTex(newTex));
                dispatch(setCurrentIndex(sqrtMatch.index!));
                return;
            }
        }
        if (inputTex.charAt(index-1) === ")") {
            const logRegex = /\\log_{10}\([0-9a-zπθ]*\)/;
            const logMatch = inputTex.substring(0, index).match(logRegex);
            if (logMatch) {
                const newTex = inputTex.substring(0, logMatch.index) + inputTex.substring(index);
                dispatch(setInputTex(newTex));
                dispatch(setCurrentIndex(logMatch.index!));
                return;
            }

            const lnRegex = /\\ln\([a-z0-9πθ]*\)/;
            const lnMatch = inputTex.substring(0, index).match(lnRegex);
            if (lnMatch) {
                const newTex = inputTex.substring(0, lnMatch.index) + inputTex.substring(index);
                dispatch(setInputTex(newTex));
                dispatch(setCurrentIndex(lnMatch.index!));
                return;
            }
        }
        const regex = /[0-9exyzθ+\-]+/g;
        if (regex.test(inputTex.charAt(index-1))) {
            const newTex = inputTex.substring(0, index-1) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(decrementIndex(1));
            return;
        }
    }

    return (
        <div className="grid grid-cols-2 gap-2 mt-2">
            <button 
                className="px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 active:scale-95 transform ease-in-out duration-150"
                onClick={handleClear}
            >
                <h1>CLEAR</h1>
            </button>
            <button 
                className="flex justify-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 active:scale-95 transform ease-in-out duration-150"
                onClick={handleBackSpace}
            >
                <Delete className="h-10 w-10"/>
            </button>
            <button 
                className="flex justify-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 active:scale-95 transform ease-in-out duration-150"
                onClick={handlePrev}
            >
                <ChevronLeft className="h-10 w-10"/>
            </button>
            <button 
                className="flex justify-center px-4 sm:px-6 rounded-lg font-mono text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 active:scale-95 transform ease-in-out duration-150"
                onClick={handleNext}
                >
                <ChevronRight className="h-10 w-10"/>
            </button>
        </div>
    );
};


export default ArrowKeys;