'use client'
import React, {useState, ChangeEvent} from 'react';
import { X } from 'lucide-react';
import { AppDispatch, RootState } from '@/redux/store';
import { setUpperBound, setLowerBound } from '@/redux/slices/boundSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAnswerToggleContext } from '@/context/context';
import { cn } from '@/app/utils/helpers';

interface BoundSelectorPropsType {
    bound: string;
}

const BoundSelector: React.FC<BoundSelectorPropsType> = ({bound}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { answerToggle } = useAnswerToggleContext();
    const boundValue = useSelector((state: RootState) => state.bound.value)

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
        <div className={cn("max-w-min text-sm z-0 ",!answerToggle?"border-b-2":"")}>
            {!show&&<select
                id={bound}
                value={bound==="upper"?boundValue.upperBound:boundValue.lowerBound}
                onChange={handleSelectionChange}
                className="h-7 w-7 p-1.5 ml-0.5 font-mono text-sm appearance-none"
            >
                <option value="" aria-disabled defaultChecked>⌄</option>
                <option value="0">0</option>
                <option value="\infty">∞</option>
                <option value="-\infty">-∞</option>
                <option value="e">e</option>
                <option value="\pi">π</option>
                <option value="num">✎</option>
            </select>}
            {show&&(<div className="inline-flex">
                <button 
                    onClick={()=>{
                        setShow(false)
                        dispatch((bound === "upper")?(setUpperBound("")):((setLowerBound(""))))
                    }}
                >
                    <X/>
                </button>
                <input 
                placeholder="0"
                onChange={handleInputChange}
                className="m-1.5 w-10 text-center rounded-lg"
                />
            </div>)
            }
        </div>
    )
}

export default BoundSelector