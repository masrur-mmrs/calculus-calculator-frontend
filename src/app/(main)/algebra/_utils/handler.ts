import React from "react";
import { 
        incrementIndex,
        decrementIndex,
        setCurrentIndex
    } from "@/redux/slices/algebraIndexSlice";
import { 
        setCursorIndex,
        decrementCursorIndex,
        incrementCursorIndex
    } from "@/redux/slices/cursorSlice";
import { 
        clearAlgebraInputTex,
        insertAlgebraInputTex, 
        setAlgebraInputTex 
    } from "@/redux/slices/algebraSlice";
import { AppDispatch } from "@/redux/store";
import { 
        findMatchingCurlyBrace,
        findMatchingParenthesis 
    } from "@/app/utils/helpers";
import { clearAlgebraResultTex } from "@/redux/slices/algebraResultTexSlice";

enum NavigationOperation {
    Previous,
    Next
}

interface NavigationPattern {
    pattern: string;
    indexChange: number;
    cursorChange?: number;
}

const matchesAtIndex = (
    input: string,
    index: number,
    pattern: string,
    operation: NavigationOperation,
): boolean => (operation) ? input.substring(index, index + pattern.length) === pattern : input.substring(index - pattern.length, index) === pattern;
 
const advanceIndex = (
    dispatch: AppDispatch,
    indexAmount: number,
    cursorAmount: number = indexAmount,
    eqn: "equation1" | "equation2" | "equation3"
) => {
    dispatch(incrementIndex({ value: indexAmount, equation: eqn }));
    if (cursorAmount) dispatch(incrementCursorIndex(cursorAmount));
};

const rewindIndex = (
    dispatch: AppDispatch,
    indexAmount: number,
    cursorAmount: number = indexAmount,
    eqn: "equation1" | "equation2" | "equation3"
) => {
    dispatch(decrementIndex({ value: indexAmount, equation: eqn }));
    if (cursorAmount) dispatch(decrementCursorIndex(cursorAmount));
};

const NEXT_PATTERNS: NavigationPattern[] = [
    { pattern: "|\\%", indexChange: 2 },
    { pattern: "|^\\circ", indexChange: 6 },
    { pattern: "|\\operatorname{atan}(", indexChange: 20 },
    { pattern: "|\\operatorname{acos}(", indexChange: 20 },
    { pattern: "|\\operatorname{asin}(", indexChange: 20 },
    { pattern: "|\\log_{10}(", indexChange: 10 },
    { pattern: "|~\\times~", indexChange: 7 },
    { pattern: "|\\frac{", indexChange: 6},
    { pattern: "|\\sqrt{" ,indexChange: 6},
    { pattern: "|\\log(", indexChange: 5 },
    { pattern: "|\\sin(", indexChange: 5 },
    { pattern: "|\\cos(", indexChange: 5 },
    { pattern: "|\\tan(", indexChange: 5 },
    { pattern: "|\\ln(", indexChange: 4 },
    { pattern: "|^{", indexChange: 1 },
    { pattern: "|~}", indexChange: 2 },
    { pattern: "|}{", indexChange: 2 },
    { pattern: "|}", indexChange: 1 },
];

const PREV_PATTERNS: NavigationPattern[] = [
    { pattern: "\\", indexChange: 2, cursorChange: 2},
    { pattern: "\\%", indexChange: 2, cursorChange: 1},
    { pattern: "^\\circ", indexChange: 6, cursorChange: 1},
    { pattern: "\\operatorname{asin}(", indexChange: 20, cursorChange: 1},
    { pattern: "\\operatorname{acos}(", indexChange: 20, cursorChange: 1},
    { pattern: "\\operatorname{atan}(", indexChange: 20, cursorChange: 1},
    { pattern: "\\log_{10}(", indexChange: 9, cursorChange: 1},
    { pattern: "~\\times~", indexChange: 7, cursorChange: 1},
    { pattern: "\\frac{", indexChange: 6, cursorChange: 1},
    { pattern: "\\sqrt{", indexChange: 6, cursorChange: 1},
    { pattern: "\\log(", indexChange: 5, cursorChange: 1},
    { pattern: "\\sin(" ,indexChange: 5, cursorChange: 1},
    { pattern: "\\cos(", indexChange: 5, cursorChange: 1},
    { pattern: "\\tan(" ,indexChange: 5, cursorChange: 1},
    { pattern: "\\ln(", indexChange: 4, cursorChange: 1},
    { pattern: "}{", indexChange: 2, cursorChange: 1},
    { pattern: "{", indexChange: 1, cursorChange: 1},
]

