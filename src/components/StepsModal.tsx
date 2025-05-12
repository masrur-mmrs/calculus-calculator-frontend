import React from 'react';
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

interface StepsModalProps {
    open: boolean;
    stepsLength: number;
    Simplified: React.ReactNode;
    Steps: React.ReactNode;
    Result: React.ReactNode;
    setOpen: (state: boolean) => void;
}


const StepsModal: React.FC<StepsModalProps> = ({open, stepsLength, setOpen, Simplified, Steps, Result}) => {

    const onClose = () => {
        setOpen(false);
    };

    return (
        <AnimatePresence initial={false}>
        {open
        &&
        <div
        key={stepsLength}
        className="fixed w-full h-full flex items-center justify-center z-50 backdrop-blur-sm backdrop-brightness-50">
            <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative z-50"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
                <h1 className="text-xl font-bold mb-4 pb-4 border-b-2 border-muted-teal">Steps</h1>
                <div className="max-h-[50vh] sm:max-h-[60vh] max-w-[90vw] overflow-y-auto flex flex-col items-center text-center text-md font-sans">
                    <motion.div 
                        className="inline-flex"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    >
                        {Simplified}
                    </motion.div>
                    {Steps}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.2 * stepsLength }}
                    >
                        {Result}
                    </motion.div>
                </div>
                <div className="border-t-2 border-muted-teal mt-4">
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white float-end rounded active:scale-95 transform ease-in-out duration-150" onClick={onClose}>Close</button>
                </div>
            </motion.div>
        </div>
        }
        </AnimatePresence>
    );
};


export default StepsModal;