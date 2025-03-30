'use client';
import React, { useEffect } from 'react';
import DerivativeDisplay from './DerivativeDisplay';
import DerivativeKeyboard from './DerivativeKeyboard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setInputTex } from '@/redux/slices/inputTexSlice';
import { clearResultTex } from '@/redux/slices/resultTexSlice';
import { useAnswerToggleContext } from '@/context/context';

const DerivativeCalculator: React.FC = () => {
  const { setAnswerToggle } = useAnswerToggleContext();
  const inputTex = useSelector((state: RootState) => state.inputTex.value);
  const index = useSelector((state: RootState) => state.index.currentIndex);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setAnswerToggle(false)
    dispatch(clearResultTex())
  }, [inputTex, dispatch, setAnswerToggle]);

  useEffect(() => {
    const cleanedInputTex = inputTex.replace("|", "");
    const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
    dispatch(setInputTex(newInputTex));
  }, [index, dispatch]);
  //   event.preventDefault();
  //   setAnswerToggle(true);

  //   if (!inputTex || !operation || !wrt) {
  //     window.alert("Input missing")
  //     console.error("Invalid input");
  //     return;
  //   }

  //   const eqn = inputTex.replace("|", "").replaceAll("π", "\\pi").replaceAll("θ", "\\theta");
  //   switch (operation) {
  //     case "derivative":
  //       const derivative = await calculateDerivative(eqn, wrt);
  //       setResultTex(derivative.result);
  //       break;
  //     case "integral":
  //       console.log(eqn)
  //       const integral = await calculateIntegral(eqn, wrt);
  //       setResultTex(integral.result);
  //       break;
  //     default:
  //       console.error("Invalid operation");
  //   }
  // };

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