export const handleNext = (
  inputTex: AlgebraInputTex,
  eqn: "equation1" | "equation2" | "equation3",
  index: number,
  dispatch: AppDispatch
) => {
    for (const { pattern, indexChange, cursorChange } of NEXT_PATTERNS) {
        if (matchesAtIndex(inputTex[eqn], index, pattern, NavigationOperation.Next)) {
            advanceIndex(dispatch, indexChange, cursorChange, eqn);
            return;
        }
    }

    if (matchesAtIndex(inputTex[eqn], index, "|\\", NavigationOperation.Next)) {
        if (matchesAtIndex(inputTex[eqn], index, "|\\o", NavigationOperation.Next)) {
            const nextBraceIndex = inputTex[eqn].indexOf("{", index);
            if (nextBraceIndex !== -1) {
                dispatch(incrementIndex({value: nextBraceIndex - index, equation: eqn}));
            }
        } else {
            advanceIndex(dispatch, 2, 2, eqn);
        }
        return;
    }

    if (index < inputTex[eqn].length - 1) advanceIndex(dispatch, 1, 1, eqn);
};

export const handlePrev = (
    inputTex: AlgebraInputTex, 
    eqn: "equation1" | "equation2" | "equation3",
    index: number, 
    dispatch: AppDispatch
) => {
    for (const { pattern, indexChange, cursorChange } of PREV_PATTERNS) {
        if (matchesAtIndex(inputTex[eqn], index, pattern, NavigationOperation.Previous)) {
            rewindIndex(dispatch, indexChange, cursorChange, eqn);
            return;
        }
    }
    if (index > 0) rewindIndex(dispatch, 1, 1, eqn);
}

export const handleClear = (dispatch: AppDispatch, ) => {
    dispatch(clearAlgebraInputTex());
    dispatch(clearAlgebraResultTex());
    dispatch(setCurrentIndex({index: 0, equation: "equation1"}));
    dispatch(setCurrentIndex({index: 0, equation: "equation2"}));
    dispatch(setCurrentIndex({index: 0, equation: "equation3"}));
    dispatch(setCursorIndex(0));
}

