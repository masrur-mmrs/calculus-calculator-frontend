import { configureStore } from "@reduxjs/toolkit";
import inputTexReducer from "./inputTexSlice";
import indexSlice from "./indexSlice"
import cursorSlice from "./cursorSlice"

export const store = configureStore({
    reducer: { 
        inputTex: inputTexReducer,
        index: indexSlice,
        cursor: cursorSlice
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;