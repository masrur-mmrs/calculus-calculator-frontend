import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const algebraIndexSlice = createSlice({
    name: "algebraIndex",
    initialState: { 
        equation1Index: 0,
        equation2Index: 0,
        equation3Index: 0,
    },
    reducers: {
        setCurrentIndex(state, action: PayloadAction<{index: number, equation: "equation1" | "equation2" | "equation3"}>) {
            const property = `${action.payload.equation}Index` as keyof typeof state;
            state[property] = action.payload.index;
        },
        incrementIndex(state, action: PayloadAction<{value: number, equation: "equation1" | "equation2" | "equation3"}>) {
            const property = `${action.payload.equation}Index` as keyof typeof state;
            state[property] += action.payload.value;
        },
        decrementIndex(state, action: PayloadAction<{value: number, equation: "equation1" | "equation2" | "equation3"}>) {
            const property = `${action.payload.equation}Index` as keyof typeof state;
            state[property] -= action.payload.value;
        },
    },
});

export const { setCurrentIndex, incrementIndex, decrementIndex } = algebraIndexSlice.actions;
export default algebraIndexSlice.reducer;