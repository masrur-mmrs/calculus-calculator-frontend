import React from 'react';
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Latex from 'react-latex';
import Loader from "@/components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAlgebraEquationContext, useAnswerToggleContext } from '@/context/context';
import { cn } from '@/app/utils/helpers';

const displayHeader: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    overflow: 'hidden',
    position: 'absolute',
    translate: '0rem -2.5rem'
};

interface AlgebraDisplayProps {
    algebraMode: number;
}

const AlgebraDisplay: React.FC<AlgebraDisplayProps> = ({ algebraMode }) => {
    const { answerToggle } = useAnswerToggleContext();
    const { equation, setEquation } = useAlgebraEquationContext();
    const displayTex = useSelector((state: RootState) => state.algebraInputTex.value);
    const resultTex = useSelector((state: RootState) => state.algebraResultTexSlice.value);

    const Display = () => {
        if (algebraMode === 1) {
            return (<Latex displayMode>{`$${displayTex["equation1"]}$`}</Latex>)
        } else if (algebraMode === 2) {
            return (
                <div className="flex flex-col">
                    <div className={cn(
                        "inline-flex active:scale-95 transition-transform transform-gpu duration-150 ease-in-out",
                        equation === "equation1" ? "border border-white rounded-md p-1.5" : ""
                    )}
                        onClick={() => setEquation("equation1")}
                    >
                        <Latex>{"$Eqn~1:~$"}</Latex><Latex>{`$${displayTex["equation1"]}$`}</Latex>
                    </div>
                    <div className={cn(
                        "inline-flex active:scale-95 transition-transform transform-gpu duration-150 ease-in-out",
                        equation === "equation2" ? "border border-white rounded-md p-1.5" : ""
                    )}
                        onClick={() => setEquation("equation2")}
                    >
                        <Latex>{"$Eqn~2:~$"}</Latex><Latex>{`$${displayTex["equation2"]}$`}</Latex>
                    </div>
                </div>
            );
        } else if (algebraMode === 3) {
            return (
                <div className="flex flex-col">
                    <div className={cn(
                        "inline-flex active:scale-95 transition-transform transform-gpu duration-150 ease-in-out",
                        equation === "equation1" ? "border border-white rounded-md p-1.5" : ""
                    )}
                        onClick={() => setEquation("equation1")}
                    >
                        <Latex>{"$Eqn~1:~$"}</Latex><Latex>{`$${displayTex["equation1"]}$`}</Latex>
                    </div>
                    <div className={cn(
                        "inline-flex active:scale-95 transition-transform transform-gpu duration-150 ease-in-out",
                        equation === "equation2" ? "border border-white rounded-md p-1.5" : ""
                    )}
                        onClick={() => setEquation("equation2")}
                    >
                        <Latex>{"$Eqn~2:~$"}</Latex><Latex>{`$${displayTex["equation2"]}$`}</Latex>
                    </div>
                    <div className={cn(
                        "inline-flex active:scale-95 transition-transform transform-gpu duration-150 ease-in-out",
                        equation === "equation3" ? "border border-white rounded-md p-1.5" : ""
                    )}
                        onClick={() => setEquation("equation3")}
                    >
                        <Latex>{"$Eqn~3:~$"}</Latex><Latex>{`$${displayTex["equation3"]}$`}</Latex>
                    </div>
                </div>
            );
        }
    }

    const Result = () => {
        //Remember to implement other cases
        if (resultTex.variables.length === 1 && resultTex.solutions.length === 1) {
            return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-full mt-2">
                <Latex>{`$Solution:~${resultTex.variables[0]}=${resultTex.solutions[0]}$`}</Latex>
            </motion.div>
            )
        } else if (resultTex.variables.length === 2 && resultTex.solutions.length === 1) {
            return (
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-full mt-2">
                <Latex>{`$Solution:~${resultTex.variables[0]}=${resultTex.solutions[0]["x"]},~${resultTex.variables[1]}=${resultTex.solutions[0]["y"]}$`}</Latex>
            </motion.div>
            )
        }
        else if (resultTex.variables.length === 3 && resultTex.solutions.length === 1) {
            return (
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-full mt-2">
                <Latex>{`$Solution:~${resultTex.variables[0]}=${resultTex.solutions[0]["x"]},~${resultTex.variables[1]}=${resultTex.solutions[0]["y"]},~${resultTex.variables[2]}=${resultTex.solutions[0]["z"]}$`}</Latex>
            </motion.div>
            )
        } else if (resultTex.variables.length === 1 && resultTex.solutions.length === 2) {
            return (
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-full mt-2">
                <Latex>{`$Solution:~${resultTex.variables[0]}=${resultTex.solutions[0]}~~or~~${resultTex.variables[0]}=${resultTex.solutions[1]}$`}</Latex>
            </motion.div>
            )
        }
    }

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
                <Display/>
            </div>
            {answerToggle && resultTex.variables.length === 0 && <Loader/>}
            <AnimatePresence initial={false}>
                {resultTex.variables.length > 0 && <Result/>}
            </AnimatePresence>
        </div>
      </div>
    </div>
    );
};


export default AlgebraDisplay;