import React from 'react';
import { setRow } from '@/redux/slices/rowSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const SelectRow: React.FC = ({}) => {
    const dispatch = useDispatch<AppDispatch>();
    const row = useSelector((state: RootState) => state.row.value);
    return (
        <div className="flex flex-col border-2 border-white-mode-blue dark:border-muted-teal rounded-xl">
            <label htmlFor="wrt" className="block text-sm text-center font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                Row
            </label>
            <select
                id="wrt"
                value={row}
                onChange={(event) => dispatch(setRow(parseInt(event.target.value)))}
                className="h-max w-max sm:p-5 m-auto font-mono text-md z-auto"
            >
                <option value={0} defaultChecked>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
    );
};


export default SelectRow;