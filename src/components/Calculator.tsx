'use client';
import React, { useState, useEffect } from 'react';
import InputEquation from './Options';
import SelectOperatin from './SelectOperation';
import Display from './Display';
import Keyboard from './Keyboard/Keyboard';
import { calculateDerivative, calculateIntegral } from '@/app/utils/calculate';
import { useLatexValidation } from '@/app/utils/hooks/useLatexValidation';

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setInputTex } from "../redux/inputTexSlice";

const Calculator: React.FC = () => {
  const inputTex = useSelector((state: RootState) => state.inputTex.value);
  const index = useSelector((state: RootState) => state.index.currentIndex);
  const dispatch = useDispatch<AppDispatch>();
  const [operation, setOperation] = useState<string>("derivative");
  const [wrt, setWrt] = useState<string>("x");
  const [resultTex, setResultTex] = useState<string>("");
  const {displayTex, latexError} = useLatexValidation(inputTex);
  const [error, setError] = useState<string>(latexError);
  const [answerToggle, setAnswerToggle] = useState<boolean>(false);

  useEffect(() => {
    setAnswerToggle(false);
    setResultTex("")
    setError("")
  }, [displayTex]);

  useEffect(() => {
    setResultTex("")
    setAnswerToggle(false);
  }, [operation]);

  useEffect(() => {
    const cleanedInputTex = inputTex.replace("|", "");
    const newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
    dispatch(setInputTex(newInputTex));
  }, [index]);

  const handleWrtChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWrt(event.target.value);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAnswerToggle(true);

    if (!inputTex || !operation || !wrt) {
      setError("All fields are required");
      console.error("Invalid input");
      return;
    }

    const eqn = inputTex.replace("|", "");
    switch (operation) {
      case "derivative":
        const derivative = await calculateDerivative(eqn, wrt);
        setResultTex(derivative.result);
        break;
      case "integral":
        const integral = await calculateIntegral(eqn, wrt);
        setResultTex(integral.result);
        break;
      default:
        console.error("Invalid operation");
    }

    console.log(answerToggle);
  };

  return (
    <div className="flex flex-col items-center w-fit sm:w-full mx-auto ">
      {/* <h1 className="text-4xl font-bold mt-1.5">Calculus Calculator</h1> */}
      <div className="mb-4 w-full sm:w-fit ml-4">
        <SelectOperatin setOperation={setOperation}/>
        <Display operation={operation} wrt={wrt} displayTex={displayTex} answerToggle={answerToggle} resultTex={resultTex}/>
        <Keyboard/>
        <form onSubmit={handleSubmit} className="w-full">
          <button
            type="submit"
            className="w-full text-2xl bg-white-mode-light-blue hover:bg-white-mode-blue text-white font-bold py-2 px-4 rounded float-end my-4 dark:bg-blue-500 dark:hover:bg-blue-700"
          >
            Calculate
          </button>
        </form>
        <InputEquation error={error} handleWrtChange={handleWrtChange}/>
      </div>
    </div>
  );
};

export default Calculator;
