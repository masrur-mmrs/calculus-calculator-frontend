'use client';
import React, { useState, useEffect } from 'react';
import InputEquation from './InputEquation';
import SelectOperatin from './SelectOperation';
import Display from './Display';
// import Tips from './Tips';
import { calculateDerivative, calculateIntegral } from '@/app/utils/calculate';
import { useLatexValidation } from '@/app/utils/hooks/useLatexValidation';

const Calculator: React.FC = () => {
  const [operation, setOperation] = useState<string>("derivative");
  const [inputTex, setInputTex] = useState<string>("");
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

  const handleTexChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTex(event.target.value);
  };

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

    switch (operation) {
      case "derivative":
        const derivative = await calculateDerivative(inputTex, wrt);
        setResultTex(derivative.result);
        break;
      case "integral":
        const integral = await calculateIntegral(inputTex, wrt);
        setResultTex(integral.result);
        break;
      default:
        console.error("Invalid operation");
    }

    console.log(answerToggle);
  };

  return (
    <div className="flex flex-col items-center w-fit sm:w-full mx-auto ">
      <h1 className="text-4xl font-bold mb-4 mt-8">Calculus Calculator</h1>
      <div className="mb-4 w-full sm:w-fit ml-4">
        <SelectOperatin setOperation={setOperation}/>
        <Display operation={operation} wrt={wrt} displayTex={displayTex} answerToggle={answerToggle} resultTex={resultTex}/>
        <InputEquation inputTex={inputTex} error={error} handleTexChange={handleTexChange} handleWrtChange={handleWrtChange}/>
        <form onSubmit={handleSubmit} className="w-full">
          <button
            type="submit"
            className="w-full bg-white-mode-light-blue hover:bg-white-mode-blue text-white font-bold py-2 px-4 rounded float-end mt-4 dark:bg-blue-500 dark:hover:bg-blue-700"
          >
            Calculate
          </button>
        </form>
      </div>
      {/* <Tips /> */}
    </div>
  );
};

export default Calculator;
