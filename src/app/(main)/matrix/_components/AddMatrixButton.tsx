import { cn } from '@/app/utils/helpers';
import { incrementCursorIndex } from '@/redux/slices/cursorSlice';
import { incrementIndex } from '@/redux/slices/indexSlice';
import { insertTex } from '@/redux/slices/inputTexSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddMatrixButton: React.FC = ({}) => {
    const row =  useSelector((state: RootState) => state.row.value);
    const column =  useSelector((state: RootState) => state.column.value);
    const index = useSelector((state: RootState) => state.index.currentIndex);
    const dispatch = useDispatch<AppDispatch>();

    const insertMatrix = () => {
        let matrix = "\\begin{pmatrix}";
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                matrix += "☐";
                if (j !== column - 1) {
                    matrix += "&";
                }
            }
            if (i !== row - 1) {
                matrix += "\\\\";
            }
        }
        matrix += "\\end{pmatrix}";
        dispatch(insertTex({index: index, tex: matrix}));
        dispatch(incrementIndex(15));
        dispatch(incrementCursorIndex(4));
    }

    return (
        <button
            disabled={row === 0 || column === 0}
            className={cn("px-3 min-w-16 w-full rounded-lg font-bold text-lg sm:text-xl font-mono text-center text-white bg-white-mode-light-blue dark:border-muted-teal dark:bg-blue-500 sm:hover:scale-105 active:scale-95 transform ease-in-out duration-150 disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60")}
            onClick={insertMatrix}
        >
            Add Matrix
        </button>
    );
};


export default AddMatrixButton;