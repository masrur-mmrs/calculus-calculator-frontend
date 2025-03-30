import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const resultTexSlice = createSlice({
    name: "resultTex",
    initialState: { value: "" },
    reducers: {
        setResultTex: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        clearResultTex: (state) => {
            state.value = "";
        }
    }
});

export const { setResultTex, clearResultTex } = resultTexSlice.actions;
export default resultTexSlice.reducer; 