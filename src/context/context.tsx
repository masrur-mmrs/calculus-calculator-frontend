'use client'
import { createContext, useContext, useState, ReactNode } from "react";

type AnswerToggleContextType = {
    answerToggle: boolean;
    setAnswerToggle: (state: boolean) => void;
}

const AnswerToggleContext = createContext<AnswerToggleContextType | undefined>(undefined);

export const AnswerToggleProvider = ({ children } : { children: ReactNode }) => {
    const [ answerToggle, setAnswerToggle ] = useState<boolean>(false);
    return (
        <AnswerToggleContext.Provider value={{ answerToggle, setAnswerToggle }}>
            {children}
        </AnswerToggleContext.Provider>
    )
}

export const useAnswerToggleContext = () => {
    const context = useContext(AnswerToggleContext);
    if (!context) {
        throw new Error("useAnswerToggle must be used within a AnswerToggleProvider");
    }
    return context;
}

