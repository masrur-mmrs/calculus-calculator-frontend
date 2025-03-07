import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import React from 'react';
import Latex from 'react-latex';

interface DisplayProps {
    displayTex: string;
    operation: string;
    wrt: string;
    resultTex: string;
    answerToggle: boolean;
}

const displayHeader: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    overflow: 'hidden',
    position: 'absolute',
    translate: '0rem -2.5rem'
};

const Display: React.FC<DisplayProps> = ({displayTex, operation, wrt, resultTex, answerToggle}) => {
    let previewPrefix: string = "";
    let answerSuffix: string = ""

    switch (operation) {
        case "derivative":
            previewPrefix = `\\frac{d}{d${wrt}}`;
            answerSuffix = `dx`;
            break;
        case "integral":
            previewPrefix = "\\int";
            answerSuffix = ` + c`;
            break;
        default:
            previewPrefix = "";
            answerSuffix = "";
    }

    return (
    <div className="mt-1 pt-8 bg-[#00c4eb] text-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4">
        <AnimatePresence initial={true}>
            {!answerToggle &&
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    style={displayHeader}
                >
                    <h3> Preview </h3>
                </motion.div>}
        </AnimatePresence>
        <AnimatePresence initial={false}>
            {answerToggle &&
                <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: -5 }}
                style={displayHeader}
                >
                    <h3>Answer</h3>
                </motion.div>}
        </AnimatePresence>
        <div className="overflow-x-hidden py-3 px-2 bg-[#3288d9] dark:bg-gray-900 rounded-md text-2xl min-w-[100%] sm:min-w-md tracking-wide">
            <div className="inline-flex items-center">
                <span className="text-3xl mr-1">
                    <Latex>{`$${previewPrefix}$`}</Latex>
                </span>
                <p className="text-3xl">&#40;</p>
                    <Latex>{`$${displayTex}$`}</Latex>
                <p className="text-3xl">&#41;</p>
                {operation==="integral" &&
                <span className="text-3xl mr-1">
                    <Latex>{`$d${wrt}$`}</Latex>
                </span>}
            </div>
            <AnimatePresence initial={false}>
                {resultTex !== "" &&
                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="w-full mt-2">
                        <Latex>{`$=${resultTex}$`}</Latex>
                        <Latex>{`$${answerSuffix}$`}</Latex>
                    </motion.div>}
            </AnimatePresence>
        </div>
      </div>
    </div>
    );
};


export default Display;