export const handleBackSpace = (inputTex: AlgebraInputTex, eqn: "equation1" | "equation2" | "equation3", index: number, dispatch: AppDispatch) => {
    if (inputTex[eqn].substring(index - 13, index) === "\\end{pmatrix}") {
        const beginIndex = inputTex[eqn].lastIndexOf("\\begin{pmatrix}", index - 14);
        if (beginIndex !== -1) {
            const newTex = inputTex[eqn].substring(0, beginIndex) + inputTex[eqn].substring(index);
            dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
            dispatch(setCurrentIndex({index: beginIndex, equation: eqn}));
            dispatch(setCursorIndex(beginIndex));
            return;
        }
    }
    if (inputTex[eqn].substring(index - 8, index) === "~\\times~") {
        const newTex = inputTex[eqn].substring(0, index - 8) + inputTex[eqn].substring(index);
        dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
        dispatch(decrementIndex({value: 8, equation: eqn}));
        dispatch(decrementCursorIndex(1));
        return;
    }
    if (inputTex[eqn].substring(index-4, index) === "\\ln(") {
        const newTex = inputTex[eqn].substring(0, index-4) + inputTex[eqn].substring(index);
        dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
        dispatch(setCurrentIndex({index: index-4, equation: eqn}));
        dispatch(decrementCursorIndex(1));
        return;
    }
    if (inputTex[eqn].charAt(index-1) === "(") {
        const newTex = inputTex[eqn].substring(0, index-5) + inputTex[eqn].substring(index);
        dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
        dispatch(setCurrentIndex({index: index-5, equation: eqn}));
        dispatch(decrementCursorIndex(1));
        return;
    }
    if (inputTex[eqn].charAt(index-1) === "}") {
        const matchedBraceIndex = findMatchingCurlyBrace(inputTex[eqn], index-1);
        if (inputTex[eqn].substring(matchedBraceIndex-4, matchedBraceIndex+1) === "\\sqrt") {
            const newTex = inputTex[eqn].substring(0, matchedBraceIndex-4) + inputTex[eqn].substring(index);
            dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
            dispatch(setCurrentIndex({index: matchedBraceIndex-4, equation: eqn}));
            dispatch(decrementCursorIndex(1));
            return;
        }
        if (inputTex[eqn].charAt(matchedBraceIndex) === "^") {
            const newTex = inputTex[eqn].substring(0, matchedBraceIndex) + inputTex[eqn].substring(index);
            dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
            dispatch(setCurrentIndex({index: matchedBraceIndex, equation: eqn}));
            dispatch(decrementCursorIndex(1));
            return;
        }
        if (inputTex[eqn].charAt(matchedBraceIndex) === "}") {
            const secondMatchedBraceIndex = findMatchingCurlyBrace(inputTex[eqn], matchedBraceIndex);
            if (inputTex[eqn].substring(secondMatchedBraceIndex-4, secondMatchedBraceIndex+1) === "\\frac") {
                const newTex = inputTex[eqn].substring(0, secondMatchedBraceIndex-4) + inputTex[eqn].substring(index);
                dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                dispatch(setCurrentIndex({index: secondMatchedBraceIndex-4, equation: eqn}));
                dispatch(decrementCursorIndex(1));
                return;
            }
        }
    }
    if (inputTex[eqn].charAt(index-1) === ")") {
        const matchedParenthesisIndex = findMatchingParenthesis(inputTex[eqn], index-1);
        const eighteenLetterMatch = inputTex[eqn].substring(matchedParenthesisIndex-18, matchedParenthesisIndex+1)
        if (eighteenLetterMatch === "\\operatorname{atan}" || 
            eighteenLetterMatch === "\\operatorname{acos}" || 
            eighteenLetterMatch === "\\operatorname{asin}") {
            const newTex = inputTex[eqn].substring(0, matchedParenthesisIndex-18) + inputTex[eqn].substring(index);
            dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
            dispatch(setCurrentIndex({index: matchedParenthesisIndex-18, equation: eqn}));
            dispatch(decrementCursorIndex(1));
            return;
        }
        const fourLetterMatch = inputTex[eqn].substring(matchedParenthesisIndex-3, matchedParenthesisIndex+1)
        if (fourLetterMatch=== "\\log" ||
            fourLetterMatch == "\\tan" ||
            fourLetterMatch === "\\cos" ||
            fourLetterMatch === "\\sin") {
            const newTex = inputTex[eqn].substring(0, matchedParenthesisIndex-3) + inputTex[eqn].substring(index);
            dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
            dispatch(setCurrentIndex({index: matchedParenthesisIndex-3, equation: eqn}));
            dispatch(decrementCursorIndex(4));
            return;
        }
        if (inputTex[eqn].substring(matchedParenthesisIndex-2, matchedParenthesisIndex+1) === "\\ln") {
            const newTex = inputTex[eqn].substring(0, matchedParenthesisIndex-2) + inputTex[eqn].substring(index);
            dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
            dispatch(setCurrentIndex({index: matchedParenthesisIndex-2, equation: eqn}));
            dispatch(decrementCursorIndex(3));
            return;
        }
    }
    if (inputTex[eqn].charAt(index-1) === "%") {
        console.log("Inside %")
        const newTex = inputTex[eqn].substring(0, index-2) + inputTex[eqn].substring(index);
        dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
        dispatch(decrementIndex({value: 2, equation: eqn}));
        dispatch(decrementCursorIndex(1));
        return;
    }
    const regex = /[0-9exyzπθ+\-()]+/g;
    if (regex.test(inputTex[eqn].charAt(index-1))) {
        const newTex = inputTex[eqn].substring(0, index-1) + inputTex[eqn].substring(index);
        dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
        dispatch(decrementIndex({value: 1, equation: eqn}));
        dispatch(decrementCursorIndex(1));
        return;
    }
}

