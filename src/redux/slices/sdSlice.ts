import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const sdSlice = createSlice({
    name: "sd",
    initialState: { value: "frac" },
    reducers: {
        setSd: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { setSd } = sdSlice.actions;
export default sdSlice.reducer;