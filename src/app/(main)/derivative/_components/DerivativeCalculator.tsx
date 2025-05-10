'use client';
import React, { useEffect } from 'react';
import DerivativeDisplay from './DerivativeDisplay';
import DerivativeKeyboard from './DerivativeKeyboard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setInputTex } from '@/redux/slices/inputTexSlice';
import { clearResultTex } from '@/redux/slices/resultTexSlice';
import { useAnswerToggleContext } from '@/context/context';
import { clearErrorMessage } from '@/redux/slices/errorMessageSlice';

const DerivativeCalculator: React.FC = () => {
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
  }, [index, dispatch]);

  return (
    <div className="flex flex-col items-center w-fit sm:w-full mx-4 ">
      <h6 className="py-5 font-semibold text-3xl">Derivative</h6>
      <div className="my-4 w-full sm:w-fit">
        <DerivativeDisplay/>
        <DerivativeKeyboard/>
      </div>
    </div>
  );
};

export default DerivativeCalculator;
