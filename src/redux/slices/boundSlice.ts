import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialBound = {
    upperBound: "",
    lowerBound: "",
}

const boundSlice = createSlice({
    name: "bound",
    initialState: { value: initialBound},
    reducers: {
        setUpperBound: (state, action: PayloadAction<string>) => {
            state.value.upperBound = action.payload;
        },
        setLowerBound: (state, action: PayloadAction<string>) => {
            state.value.lowerBound = action.payload;
        }
    },
});

export const { setUpperBound, setLowerBound } = boundSlice.actions;
export default boundSlice.reducer;