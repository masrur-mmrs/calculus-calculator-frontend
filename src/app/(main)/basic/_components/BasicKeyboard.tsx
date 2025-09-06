import React from 'react';
import BasicOptions from './BasicOptions';
import KeyboardButton from '@/components/KeyboardComponents/KeyboardButton';
import { useAnswerToggleContext } from '@/context/context';
import { basicEvaluate } from '@/app/api/calculate';
import { setResultTex } from '@/redux/slices/resultTexSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '@/redux/slices/errorMessageSlice';
import katex from 'katex';
import OptionKeys from '@/components/KeyboardComponents/OptionKeys';

const BasicKeyboard: React.FC = ({}) => {
    const { setAnswerToggle } = useAnswerToggleContext();
    const dispatch = useDispatch<AppDispatch>();
    const inputTex = useSelector((state: RootState) => state.inputTex.value);
    const sd = useSelector((state: RootState) => state.sd.value);

    const fetchResult = async () => {
        try {
            katex.renderToString(inputTex)
        } catch (error) {
            dispatch(setErrorMessage("Invalid expression"))
            console.error(error)
            return;
        }
        setAnswerToggle(true);
        const eqn = inputTex
                    .replace("|", "")
                    .replaceAll("π", "\\pi")
                    .replaceAll("θ", "\\theta")
                    .replaceAll("\\operatorname{asin}", "\\arcsin")
                    .replaceAll("\\operatorname{acos}", "\\arccos")
                    .replaceAll("\\operatorname{atan}", "\\arctan");
        console.log(eqn)
        const basic = await basicEvaluate(eqn);
        console.log(basic);
        let result : string;
        if (sd === "frac") {
            result =  basic.result.exact;
        } else {
            if (typeof(basic.result.decimal) === "object") {
                result = basic.result.decimal.string;
            } else {
                result = basic.result.decimal;
            }
        }
        dispatch(setResultTex(result));
    };

    return (
        <>
            <OptionKeys><BasicOptions/></OptionKeys>
            <div className="grid grid-cols-5 gap-2 mt-1.5">
            <KeyboardButton>1</KeyboardButton>
            <KeyboardButton>2</KeyboardButton>
            <KeyboardButton>3</KeyboardButton>
            <KeyboardButton>~\times~</KeyboardButton>
            <KeyboardButton>\div</KeyboardButton>
            <KeyboardButton>4</KeyboardButton>
            <KeyboardButton>5</KeyboardButton>
            <KeyboardButton>6</KeyboardButton>
            <KeyboardButton>+</KeyboardButton>
            <KeyboardButton>-</KeyboardButton>
            <KeyboardButton>7</KeyboardButton>
            <KeyboardButton>8</KeyboardButton>
            <KeyboardButton>9</KeyboardButton>
            <KeyboardButton >{"\\%"}</KeyboardButton>
            <KeyboardButton >.</KeyboardButton>
            <KeyboardButton specieal>e</KeyboardButton>
            <KeyboardButton>0</KeyboardButton>
            <KeyboardButton specieal>π</KeyboardButton>
            <KeyboardButton specieal>{"\\sqrt{~}"}</KeyboardButton>
            <KeyboardButton specieal>{"[~]^\\circ"}</KeyboardButton>
            <KeyboardButton specieal>{"\\frac{[~]}{[~]}"}</KeyboardButton>
            <KeyboardButton specieal>{"[~]^{2}"}</KeyboardButton>
            <KeyboardButton specieal>{"[~]^{-1}"}</KeyboardButton>
            <KeyboardButton specieal>{"[~]^{[~]}"}</KeyboardButton>
            <KeyboardButton specieal>{"\\ln(~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\sin(~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\cos(~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\tan(~)"}</KeyboardButton>
            <KeyboardButton specieal>{"("}</KeyboardButton>
            <KeyboardButton specieal>{"\\operatorname{asin}(~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\log{(~)}"}</KeyboardButton>
            <KeyboardButton specieal>{"\\operatorname{acos}(~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\operatorname{atan}(~)"}</KeyboardButton>
            <KeyboardButton specieal>{")"}</KeyboardButton>
            <KeyboardButton specieal fetchResult={fetchResult}>=</KeyboardButton>
            </div>
        </>
    );
};


export default BasicKeyboard;