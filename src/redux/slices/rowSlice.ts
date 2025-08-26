import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const rowSlice = createSlice({
    name: "row",
    initialState: { value: 0 },
    reducers: {
        setRow: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
})

export const { setRow } = rowSlice.actions;
export default rowSlice.reducer;