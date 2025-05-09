import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const wrtSlice = createSlice({
    name: "wrt",
    initialState: { value: "x" },
    reducers: {
        setWrt: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { setWrt } = wrtSlice.actions;
export default wrtSlice.reducer;