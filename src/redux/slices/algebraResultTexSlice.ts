import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const algebraResultTexSlice = createSlice({
    name: "algebraResultTex",
    initialState: { value: {
        solutions: [],
        variables: []
    } },
    reducers: {
        setAlgebraResultTex: (state, action: PayloadAction<{ solutions: never[], variables: never[] }>) => {
            state.value = action.payload;
        },
        clearAlgebraResultTex: (state) => {
            state.value = {
                solutions: [],
                variables: []
            };
        }
    }
});

export const { setAlgebraResultTex, clearAlgebraResultTex } = algebraResultTexSlice.actions;
export default algebraResultTexSlice.reducer; 