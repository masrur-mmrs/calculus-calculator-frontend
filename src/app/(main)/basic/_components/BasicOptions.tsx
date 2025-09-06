import React from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { setSd } from '@/redux/slices/sdSlice';
import { useDispatch, useSelector } from 'react-redux';

const BasicOptions: React.FC = () => {
    const sd = useSelector((state: RootState) => state.sd.value)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <div className="flex flex-col border-2 h-full border-white-mode-blue dark:border-muted-teal rounded-xl">
                <label htmlFor="sd" className="block text-sm text-center font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                    S⇔D
                </label>
                <select
                    id="sd"
                    value={sd}
                    onChange={(event) => dispatch(setSd(event.target.value))}
                    className="h-max w-max sm:p-5 m-auto font-mono text-md"
                >
                    <option value="frac" defaultChecked>Frac</option>
                    <option value="deci">Deci</option>
                </select>
            </div>
            <div className="col-span-1"/>
            <div className="col-span-1"/>
        </>
    );
};

export default BasicOptions;