export const handleOnKeyClick = (
    inputTex: AlgebraInputTex,
    eqn: "equation1" | "equation2" | "equation3",
    index: number, 
    dispatch: AppDispatch, 
    children: React.ReactNode, 
    fetchResult: ()=> void, ) => {
    switch (children!.toString()) {
        case "":
            if (fetchResult) fetchResult();
            break;
        //Normal cases
        case "\\frac{[~]}{[~]}":
        case "\\div":
            const regex = /[0-9xyzθ]+/g;
            const matches = inputTex[eqn].slice(0, index).match(regex);
            if (inputTex[eqn].charAt(index-1) === ")") {
                const matchingParenthesis = findMatchingParenthesis(inputTex[eqn], index-1);
                const twoLetterFunction = inputTex[eqn].substring(matchingParenthesis-2, matchingParenthesis+1);
                const threeLetterFunction = inputTex[eqn].substring(matchingParenthesis-3, matchingParenthesis+1);
                const fourLetterOperatorFunction = inputTex[eqn].substring(matchingParenthesis-18, matchingParenthesis+1) 
                console.log(inputTex[eqn].substring(matchingParenthesis-18, matchingParenthesis+1))
                if (twoLetterFunction === "\\ln") {
                    const newTex = inputTex[eqn].substring(0, matchingParenthesis-2) + inputTex[eqn].substring(index);
                    console.log("New Tex: ", newTex)
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    const insideTex = inputTex[eqn].substring(matchingParenthesis-2, index);
                    dispatch(insertAlgebraInputTex({
                        index: matchingParenthesis - 2, tex: `\\frac{${insideTex}}{}`,
                        equation: eqn
                    }));
                    console.log(`\\frac{${insideTex}}{`.length)
                    dispatch(setCurrentIndex({index: `\\frac{${insideTex}}{`.length + matchingParenthesis - 2, equation: eqn}));
                    dispatch(incrementCursorIndex(1));
                } else if (threeLetterFunction === "\\log" || threeLetterFunction === "\\sin" || threeLetterFunction === "\\cos" || threeLetterFunction === "\\tan") {
                    const newTex = inputTex[eqn].substring(0, matchingParenthesis-3) + inputTex[eqn].substring(index);
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    const insideTex = inputTex[eqn].substring(matchingParenthesis-3, index)
                    dispatch(insertAlgebraInputTex({
                        index: matchingParenthesis - 3, tex: `\\frac{${insideTex}}{}`,
                        equation: eqn
                    }));
                    dispatch(setCurrentIndex({index: `\\frac{${insideTex}}{`.length + matchingParenthesis - 3, equation: eqn}));
                    dispatch(incrementCursorIndex(1));
                } else if (fourLetterOperatorFunction === "\\operatorname{atan}" || fourLetterOperatorFunction === "\\operatorname{acos}" || fourLetterOperatorFunction === "\\operatorname{asin}") {
                    const newTex = inputTex[eqn].substring(0, matchingParenthesis-18) + inputTex[eqn].substring(index);
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    const insideTex = inputTex[eqn].substring(matchingParenthesis-18, index)
                    dispatch(insertAlgebraInputTex({
                        index: matchingParenthesis - 18, tex: `\\frac{${insideTex}}{}`,
                        equation: eqn
                    }));
                    dispatch(setCurrentIndex({ index: `\\frac{${insideTex}}{`.length + matchingParenthesis - 18, equation: eqn}));
                    dispatch(incrementCursorIndex(1));
                } else {
                    const newTex = inputTex[eqn].substring(0, matchingParenthesis + 1) + inputTex[eqn].substring(index);
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    const insideTex = inputTex[eqn].substring(matchingParenthesis + 1, index)
                    dispatch(insertAlgebraInputTex({
                        index: matchingParenthesis + 1, tex: `\\frac{${insideTex}}{}`,
                        equation: eqn
                    }));
                    dispatch(setCurrentIndex({index: `\\frac{${insideTex}}{`.length + matchingParenthesis + 1, equation: eqn}));
                    dispatch(incrementCursorIndex(1));
                }
            } else if (matches) {
                const lastMatch = matches[matches.length - 1];
                const lastMatchIndex = inputTex[eqn].lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex[eqn].slice(0, lastMatchIndex) + inputTex[eqn].slice(lastMatchIndex + lastMatch.length);
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    dispatch(insertAlgebraInputTex({
                        index: lastMatchIndex, tex: `\\frac{${lastMatch}}{}`,
                        equation: eqn
                    }));
                    dispatch(setCurrentIndex({index: lastMatchIndex + `\\frac{${lastMatch}}{`.length, equation: eqn}));
                    dispatch(incrementCursorIndex(1));
                    break;
                }
            } else {
                dispatch(insertAlgebraInputTex({
                    index: index, tex: "\\frac{}{}",
                    equation: eqn
                }));
                dispatch(incrementIndex({ value: 6, equation: eqn }));
                dispatch(incrementCursorIndex(1));
            }
            break;
        case "[~]^\\circ":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "^\\circ",
                equation: eqn
            }));
            dispatch(incrementIndex({value: 3, equation: eqn}));
            dispatch(incrementCursorIndex(3));
            // const degreeRegex = /[0-9exyzθπ]+/g;
            // const degreeMatches = inputTex.slice(0, index).match(degreeRegex);
            // if (degreeMatches) {
            //     const lastMatch = degreeMatches[degreeMatches.length - 1];
            //     const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
            //     if (lastMatchIndex + lastMatch.length === index) {
            //         const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
            //         dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
            //         dispatch(insertAlgebraInputTex({index: lastMatchIndex, tex: `${lastMatch}^\\circ`}));
            //         dispatch(setCurrentIndex(lastMatchIndex + `${lastMatch}^\\circ`.length));
            //         dispatch(incrementCursorIndex(3));
            //         break;
            //     }
            // }
            // if (inputTex.charAt(index-1) === ")" || inputTex.charAt(index-1) === "}" ) {
            //     dispatch(insertAlgebraInputTex({index: index, tex: "^\\circ"}));
            //     dispatch(incrementIndex(5));
            //     dispatch(incrementCursorIndex(3));
            // }
            break;
        case "[~]^{2}":
            const squaredRegex = /[0-9exyzθπ]+/g;
            const squaredMatches = inputTex[eqn].slice(0, index).match(squaredRegex);
            if (squaredMatches) {
                const lastMatch = squaredMatches[squaredMatches.length - 1];
                const lastMatchIndex = inputTex[eqn].lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex[eqn].slice(0, lastMatchIndex) + inputTex[eqn].slice(lastMatchIndex + lastMatch.length);
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    dispatch(insertAlgebraInputTex({
                        index: lastMatchIndex, tex: `${lastMatch}^{2}`,
                        equation: eqn
                    }));
                    dispatch(setCurrentIndex({ index: lastMatchIndex + `${lastMatch}^{2}`.length, equation: eqn }));
                    dispatch(incrementCursorIndex(3));
                    break;
                }
            }
            if (inputTex[eqn].charAt(index-1) === ")" || inputTex[eqn].charAt(index-1) === "}" ) {
                dispatch(insertAlgebraInputTex({
                    index: index, tex: "^{2}",
                    equation: eqn
                }));
                dispatch(incrementIndex({ value: 3, equation: eqn }));
                dispatch(incrementCursorIndex(3));
            }
            break;
        case "[~]^{[~]}":
            const boxedRegex = /[0-9exyzθπ]+/g;
            const boxedMatches = inputTex[eqn].slice(0, index).match(boxedRegex);
            if (boxedMatches) {
                const lastMatch = boxedMatches[boxedMatches.length - 1];
                const lastMatchIndex = inputTex[eqn].lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex[eqn].slice(0, lastMatchIndex) + inputTex[eqn].slice(lastMatchIndex + lastMatch.length);
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    dispatch(insertAlgebraInputTex({
                        index: lastMatchIndex, tex: `${lastMatch}^{}`,
                        equation: eqn
                    }));
                    dispatch(setCurrentIndex({ index: lastMatchIndex + `${lastMatch}^{}`.length - 1, equation: eqn }));
                    dispatch(incrementCursorIndex(1));
                    break;
                }
            }
            if (inputTex[eqn].charAt(index-1) === ")" || inputTex[eqn].charAt(index-1) === "}" ) {
                dispatch(insertAlgebraInputTex({
                    index: index, tex: "^{~}",
                    equation: eqn
                }));
                dispatch(incrementIndex({ value: 3, equation: eqn }));
                dispatch(incrementCursorIndex(3));
            }
            break;
        case "\\begin{pmatrix}☐&☐\\\\☐&☐\\end{pmatrix}^{-1}":
        case "[~]^{-1}":
            const boxedInverseRegex = /[0-9exyzθπ]+/g;
            const boxedInverseMatches = inputTex[eqn].slice(0, index).match(boxedInverseRegex);
            if (boxedInverseMatches) {
                const lastMatch = boxedInverseMatches[boxedInverseMatches.length - 1];
                const lastMatchIndex = inputTex[eqn].lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex[eqn].slice(0, lastMatchIndex) + inputTex[eqn].slice(lastMatchIndex + lastMatch.length);
                    dispatch(setAlgebraInputTex({ equation: eqn, text: newTex }));
                    dispatch(insertAlgebraInputTex({
                        index: lastMatchIndex, tex: `${lastMatch}^{-1}`,
                        equation: eqn
                    }));
                    dispatch(setCurrentIndex({ index: lastMatchIndex + `${lastMatch}^{-1}`.length, equation: eqn }));
                    dispatch(incrementCursorIndex(3));
                    break;
                }
            }
            if (inputTex[eqn].charAt(index-1) === ")" || inputTex[eqn].charAt(index-1) === "}" ) {
                dispatch(insertAlgebraInputTex({
                    index: index, tex: "^{-1}",
                    equation: eqn
                }));
                dispatch(incrementIndex({ value: 5, equation: eqn }));
                dispatch(incrementCursorIndex(5));
            }
            break;
        case "\\sqrt{~}":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\sqrt{}",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 6, equation: eqn }));
            dispatch(incrementCursorIndex(1));
            break;
        case "\\ln(~)":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\ln()",
                equation: eqn
            }));
            dispatch(incrementIndex({value: 4, equation: eqn} ));
            dispatch(incrementCursorIndex(4));
            break;
        case "\\log{(~)}":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\log()",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 5, equation: eqn }));
            dispatch(incrementCursorIndex(5));
            break;
        case "\\sin(~)":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\sin()",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 5, equation: eqn }));
            dispatch(incrementCursorIndex(5));
            break;
        case "\\cos(~)":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\cos()",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 5, equation: eqn }));
            dispatch(incrementCursorIndex(5));
            break;
        case "\\tan(~)":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\tan()",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 5, equation: eqn }));
            dispatch(incrementCursorIndex(5));
            break; 
        case "\\operatorname{asin}(~)":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\operatorname{asin}()",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 20, equation: eqn }));
            dispatch(incrementCursorIndex(20));
            break;
        case "\\operatorname{acos}(~)":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\operatorname{acos}()",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 20, equation: eqn }));
            dispatch(incrementCursorIndex(20));
            break;
        case "\\operatorname{atan}(~)":
            dispatch(insertAlgebraInputTex({
                index: index, tex: "\\operatorname{atan}()",
                equation: eqn
            }));
            dispatch(incrementIndex({ value: 20, equation: eqn }));
            dispatch(incrementCursorIndex(20));
            break;
        default:
            dispatch(insertAlgebraInputTex({
                index: index, tex: children!.toString(),
                equation: eqn
            }));
            dispatch(incrementIndex({ value: children!.toString().length, equation: eqn }));
            dispatch((children!.toString().length>1)?incrementCursorIndex(3):incrementCursorIndex(1))
    }
}