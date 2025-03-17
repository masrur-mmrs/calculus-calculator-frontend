import { incrementIndex, decrementIndex, setCurrentIndex } from "./indexSlice";
import { setCursorIndex, decrementCursorIndex } from "./cursorSlice";
import { clearInputTex, setInputTex } from "./inputTexSlice";
import { AppDispatch } from "./store";
import { findMatchingCurlyBrace, findMatchingParenthesis } from "@/app/utils/helpers";

export const handleNext = (inputTex: string, index: number, dispatch: AppDispatch) => {
    if (inputTex.substring(index, index + 11) === "|\\log_{10}(") {
        dispatch(incrementIndex(10))
        return
    }
    if (inputTex.substring(index, index + 9) === "|~\\times~") {
        dispatch(incrementIndex(7))
    }
    if (inputTex.substring(index, index + 6) === "|\\log(") {
        dispatch(incrementIndex(5))
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

export const handlePrev = (inputTex: string, index: number, dispatch: AppDispatch) => {
    console.log(inputTex.substring(index - 10, index));
    if (inputTex.substring(index - 10, index) === "\\log_{10}(") {
        dispatch(decrementIndex(9))
        dispatch(decrementCursorIndex(4));
    }
    if (inputTex.substring(index - 8, index) === "~\\times~") {
        dispatch(decrementIndex(7))
    }
    if (inputTex.substring(index - 6, index) === "\\frac{") {
        dispatch(decrementIndex(4))
        dispatch(decrementCursorIndex(2));
    }
    if (inputTex.substring(index - 6, index) === "\\sqrt{") {
        dispatch(decrementIndex(4))
    }
    if (inputTex.substring(index - 5, index) === "\\log(") {
        dispatch(decrementIndex(4))
    }
    if (inputTex.substring(index - 4, index) === "\\ln(") {
        dispatch(decrementIndex(3))
    }
    if (inputTex.substring(index - 1, index) === "{") {
        dispatch(decrementIndex(1))
    }
    if (index > 0) {
        dispatch(decrementIndex(1));
    }
}

export const handleClear = (dispatch: AppDispatch) => {
    dispatch(clearInputTex());
    dispatch(setCurrentIndex(0));
    dispatch(setCursorIndex(0));
}

export const handleBackSpace = (inputTex: string, index: number, dispatch: AppDispatch) => {
    if (inputTex.substring(index - 8, index) === "~\\times~") {
        const newTex = inputTex.substring(0, index - 8) + inputTex.substring(index);
        dispatch(setInputTex(newTex));
        dispatch(decrementIndex(7));
        dispatch(decrementCursorIndex(1));
        return;
    }
    if (inputTex.charAt(index-1) === "}") {
        const matchedBraceIndex = findMatchingCurlyBrace(inputTex, index-1);
        console.log(inputTex.substring(matchedBraceIndex-4, matchedBraceIndex+1));
        if (inputTex.substring(matchedBraceIndex-4, matchedBraceIndex+1) === "\\sqrt") {
            const newTex = inputTex.substring(0, matchedBraceIndex-4) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(setCurrentIndex(matchedBraceIndex-4));
            dispatch(decrementCursorIndex(1));
        }
        if (inputTex.charAt(matchedBraceIndex) === "^") {
            const newTex = inputTex.substring(0, matchedBraceIndex) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(setCurrentIndex(matchedBraceIndex));
            dispatch(decrementCursorIndex(1));
        }
        if (inputTex.charAt(matchedBraceIndex) === "}") {
            const secondMatchedBraceIndex = findMatchingCurlyBrace(inputTex, matchedBraceIndex);
            if (inputTex.substring(secondMatchedBraceIndex-4, secondMatchedBraceIndex+1) === "\\frac") {
                const newTex = inputTex.substring(0, secondMatchedBraceIndex-4) + inputTex.substring(index);
                dispatch(setInputTex(newTex));
                dispatch(setCurrentIndex(secondMatchedBraceIndex-4));
                dispatch(decrementCursorIndex(1));
            }
        }
    }
    if (inputTex.charAt(index-1) === ")") {
        const matchedParenthesisIndex = findMatchingParenthesis(inputTex, index-1);
        if (inputTex.substring(matchedParenthesisIndex-3, matchedParenthesisIndex+1) === "\\log") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex-3) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(setCurrentIndex(matchedParenthesisIndex-3));
            dispatch(decrementCursorIndex(4));
        }
        if (inputTex.substring(matchedParenthesisIndex-3, matchedParenthesisIndex+1) === "\\sin") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex-3) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(setCurrentIndex(matchedParenthesisIndex-3));
            dispatch(decrementCursorIndex(4));
        }
        if (inputTex.substring(matchedParenthesisIndex-3, matchedParenthesisIndex+1) === "\\cos") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex-3) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(setCurrentIndex(matchedParenthesisIndex-3));
            dispatch(decrementCursorIndex(4));
        }
        if (inputTex.substring(matchedParenthesisIndex-3, matchedParenthesisIndex+1) === "\\tan") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex-3) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(setCurrentIndex(matchedParenthesisIndex-3));
            dispatch(decrementCursorIndex(4));
        }
        if (inputTex.substring(matchedParenthesisIndex-2, matchedParenthesisIndex+1) === "\\ln") {
            const newTex = inputTex.substring(0, matchedParenthesisIndex-2) + inputTex.substring(index);
            dispatch(setInputTex(newTex));
            dispatch(setCurrentIndex(matchedParenthesisIndex-2));
            dispatch(decrementCursorIndex(3));
        }
    }
    const regex = /[0-9exyzπθ+\-]+/g;
    if (regex.test(inputTex.charAt(index-1))) {
        const newTex = inputTex.substring(0, index-1) + inputTex.substring(index);
        dispatch(setInputTex(newTex));
        dispatch(decrementIndex(1));
        dispatch(decrementCursorIndex(1));
        return;
    }
}
