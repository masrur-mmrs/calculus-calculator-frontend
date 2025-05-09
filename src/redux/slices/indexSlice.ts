import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const indexSlice = createSlice({
    name: "index",
    initialState: { currentIndex: 0 },
    reducers: {
        setCurrentIndex(state, action: PayloadAction<number>) {
            state.currentIndex = action.payload;
        },
        incrementIndex(state, action: PayloadAction<number>) {
            state.currentIndex += action.payload;
        },
        decrementIndex(state, action: PayloadAction<number>) {
            state.currentIndex -= action.payload;
        },
    },
});

export const { setCurrentIndex, incrementIndex, decrementIndex } = indexSlice.actions;
export default indexSlice.reducer;