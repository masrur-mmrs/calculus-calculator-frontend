'use client';
import React, { useState } from 'react';
import InputEquation from './InputEquation';
import SelectOperatin from './SelectOperatin';
import Preview from './Preview';
import Tips from './Tips';
import Answer from './Answer';
import { calculateDerivative, calculateIntegral } from '@/app/utils/calculate';
import { useLatexValidation } from '@/app/utils/hooks/useLatexValidation';

const Calculator: React.FC = () => {
  const [operation, setOperation] = useState<string>("");
  const [inputTex, setInputTex] = useState<string>("");
  const [wrt, setWrt] = useState("");
  const {displayTex, latexError} = useLatexValidation(inputTex);
  const [resultTex, setResultTex] = useState<string>("");
  const [error, setError] = useState<string>(latexError);

  const handleTexChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTex(event.target.value);
  };

  const handleOperationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(event.target.value);
    setError('');
  };

  const handleWrtChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWrt(event.target.value);
    setError('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputTex || !operation || !wrt) {
      setError("All fields are required");
      console.error("Invalid input");
      return;
    }

    switch (operation) {
      case "derivative":
        console.log(inputTex, wrt);
        const derivative = await calculateDerivative(inputTex, wrt);
        console.log(JSON.parse(derivative.result));
        setResultTex(JSON.parse(derivative.result).result);
        break;
      case "integral":
        const integral = await calculateIntegral(inputTex, wrt);
        console.log(JSON.parse(integral.result).result);
        setResultTex(JSON.parse(integral.result).result);
        break;
      default:
        console.error("Invalid operation");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculus Calculator</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <SelectOperatin handleOperationChange={handleOperationChange} handleWrtChange={handleWrtChange} />
        <InputEquation inputTex={inputTex} handleTexChange={handleTexChange} error={error} />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-end mt-4'
        >
          Calculate
        </button>
      </form>
      <Preview operation={operation} wrt={wrt} displayTex={displayTex} />
      {resultTex !== "" && <Answer resultTex={resultTex} />}
      <Tips />
    </div>
  );
};

export default Calculator;
