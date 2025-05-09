import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const findMatchingCurlyBrace = (inputString: string, index: number) => {
    let braceCount = 1;
    index--;
    while (braceCount > 0) {
        if (inputString.charAt(index) === "{") {
            braceCount--;
            index--;
        } else if (inputString.charAt(index) === "}") {
            braceCount++;
            index--;
        } else {
            index--;
        }
    }
    return index;
}

export const findMatchingParenthesis = (inputString: string, index: number) => {
    let braceCount = 1;
    index--;
    while (braceCount > 0 && index >= 0 && index < inputString.length) {
        if (inputString.charAt(index) === "(") {
            braceCount--;
            index--;
        } else if (inputString.charAt(index) === ")") {
            braceCount++;
            index--;
        } else {
            index--;
        }
    }
    return index;
}