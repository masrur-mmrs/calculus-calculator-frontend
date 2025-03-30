import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const inputTexSlice = createSlice({
  name: "inputTex",
  initialState: { value: "" },
  reducers: {
    setInputTex: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
    },
    appendInputTex: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    insertTex: (state, action: PayloadAction<{ index: number, tex: string }>) => {
      const { index, tex } = action.payload;
      state.value = state.value.slice(0, index) + tex + state.value.slice(index);
    },
    clearInputTex: (state) => {
        state.value = "";
    }
  },
});

export const { setInputTex, appendInputTex, insertTex, clearInputTex } = inputTexSlice.actions;
export default inputTexSlice.reducer;
