import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const columnSlice = createSlice({
    name: "column",
    initialState: { value: 0 },
    reducers: {
        setColumn: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
})

export const { setColumn } = columnSlice.actions;
export default columnSlice.reducer;