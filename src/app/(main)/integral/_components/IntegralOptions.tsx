import React from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { setWrt } from '@/redux/slices/wrtSlice';
import { useDispatch, useSelector } from 'react-redux';

const IntegralOptions: React.FC = () => {
    const wrt = useSelector((state: RootState) => state.wrt.value)
    const dispatch = useDispatch<AppDispatch>();

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
                    className="h-max w-max p-5 m-auto font-mono text-md italic"
                >
                    <option value="x" defaultChecked>x</option>
                    <option value="y">y</option>
                    <option value="z">z</option>
                    <option value="\theta">θ</option>
                </select>
            </div>
            <div className="col-span-1"/>
            <div className="col-span-1"/>
        </>
            
    );
};

export default IntegralOptions;