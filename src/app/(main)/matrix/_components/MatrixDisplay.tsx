import React from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Latex from "react-latex";
import Loader from "@/components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAnswerToggleContext } from '@/context/context';

const displayHeader: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    overflow: 'hidden',
    position: 'absolute',
    translate: '0rem -2.5rem'
};

const MatrixDisplay: React.FC = () => {
    const { answerToggle } = useAnswerToggleContext();
    const displayTex = useSelector((state: RootState) => state.inputTex.value);
    const resultTex = useSelector((state: RootState) => state.resultTex.value);

    return (
    <div className="pt-8 bg-[#00c4eb] text-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700">
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
        <div className="max-w-[50vw] sm:max-w-[35vw] overflow-x-auto py-3 px-2 bg-[#3288d9] dark:bg-gray-900 rounded-md text-2xl min-w-[100%] sm:min-w-md tracking-wide">
            <div className="inline-flex items-center gap-0.5">
                <Latex displayMode>{`$${displayTex}$`}</Latex>
            </div>
            {answerToggle && resultTex === "" && <Loader/>}
            <AnimatePresence initial={false}>
                {resultTex !== "" &&
                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="w-full mt-2">
                        <Latex>{`$=${resultTex}$`}</Latex>
                    </motion.div>}
            </AnimatePresence>
        </div>
      </div>
        <p>{displayTex}</p>
    </div>
    );
};


export default MatrixDisplay;