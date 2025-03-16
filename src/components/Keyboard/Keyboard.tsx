import React from 'react';
import KeyboardButton from './KeyboardButton';
import ArrowKeys from './NavigationKeys';

const Keyboard: React.FC = ({}) => {
    return (
        <>
            <ArrowKeys/>
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
            <KeyboardButton specieal>x</KeyboardButton>
            <KeyboardButton specieal>y</KeyboardButton>
            <KeyboardButton specieal>e</KeyboardButton>
            <KeyboardButton>0</KeyboardButton>
            <KeyboardButton specieal>π</KeyboardButton>
            <KeyboardButton specieal>z</KeyboardButton>
            <KeyboardButton specieal>θ</KeyboardButton>
            <KeyboardButton specieal>{"e^{x}"}</KeyboardButton>
            <KeyboardButton specieal>{"x^{2}"}</KeyboardButton>
            <KeyboardButton specieal>{"\\boxed{~}^{\\boxed{}}"}</KeyboardButton>
            <KeyboardButton specieal>{"\\boxed{~}^{-1}"}</KeyboardButton>
            <KeyboardButton specieal>{"\\sqrt{~}"}</KeyboardButton>
            <KeyboardButton specieal>{"\\ln(~\\boxed{~}~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\log{(~\\boxed{~}~})"}</KeyboardButton>
            <KeyboardButton specieal>{"\\sin(~\\boxed{~}~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\cos(~\\boxed{~}~)"}</KeyboardButton>
            <KeyboardButton specieal>{"\\tan(~\\boxed{~}~)"}</KeyboardButton>
            </div>
        </>
    );
};


export default Keyboard;