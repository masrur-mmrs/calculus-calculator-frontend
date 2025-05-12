import React from 'react';
import Latex from 'react-latex';
import { motion } from 'motion/react';


interface ProcessStepsProps {
    steps: Steps[];
}


const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps }) => {
    return (
    <>
        {steps.map((step, index) => (
            <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.2*index }}
            >
                <Latex>
                {`${step.text}`} 
                </Latex>
                <Latex >
                {`$${step.math}$`}
                </Latex>
            </motion.div>
        ))}
    </>
    );
};


export default ProcessSteps;