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

const AnswerToggleContext = createContext<AnswerToggleContextType | undefined>(undefined);
const StepsModalContext = createContext<StepsModalContextType | undefined>(undefined);

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