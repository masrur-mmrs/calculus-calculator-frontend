import React from 'react';
import katex from 'katex';
import { useDispatch, useSelector } from 'react-redux';
import MatrixKeyboardButton from './MatrixKeyboardButton';
import { calculateMatrix } from '@/app/api/calculate';
import OptionKeys from '@/components/KeyboardComponents/OptionKeys';
import { setErrorMessage } from '@/redux/slices/errorMessageSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { setResultTex } from '@/redux/slices/resultTexSlice';

interface MatrixKeyboardprops {
    inputTex: string;
}

const MatrixKeyboard: React.FC<MatrixKeyboardprops> = ({ inputTex }) => {
    const dispatch = useDispatch<AppDispatch>();
    const resultTex = useSelector((state: RootState) => state.resultTex.value);
    const fetchResult = async () => {
        try {
            katex.renderToString(inputTex);
        } catch (error) {
            dispatch(setErrorMessage("Invalid expression"))
            console.error(error)
            return;
        }

        const parseMatrixStart = inputTex.replaceAll("\\begin{pmatrix}", "Matrix([[");
        const parseMatrixNextRow = parseMatrixStart.replaceAll("\\\\", "],[");
        const parseElement = parseMatrixNextRow.replaceAll("&", ",");
        const parseMatrixEnd = parseElement.replaceAll("\\end{pmatrix}", "]])");

        const replaceTimes = parseMatrixEnd.replaceAll("~\\times~", "*");
        const replaceDivision = replaceTimes.replaceAll("\\div", "\\");

        const parseDeterminant = replaceDivision.replaceAll(/\\operatorname\{det\}Matrix\(([\s\S]*?)\)/g, "Matrix($1).det()");
        const parseTranspose = parseDeterminant.replaceAll("^{T}", ".T");

        const cleanedInput = parseTranspose.replace("|", "");

        const matrixRes = await calculateMatrix(cleanedInput);
        dispatch(setResultTex(matrixRes.result));
        console.log(resultTex);
    }

    return (
        <>
        <OptionKeys navKeyStyle={"sm:px-13"}><div></div><div></div><div></div></OptionKeys>
        <div className="grid grid-cols-5 gap-2 mt-1.5">
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐\\\\☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐\\\\☐&☐\\\\☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}0&0&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐&☐&☐\\\\☐&☐&☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton>1</MatrixKeyboardButton>
            <MatrixKeyboardButton>2</MatrixKeyboardButton>
            <MatrixKeyboardButton>3</MatrixKeyboardButton>
            <MatrixKeyboardButton>+</MatrixKeyboardButton>
            <MatrixKeyboardButton>-</MatrixKeyboardButton>
            <MatrixKeyboardButton>4</MatrixKeyboardButton>
            <MatrixKeyboardButton>5</MatrixKeyboardButton>
            <MatrixKeyboardButton>6</MatrixKeyboardButton>
            <MatrixKeyboardButton>{"~\\times~"}</MatrixKeyboardButton>
            <MatrixKeyboardButton>{"\\div"}</MatrixKeyboardButton>
            <MatrixKeyboardButton>7</MatrixKeyboardButton>
            <MatrixKeyboardButton>8</MatrixKeyboardButton>
            <MatrixKeyboardButton>9</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"("}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{")"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>e</MatrixKeyboardButton>
            <MatrixKeyboardButton>0</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>π</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\operatorname{det}"}</MatrixKeyboardButton>
            {/* <MatrixKeyboardButton specieal>{"[~]^{T}"}</MatrixKeyboardButton> */}
            <MatrixKeyboardButton specieal fetchResult={fetchResult}>{"="}</MatrixKeyboardButton>
        </div>
        </>
    );
};


export default MatrixKeyboard;