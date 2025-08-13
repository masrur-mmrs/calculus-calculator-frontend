import { incrementCursorIndex } from "@/redux/slices/cursorSlice";
import { incrementIndex, setCurrentIndex } from "@/redux/slices/indexSlice";
import { insertTex, setInputTex } from "@/redux/slices/inputTexSlice";
import { AppDispatch } from "@/redux/store";

export const handleOnKeyClick = ( 
    inputTex: string,
    index: number,
    dispatch: AppDispatch,
    children: React.ReactNode,
    fetchResult?: () => void
) => {
    // console.log(inputTex);
    switch (children!.toString()) {
        case "=":
            if (fetchResult) fetchResult();
            break;
        case "\\begin{pmatrix}☐&☐\\\\☐&☐\\end{pmatrix}":
            dispatch(insertTex({index: index, tex: "\\begin{pmatrix}&☐\\\\☐&☐\\end{pmatrix}"}));
            dispatch(incrementIndex(15));
            dispatch(incrementCursorIndex(4));
            break;
        case "\\begin{pmatrix}☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}":
            dispatch(insertTex({index: index, tex: "\\begin{pmatrix}&☐&☐\\\\☐&☐&☐\\end{pmatrix}"}))
            dispatch(incrementIndex(15));
            dispatch(incrementCursorIndex(4));
            break;
        case "\\begin{pmatrix}☐&☐\\\\☐&☐\\\\☐&☐\\end{pmatrix}":
            dispatch(insertTex({index: index, tex: "\\begin{pmatrix}&☐\\\\☐&☐\\\\☐&☐\\end{pmatrix}"}))
            dispatch(incrementIndex(15));
            dispatch(incrementCursorIndex(4));
            break;
        case "\\begin{pmatrix}☐&☐&☐&☐\\\\☐&☐&☐&☐\\end{pmatrix}":
            dispatch(insertTex({index: index, tex: "\\begin{pmatrix}&☐&☐&☐\\\\☐&☐&☐&☐\\end{pmatrix}"}))
            dispatch(incrementIndex(15));
            dispatch(incrementCursorIndex(4));
            break;
        case "\\begin{pmatrix}☐&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}":
            dispatch(insertTex({index: index, tex: "\\begin{pmatrix}&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}"}))
            dispatch(incrementIndex(15));
            dispatch(incrementCursorIndex(4));
            break;
        case "\\begin{pmatrix}☐&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}":
            dispatch(insertTex({index: index, tex: "\\begin{pmatrix}&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}"}))
            dispatch(incrementIndex(15));
            dispatch(incrementCursorIndex(4));
            break;
        case "[~]^{T}":
            const squaredRegex = /[0-9exyzθπ]+/g;
            const squaredMatches = inputTex.slice(0, index).match(squaredRegex);
            if (squaredMatches) {
                const lastMatch = squaredMatches[squaredMatches.length - 1];
                const lastMatchIndex = inputTex.lastIndexOf(lastMatch);
                if (lastMatchIndex + lastMatch.length === index) {
                    const newTex = inputTex.slice(0, lastMatchIndex) + inputTex.slice(lastMatchIndex + lastMatch.length);
                    dispatch(setInputTex(newTex));
                    dispatch(insertTex({index: lastMatchIndex, tex: `${lastMatch}^{T}`}));
                    dispatch(setCurrentIndex(lastMatchIndex + `${lastMatch}^{T}`.length + 1));
                    dispatch(incrementCursorIndex(3));
                    break;
                }
            }
            if (inputTex.charAt(index-1) === ")" || inputTex.charAt(index-1) === "}" ) {
                dispatch(insertTex({index: index, tex: "^{T}"}));
                dispatch(incrementIndex(4));
                dispatch(incrementCursorIndex(3));
            }
            break;
        default:
            dispatch(insertTex({index: index, tex: children!.toString()}));
            dispatch(incrementIndex(children!.toString().length));
            dispatch((children!.toString().length>1)?incrementCursorIndex(3):incrementCursorIndex(1))
            break;
    }
}