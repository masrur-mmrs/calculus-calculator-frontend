import { configureStore } from "@reduxjs/toolkit"
import inputTexReducer from "./slices/inputTexSlice"
import indexSlice from "./slices/indexSlice"
import cursorSlice from "./slices/cursorSlice"
import resultTexSlice from "./slices/resultTexSlice"
import wrtSlice from "./slices/wrtSlice"
import oodSlice from "./slices/oodSlice"
import boundSlice from "./slices/boundSlice"
import errorMessageSlice from "./slices/errorMessageSlice"
import sdSlice from "./slices/sdSlice"
import stepsResponseSlice from "./slices/stepsResponseSlice"
import rowSlice from "./slices/rowSlice"
import columnSlice from "./slices/columnSlice"
import algebraInputTexReducer from "./slices/algebraSlice"
import algebraIndexSlice from "./slices/algebraIndexSlice"
import algebraResultTexSlice from "./slices/algebraResultTexSlice"

export const store = configureStore({
    reducer: { 
        inputTex: inputTexReducer,
        index: indexSlice,
        cursor: cursorSlice,
        resultTex: resultTexSlice,
        wrt: wrtSlice,
        ood: oodSlice,
        bound: boundSlice,
        errorMessage: errorMessageSlice,
        sd: sdSlice,
        stepsResponse: stepsResponseSlice,
        row: rowSlice,
        column: columnSlice,
        algebraInputTex: algebraInputTexReducer,
        algebraIndexSlice: algebraIndexSlice,
        algebraResultTexSlice: algebraResultTexSlice
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;