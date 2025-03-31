'use client'
import React, {useState, ChangeEvent} from 'react';
import { AppDispatch } from '@/redux/store';
import { setUpperBound, setLowerBound } from '@/redux/slices/boundSlice';
import { useDispatch } from 'react-redux';

interface BoundSelectorPropsType {
    bound: string;
}

const BoundSelector: React.FC<BoundSelectorPropsType> = ({bound}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [show, setShow] = useState(false);

    const handleSelectionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === "num") {
            setShow(true)
        }
        else {
            setShow(false)
            if (bound === "upper") {
                dispatch(setUpperBound(event.target.value))
            } else {
                dispatch(setLowerBound(event.target.value))
            }
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (bound === "upper") {
            dispatch(setUpperBound(event.target.value))
        } else {
            dispatch(setLowerBound(event.target.value))
        }
    }

    return (
        <div className="flex flex-col ml-2 border-2 border-white-mode-blue dark:border-muted-teal rounded-xl mr-2">
            <label htmlFor={bound} className="block text-sm font-bold m-1.5 border-b-2 border-white-mode-blue dark:border-muted-teal text-center">
                {(bound === "upper")?"UPB":"LWB"}
            </label>
            <select
                id={bound}
                onChange={handleSelectionChange}
                className="h-min w-min p-1.5 ml-0.5 font-mono text-md italic"
            >
                <option value="" aria-disabled defaultChecked>∅</option>
                <option value="0">0</option>
                <option value="\infty">∞</option>
                <option value="-\infty">-∞</option>
                <option value="e">e</option>
                <option value="\pi">π</option>
                <option value="num">✎</option>
            </select>
            {show&&<input 
                placeholder="0"
                onChange={handleInputChange}
                className="m-1.5 w-10 text-center border-t-2 border-white-mode-blue dark:border-muted-teal"
            />}
        </div>
    )
}

export default BoundSelector