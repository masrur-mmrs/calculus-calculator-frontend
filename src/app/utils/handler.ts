import React from 'react';
import { incrementIndex, decrementIndex, setCurrentIndex } from '@/redux/slices/indexSlice';
import { setCursorIndex, decrementCursorIndex, incrementCursorIndex } from '@/redux/slices/cursorSlice';
import { clearInputTex, insertTex, setInputTex } from '@/redux/slices/inputTexSlice';
import { AppDispatch } from '@/redux/store';
import { findMatchingCurlyBrace, findMatchingParenthesis } from './helpers';

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
    if (inputTex.substring(index, index + 6) === "|\\sin(") {
        dispatch(incrementIndex(5))
    }
    if (inputTex.substring(index, index + 6) === "|\\cos(") {
        dispatch(incrementIndex(5))
    }
    if (inputTex.substring(index, index + 6) === "|\\tan(") {
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
    if (inputTex.substring(index - 5, index) === "\\sin(") {
        dispatch(decrementIndex(4))
    }
    if (inputTex.substring(index - 5, index) === "\\cos(") {
        dispatch(decrementIndex(4))
    }
    if (inputTex.substring(index - 5, index) === "\\tan(") {
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
        dispatch(decrementIndex(8));
        dispatch(decrementCursorIndex(1));
        return;
    }
    if (inputTex.charAt(index-1) === "}") {
        const matchedBraceIndex = findMatchingCurlyBrace(inputTex, index-1);
        // console.log(inputTex.substring(matchedBraceIndex-4, matchedBraceIndex+1));
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

export const handleOnKeyClick = (inputTex: string, index: number, dispatch: AppDispatch, children: React.ReactNode, fetchResult: ()=> void, ) => {
    console.log(inputTex);
    switch (children!.toString()) {
        case "=":
            if (fetchResult) fetchResult();
            break;
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
            if (inputTex.charAt(index-1) === ")") {
                const matchingParenthesis = findMatchingParenthesis(inputTex, index-1);
                const twoLetterFunction = inputTex.substring(matchingParenthesis-2, matchingParenthesis+1);
                const threeLetterFunction = inputTex.substring(matchingParenthesis-3, matchingParenthesis+1);
                console.log(twoLetterFunction)
                if (twoLetterFunction === "\\ln") {
                    const newTex = inputTex.substring(0, matchingParenthesis-2) + inputTex.substring(index);
                    dispatch(setInputTex(newTex));
                    dispatch(insertTex({index: matchingParenthesis-4, tex: `\\frac{${inputTex.substring(matchingParenthesis-2, index)}}{}`}));
                    dispatch(setCurrentIndex(`\\frac{${inputTex.substring(matchingParenthesis-2, index)}}{`.length));
                    dispatch(incrementCursorIndex(1));
                } else if (threeLetterFunction === "\\log" || threeLetterFunction === "\\sin" || threeLetterFunction === "\\cos" || threeLetterFunction === "\\tan") {
                    const newTex = inputTex.substring(0, matchingParenthesis-3) + inputTex.substring(index);
                    dispatch(setInputTex(newTex));
                    dispatch(insertTex({index: matchingParenthesis-5, tex: `\\frac{${inputTex.substring(matchingParenthesis-3, index)}}{}`}));
                    dispatch(setCurrentIndex(`\\frac{${inputTex.substring(matchingParenthesis-3, index)}}{`.length));
                    dispatch(incrementCursorIndex(1));
                }
            }
            break;
        case "[~]^{[~]}":
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
            if (inputTex.charAt(index-1) === ")" || inputTex.charAt(index-1) === "}" ) {
                dispatch(insertTex({index: index, tex: "^{~}"}));
                dispatch(incrementIndex(3));
                dispatch(incrementCursorIndex(3));
            }
            break;
        case "[~]^{-1}":
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
            if (inputTex.charAt(index-1) === ")" || inputTex.charAt(index-1) === "}" ) {
                dispatch(insertTex({index: index, tex: "^{-1}"}));
                dispatch(incrementIndex(5));
                dispatch(incrementCursorIndex(5));
            }
            break;
        case "\\sqrt{~}":
            dispatch(insertTex({index: index, tex: "\\sqrt{}"}));
            dispatch(incrementIndex(6))
            dispatch(incrementCursorIndex(1));
            break;
        case "\\ln(~)":
            dispatch(insertTex({index: index, tex: "\\ln()"}));
            dispatch(incrementIndex(4));
            dispatch(incrementCursorIndex(4));
            break;
        case "\\log{(~)}":
            dispatch(insertTex({index: index, tex: "\\log()"}));
            dispatch(incrementIndex(5));
            dispatch(incrementCursorIndex(5));
            break;
        case "\\sin(~)":
            dispatch(insertTex({index: index, tex: "\\sin()"}));
            dispatch(incrementIndex(5));
            dispatch(incrementCursorIndex(5));
            break;
        case "\\cos(~)":
            dispatch(insertTex({index: index, tex: "\\cos()"}));
            dispatch(incrementIndex(5));
            dispatch(incrementCursorIndex(5));
            break;
        case "\\tan(~)":
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