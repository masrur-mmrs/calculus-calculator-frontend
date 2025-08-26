import React from 'react';
import { setColumn } from '@/redux/slices/columnSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const SelectColumn: React.FC = ({}) => {
    const dispatch = useDispatch<AppDispatch>();
    const column = useSelector((state: RootState) => state.column.value);
    return (
        <div className="flex flex-col border-2 border-white-mode-blue dark:border-muted-teal rounded-xl">
            <label htmlFor="wrt" className="block text-sm text-center font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal">
                Column
            </label>
            <select
                id="wrt"
                value={column}
                onChange={(event) => dispatch(setColumn(parseInt(event.target.value)))}
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


export default SelectColumn;