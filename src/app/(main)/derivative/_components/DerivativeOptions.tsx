import { setOod } from '@/redux/slices/oodSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { setWrt } from '@/redux/slices/wrtSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DerivativeOptions: React.FC = () => {
    const wrt = useSelector((state: RootState) => state.wrt.value)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="flex flex-row w-min m-1 justify-center mt-5 mx-2">
            <div className="flex flex-col ml-2 border-2 border-white-mode-blue dark:border-muted-teal rounded-xl mr-2">
                <label htmlFor="wrt" className="block text-sm font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    WRT
                </label>
                <select
                    id="wrt"
                    value={wrt}
                    onChange={(event) => dispatch(setWrt(event.target.value))}
                    className="h-min w-min p-1.5 ml-0.5 font-mono text-md italic"
                >
                    <option value="x" defaultChecked>x</option>
                    <option value="y">y</option>
                    <option value="z">z</option>
                    <option value="\theta">θ</option>
                </select>
            </div>
            <div className="flex flex-col ml-2 border-2 border-white-mode-blue dark:border-muted-teal rounded-xl mr-2">
                <label htmlFor="wrt" className="block text-sm font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    OOD
                </label>
                <select
                    id="ood"
                    onChange={(event) => dispatch(setOod(event.target.value))}
                    className="h-min w-min p-1.5 ml-0.5 font-mono text-md"
                >
                    <option value="1" defaultChecked>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    );
};

export default DerivativeOptions;