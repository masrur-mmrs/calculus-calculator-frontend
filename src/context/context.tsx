'use client'
import { createContext, useContext, useState, ReactNode } from "react";

type AnswerToggleContextType = {
    answerToggle: boolean;
    setAnswerToggle: (state: boolean) => void;
}

type StepsModalContextType = {
    open: boolean;
    setOpen: (state: boolean) => void;
}

type AlgebraModeContextType = {
    algebraMode: number;
    setAlgebraMode: (mode: number) => void;
}

type AlgebraEquationContextType = {
    equation: "equation1" | "equation2" | "equation3";
    setEquation: React.Dispatch<React.SetStateAction<"equation1" | "equation2" | "equation3">>;
}

const AnswerToggleContext = createContext<AnswerToggleContextType | undefined>(undefined);
const StepsModalContext = createContext<StepsModalContextType | undefined>(undefined);
const AlgebraModeContext = createContext<AlgebraModeContextType | undefined>(undefined);
const AlgebraEquationContext = createContext<AlgebraEquationContextType | undefined>(undefined);

export const AnswerToggleProvider = ({ children } : { children: ReactNode }) => {
    const [ answerToggle, setAnswerToggle ] = useState<boolean>(false);
    return (
        <AnswerToggleContext.Provider value={{ answerToggle, setAnswerToggle }}>
            {children}
        </AnswerToggleContext.Provider>
    )
}

export const StepsModalProvider = ({ children } : { children: ReactNode }) => {
    const [ open, setOpen ] = useState<boolean>(false);
    return (
        <StepsModalContext.Provider value={{ open, setOpen }}>
            {children}
        </StepsModalContext.Provider>
    )
}

export const AlgebraModeProvider = ({ children } : { children: ReactNode }) => {
    const [ algebraMode, setAlgebraMode ] = useState<number>(1);
    return (
        <AlgebraModeContext.Provider value={{ algebraMode, setAlgebraMode }}>
            {children}
        </AlgebraModeContext.Provider>
    )
}

export const AlgebraEquationProvider = ({ children } : { children: ReactNode }) => {
    const [ equation, setEquation ] = useState<"equation1" | "equation2" | "equation3">("equation1");
    return (
        <AlgebraEquationContext.Provider value={{ equation, setEquation }}>
            {children}
        </AlgebraEquationContext.Provider>
    )
}

export const useAnswerToggleContext = () => {
    const context = useContext(AnswerToggleContext);
    if (!context) {
        throw new Error("useAnswerToggle must be used within a AnswerToggleProvider");
    }
    return context;
}

export const useStepsModalContext = () => {
    const context = useContext(StepsModalContext);
    if (!context) {
        throw new Error("useStepsModal must be used within a StepsModalProvider");
    }
    return context;
}

export const useAlgebraModeContext = () => {
    const context = useContext(AlgebraModeContext);
    if (!context) {
        throw new Error("useAlgebraMode must be used within a AlgebraModeProvider");
    }
    return context;
}

export const useAlgebraEquationContext = () => {
    const context = useContext(AlgebraEquationContext);
    if (!context) {
        throw new Error("useAlgebraEquation must be used within a AlgebraEquationProvider");
    }
    return context;
}