import React from 'react';
import MatrixKeyboardButton from './MatrixKeyboardButton';
import OptionKeys from '@/components/KeyboardComponents/OptionKeys';

const MatrixKeyboard: React.FC = ({}) => {
    return (
        <>
        <OptionKeys><div></div><div></div><div></div></OptionKeys>
        <div className="grid grid-cols-5 gap-2 mt-1.5">
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐\\\\☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐&☐\\\\☐&☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
            <MatrixKeyboardButton specieal>{"\\begin{pmatrix}☐&☐\\\\☐&☐\\\\☐&☐\\end{pmatrix}"}</MatrixKeyboardButton>
        </div>
        </>
    );
};


export default MatrixKeyboard;