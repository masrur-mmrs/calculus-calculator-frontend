import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const algebraInputTex = createSlice({
    name: "algebraInputTex",
    initialState: { 
        value: {
            equation1: "",
            equation2: "",
            equation3: "",
        } 
    },
    reducers: {
        setAlgebraInputTex: (state, action: PayloadAction<{ equation: 'equation1' | 'equation2' | 'equation3', text: string }>) => {
            state.value[action.payload.equation] = action.payload.text;
        },
        appendAlgebraInputTex: (state, action: PayloadAction<{ equation: 'equation1' | 'equation2' | 'equation3', text: string }>) => {
        state.value[action.payload.equation] += action.payload.text;
        },
        insertAlgebraInputTex: (state, action: PayloadAction<{ equation: 'equation1' | 'equation2' | 'equation3', index: number, tex: string }>) => {
        const { equation, index, tex } = action.payload;
        state.value[equation] = state.value[equation].slice(0, index) + tex + state.value[equation].slice(index);
        },
        clearAlgebraInputTex: (state) => {
            state.value = {
                equation1: "",
                equation2: "",
                equation3: ""
            };
        }
    },
});

export const { setAlgebraInputTex, appendAlgebraInputTex, insertAlgebraInputTex, clearAlgebraInputTex } = algebraInputTex.actions;
export default algebraInputTex.reducer;
