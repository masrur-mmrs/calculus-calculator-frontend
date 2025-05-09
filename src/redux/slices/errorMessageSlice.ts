import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const errorMessage = createSlice({
    name: "errorMessage",
    initialState: { value: ""},
    reducers: {
        setErrorMessage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        clearErrorMessage: (state) => {
            state.value = "";
        },
    },
});

export const { setErrorMessage, clearErrorMessage } = errorMessage.actions;
export default errorMessage.reducer;