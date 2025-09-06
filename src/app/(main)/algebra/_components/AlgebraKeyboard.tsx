import React from 'react';
import AlgebraOptions from './AlgebraOptions';
import AlgebraKeyboardButton from '../_components/AlgebraKeyboardButton';
import AlgebraOptionKeys from './AlgebraOptionKeys';
import SolveButton from '@/components/KeyboardComponents/SolveButton';
import { useAlgebraEquationContext, useAnswerToggleContext } from '@/context/context';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '@/redux/slices/errorMessageSlice';
// import { incrementCursorIndex } from '@/redux/slices/cursorSlice';
// import { incrementIndex } from '@/redux/slices/indexSlice';
import katex from 'katex';
import { calculateAlgebra } from '@/app/api/calculate';
import { setAlgebraResultTex } from '@/redux/slices/algebraResultTexSlice';
// import { insertAlgebraInputTex } from '@/redux/slices/algebraSlice';

interface AlgebraKeyboardProps {
    algebraMode: number;
    setAlgebraMode?: (mode: number) => void;
}

const AlgebraKeyboard: React.FC<AlgebraKeyboardProps> = ({ algebraMode, setAlgebraMode }) => {
    const { setAnswerToggle } = useAnswerToggleContext();
    const { equation } = useAlgebraEquationContext();
    const dispatch = useDispatch<AppDispatch>();
    const inputTex = useSelector((state: RootState) => state.algebraInputTex.value);
    // const index = useSelector((state: RootState) => state.algebraIndexSlice[`${equation}Index`]);

    const fetchResult = async () => {
        const parsedEquations: Record<"equation1" | "equation2" | "equation3", string> = {
            equation1: "",
            equation2: "",
            equation3: ""
        };

        const keys = ["equation1", "equation2", "equation3"] as const;

        try {
            for (const key of keys) {
                katex.renderToString(inputTex[key])
            }
        } catch (error) {
            dispatch(setErrorMessage("Invalid expression"))
            console.error(error)
            return;
        }
        
        setAnswerToggle(true);
        
        for (const key of keys) {
            parsedEquations[key] = inputTex[key]
                .replace("|", "")
                .replaceAll("π", "\\pi")
                .replaceAll("θ", "\\theta")
                .replaceAll("\\operatorname{asin}", "\\arcsin")
                .replaceAll("\\operatorname{acos}", "\\arccos")
                .replaceAll("\\operatorname{atan}", "\\arctan");
        }
        
        // console.log(parsedEquations)
        const response = await calculateAlgebra(parsedEquations["equation1"], parsedEquations["equation2"], parsedEquations["equation3"]);
        if (response.error) {
            dispatch(setErrorMessage(response.error));
            console.error(response.error);
            return;
        }
        // console.log(response);
        // console.log({solutions: response.result.solutions, variables: response.result.variables});
        dispatch(setAlgebraResultTex({solutions: response.result.solutions, variables: response.result.variables}));
    };

    // const insertEquals = () => {
    //     dispatch(insertAlgebraInputTex({
    //         index: index, tex: "=",
    //         equation: equation
    //     }));
    //     dispatch(incrementIndex(1));
    //     dispatch(incrementCursorIndex(1));
    // }

    return (
        <>
            <AlgebraOptionKeys>
                <AlgebraOptions algebraMode={algebraMode} setAlgebraMode={setAlgebraMode}/>
                <SolveButton inputTex={inputTex[equation]} handleClick={fetchResult}/>
            </AlgebraOptionKeys>
            <div className="grid grid-cols-5 gap-2 mt-1.5">
            <AlgebraKeyboardButton>1</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>2</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>3</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>~\times~</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>\div</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>4</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>5</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>6</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>+</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>-</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>7</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>8</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>9</AlgebraKeyboardButton>
            <AlgebraKeyboardButton disabled={algebraMode < 1} specieal>x</AlgebraKeyboardButton>
            <AlgebraKeyboardButton disabled={algebraMode < 2} specieal>y</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>e</AlgebraKeyboardButton>
            <AlgebraKeyboardButton>0</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>π</AlgebraKeyboardButton>
            <AlgebraKeyboardButton disabled={algebraMode < 3} specieal>z</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"[~]^{2}"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"e^{x}"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"[~]^{[~]}"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"[~]^{-1}"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\sqrt{~}"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\ln(~)"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\sin(~)"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\cos(~)"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\tan(~)"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"("}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\log{(~)}"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\operatorname{asin}(~)"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\operatorname{acos}(~)"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{"\\operatorname{atan}(~)"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>{")"}</AlgebraKeyboardButton>
            <AlgebraKeyboardButton specieal>=</AlgebraKeyboardButton>
            </div>
        </>
    );
};


export default AlgebraKeyboard;