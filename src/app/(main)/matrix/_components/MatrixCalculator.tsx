'use client';
import React, { useEffect } from 'react';
import MatrixDisplay from './MatrixDisplay';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setInputTex } from '@/redux/slices/inputTexSlice';
import { clearResultTex } from '@/redux/slices/resultTexSlice';
import { useAnswerToggleContext } from '@/context/context';
import { clearErrorMessage } from '@/redux/slices/errorMessageSlice';
import MatrixKeyboard from './MatrixKeyboard';
import { decrementIndex, incrementIndex } from '@/redux/slices/indexSlice';
import { incrementCursorIndex } from '@/redux/slices/cursorSlice';

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
    let newInputTex = "";

    if (cleanedInputTex[index] === "☐") {
      newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index + 1);
    } else if (cleanedInputTex.substring(index, index + 1) === "|☐") {
      // console.log("+1")
      newInputTex = cleanedInputTex.slice(0, index - 1) + "|" + cleanedInputTex.slice(index - 1);
    } else if (cleanedInputTex.substring(index-1, index) === "☐") {
      // console.log("-1")
      newInputTex = cleanedInputTex.slice(0, index - 1) + "|" + cleanedInputTex.slice(index);
      dispatch(decrementIndex(1));
    } else {
      newInputTex = cleanedInputTex.slice(0, index) + "|" + cleanedInputTex.slice(index);
      dispatch(clearErrorMessage());
    }

    // console.log("From useEffect: ", index);
    // console.log(cleanedInputTex.substring(index - 1, index))

    let inserted = false;

    const emptyFirstElementIndex = newInputTex.indexOf("\\begin{pmatrix}&");
    const emptyMidElementIndex = newInputTex.indexOf("&&");
    const emptyLastElementOfRowIndex = newInputTex.indexOf("&\\");
    const emptyFirstElementOfRowIndex = newInputTex.indexOf("\\&");

    if (emptyFirstElementIndex > -1) {
      newInputTex =
        newInputTex.slice(0, emptyFirstElementIndex + 15) +
        "☐" +
        newInputTex.slice(emptyFirstElementIndex + 15);
      inserted ||= (emptyFirstElementIndex + 15) <= index;
    }
    if (emptyMidElementIndex > -1) {
      newInputTex =
        newInputTex.slice(0, emptyMidElementIndex + 1) +
        "☐" +
        newInputTex.slice(emptyMidElementIndex + 1);
      inserted ||= (emptyMidElementIndex + 1) <= index;
    }
    if (emptyLastElementOfRowIndex > -1) {
      newInputTex =
        newInputTex.slice(0, emptyLastElementOfRowIndex + 1) +
        "☐" +
        newInputTex.slice(emptyLastElementOfRowIndex + 1);
      inserted ||= (emptyLastElementOfRowIndex + 1) <= index;
    }
    if (emptyFirstElementOfRowIndex > -1) {
      newInputTex =
        newInputTex.slice(0, emptyFirstElementOfRowIndex + 1) +
        "☐" +
        newInputTex.slice(emptyFirstElementOfRowIndex + 1);
      inserted ||= (emptyFirstElementOfRowIndex + 1) <= index;
    }

    dispatch(setInputTex(newInputTex));

    if (inserted) {
      dispatch(incrementIndex(1));
      dispatch(incrementCursorIndex(1));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, dispatch]);


  return (
    <div className="flex flex-col items-center w-fit sm:w-full mx-4">
      <h6 className="py-5 font-semibold text-3xl">Matrix</h6>
      <div className="my-4 w-full sm:w-fit">
        <MatrixDisplay/>
        <MatrixKeyboard inputTex={inputTex}/>
      </div>
    </div>
  );
};

export default MatrixCalculator;
