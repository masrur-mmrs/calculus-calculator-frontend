'use client';
import React, { useEffect } from 'react';
import MatrixDisplay from './MatrixDisplay';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { insertTex, setInputTex } from '@/redux/slices/inputTexSlice';
import { clearResultTex } from '@/redux/slices/resultTexSlice';
import { useAnswerToggleContext } from '@/context/context';
import { clearErrorMessage } from '@/redux/slices/errorMessageSlice';
import MatrixKeyboard from './MatrixKeyboard';

const MatrixCalculator: React.FC = () => {
  const { setAnswerToggle } = useAnswerToggleContext();
  const inputTex = useSelector((state: RootState) => state.inputTex.value);
  const index = useSelector((state: RootState) => state.index.currentIndex);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setAnswerToggle(false)
    dispatch(clearErrorMessage())
    dispatch(clearResultTex())
  }, [inputTex, dispatch, setAnswerToggle]);

  useEffect(() => {
    const cleanedInputTex = inputTex.replace("|", "");
    const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
    dispatch(clearErrorMessage())
    dispatch(setInputTex(newInputTex));

    const emptyFirstElementIndex = newInputTex.indexOf("\\begin{pmatrix}&");
    const emptyMidElementIndex = newInputTex.indexOf("&&");
    console.log(emptyMidElementIndex);
    if (emptyFirstElementIndex > -1) {
      dispatch(insertTex({ index: (emptyFirstElementIndex + 15), tex: "☐" }));
    }
    if (emptyMidElementIndex > -1) {
      dispatch(insertTex({ index: (emptyMidElementIndex + 1), tex: "☐" }));
    }
    // if (inputTex.indexOf("|☐") > -1 || inputTex.indexOf("☐|") > -1) {
    //   // dispatch(insertTex({ index: index, tex: "|" }));
    //   const cleanedInputTex = inputTex.replace("|☐", "") || inputTex.replace("☐|", "");
    //   const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
    //   dispatch(setInputTex(newInputTex));
    // }
  }, [index, dispatch]);

  return (
    <div className="flex flex-col items-center w-fit sm:w-full mx-4">
      <h6 className="py-5 font-semibold text-3xl">Matrix</h6>
      <div className="my-4 w-full sm:w-fit">
        <MatrixDisplay/>
        <MatrixKeyboard/>
      </div>
    </div>
  );
};

export default MatrixCalculator;
