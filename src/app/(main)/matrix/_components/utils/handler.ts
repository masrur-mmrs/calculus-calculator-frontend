import { incrementCursorIndex } from "@/redux/slices/cursorSlice";
import { incrementIndex } from "@/redux/slices/indexSlice";
import { insertTex } from "@/redux/slices/inputTexSlice";
import { AppDispatch } from "@/redux/store";

export const handleOnKeyClick = ( 
    inputTex: string,
    index: number,
    dispatch: AppDispatch,
    children: React.ReactNode,
    fetchResult?: () => void
) => {
    console.log(inputTex);
    switch (children!.toString()) {
        case "=":
            if (fetchResult) fetchResult();
            break;
        case "\\begin{pmatrix}☐&☐\\\\☐&☐\\end{pmatrix}":
            dispatch(insertTex({index: index, tex: "\\begin{pmatrix}&☐\\\\☐&☐\\end{pmatrix}"}));
            dispatch(incrementIndex(15));
            dispatch(incrementCursorIndex(4));
            break;
        default:
            dispatch(insertTex({index: index, tex: children!.toString()}));
            dispatch(incrementIndex(children!.toString().length));
            dispatch((children!.toString().length>1)?incrementCursorIndex(3):incrementCursorIndex(1))
            break;
    }
}