'use client';
import React, { useEffect } from 'react';
import IntegralDisplay from './IntegralDisplay';
import IntegralKeyboard from './IntegralKeyboard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setInputTex } from "@/redux/slices/inputTexSlice";
import { clearResultTex } from '@/redux/slices/resultTexSlice';
import { useAnswerToggleContext } from '@/context/context';
import { clearErrorMessage } from '@/redux/slices/errorMessageSlice';

const IntegralCalculator: React.FC = () => {
  const { setAnswerToggle } = useAnswerToggleContext();
  const inputTex = useSelector((state: RootState) => state.inputTex.value);
  const index = useSelector((state: RootState) => state.index.currentIndex);
  const bound = useSelector((state: RootState) => state.bound.value)
  const errorMessage = useSelector((state: RootState) => state.errorMessage.value)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setAnswerToggle(false)
    dispatch(clearErrorMessage())
    dispatch(clearResultTex())
  }, [inputTex, dispatch, bound, setAnswerToggle]);

  useEffect(() => {
    const cleanedInputTex = inputTex.replace("|", "");
    const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
    dispatch(clearErrorMessage())
    dispatch(setInputTex(newInputTex));
  }, [index, dispatch]);
  
  return (
    <div className="flex flex-col items-center w-fit sm:w-full mx-4 ">
      <h6 className="py-5 font-semibold text-3xl">Integral</h6>
      <div className="my-4 w-full sm:w-fit">
        <p className="text-red-500 font-mono font-extralight text-md">{errorMessage}</p>
        <IntegralDisplay/>
        <IntegralKeyboard/>
      </div>
    </div>
  );
};

export default IntegralCalculator;
