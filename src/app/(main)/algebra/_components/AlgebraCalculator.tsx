'use client';
import React, { useEffect } from 'react';
import AlgebraDisplay from './AlgebraDisplay';
import AlgebraKeyboard from './AlgebraKeyboard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setAlgebraInputTex } from '@/redux/slices/algebraSlice';
import { clearResultTex } from '@/redux/slices/resultTexSlice';
import { useAlgebraEquationContext, useAlgebraModeContext, useAnswerToggleContext } from '@/context/context';
import { clearErrorMessage } from '@/redux/slices/errorMessageSlice';

const AlgebraCalculator: React.FC = () => {
  const { setAnswerToggle } = useAnswerToggleContext();
  const { algebraMode, setAlgebraMode } = useAlgebraModeContext();
  const { equation } = useAlgebraEquationContext();
  const inputTex = useSelector((state: RootState) => state.algebraInputTex.value);
  const index = useSelector((state: RootState) => state.algebraIndexSlice[`${equation}Index`]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setAnswerToggle(false)
    dispatch(clearErrorMessage())
    dispatch(clearResultTex())
  }, [inputTex, dispatch, setAnswerToggle]);

  useEffect(() => {
    // console.log(inputTex[equation])
    const cleanedInputTex = inputTex[equation].replace("|", "");
    const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
    dispatch(clearErrorMessage())
    dispatch(setAlgebraInputTex({equation: equation, text: newInputTex}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, dispatch]);

  return (
    <div className="flex flex-col items-center w-fit sm:w-full mx-4 ">
      <h6 className="py-5 font-semibold text-3xl">Algebra</h6>
      <div className="my-4 w-full sm:w-fit">
        <AlgebraDisplay algebraMode={algebraMode}/>
        <AlgebraKeyboard algebraMode={algebraMode} setAlgebraMode={setAlgebraMode}/>
      </div>
    </div>
  );
};

export default AlgebraCalculator;