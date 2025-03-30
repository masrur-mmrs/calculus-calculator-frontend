import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const cursorSlice = createSlice({
    name: "cursor",
    initialState: { index: 0 },
    reducers: {
        setCursorIndex(state, action: PayloadAction<number>) {
            state.index = action.payload;
        },
        incrementCursorIndex(state, action: PayloadAction<number>) {
            state.index += action.payload;
        },
        decrementCursorIndex(state, action: PayloadAction<number>) {
            state.index -= action.payload;
        },
    },
});

export const { setCursorIndex, incrementCursorIndex, decrementCursorIndex } = cursorSlice.actions;
export default cursorSlice.reducer;