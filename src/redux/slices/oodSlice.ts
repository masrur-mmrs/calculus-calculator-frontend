import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const oodSlice = createSlice({
    name: "ood",
    initialState: { value: "1" },
    reducers: {
        setOod: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { setOod } = oodSlice.actions;
export default oodSlice.reducer;