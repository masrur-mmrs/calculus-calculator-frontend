import React from 'react';
import StepsButton from '@/components/KeyboardComponents/StepsButton';
import { setOod } from '@/redux/slices/oodSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { setWrt } from '@/redux/slices/wrtSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getDerivativeSteps } from '@/app/api/calculate';
import { setStepsResponse } from '@/redux/slices/stepsResponseSlice';

const DerivativeOptions: React.FC = () => {
    const inputTex = useSelector((state: RootState) => state.inputTex.value)
    const wrt = useSelector((state: RootState) => state.wrt.value)
    const ood = useSelector((state: RootState) => state.ood.value)
    const dispatch = useDispatch<AppDispatch>();

    const handleGetDerivativeSteps = async () => {
        const eqn = inputTex
                    .replace("|", "")
                    .replaceAll("π", "\\pi")
                    .replaceAll("θ", "\\theta")
                    .replaceAll("\\operatorname{asin}", "\\arcsin")
                    .replaceAll("\\operatorname{acos}", "\\arccos")
                    .replaceAll("\\operatorname{atan}", "\\arctan");
        const steps = await getDerivativeSteps(eqn, wrt, ood);
        if (steps) {
            dispatch(setStepsResponse(steps));
        }
    }

    return (
        <>
            <div className="flex flex-col border-2 border-white-mode-blue dark:border-muted-teal rounded-xl">
                <label htmlFor="wrt" className="block text-sm text-center font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    WRT
                </label>
                <select
                    id="wrt"
                    value={wrt}
                    onChange={(event) => dispatch(setWrt(event.target.value))}
                    className="h-max w-max sm:p-5 m-auto font-mono text-md italic z-auto"
                >
                    <option value="x" defaultChecked>x</option>
                    <option value="y">y</option>
                    <option value="z">z</option>
                    <option value="\theta">θ</option>
                </select>
            </div>
            <div className="flex flex-col border-2 border-white-mode-blue dark:border-muted-teal rounded-xl">
                <label htmlFor="wrt" className="block text-sm text-center font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    OOD
                </label>
                <select
                    id="ood"
                    value={ood}
                    onChange={(event) => dispatch(setOod(event.target.value))}
                    className="h-max w-max sm:p-5 m-auto font-mono text-md"
                >
                    <option value="1" defaultChecked>1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <StepsButton getSteps={handleGetDerivativeSteps}/>
        </>
    );
};

export default DerivativeOptions;