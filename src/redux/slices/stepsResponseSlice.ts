import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const stepsResponse = createSlice({
    name: "stepsResponse",
    initialState: { value: {
        simplified: "",
        steps: [{
            number: 0,
            text: "",
            math: "",
        }],
        result: "",
    } },
    reducers: {
        setStepsResponse: (state, action: PayloadAction<StepsResponse>) => {
            state.value = action.payload;
        },
        clearStepsResponse: (state) => {
            state.value = {
                simplified: "",
                steps: [],
                result: "",
            };
        },
    }
});

export const { setStepsResponse, clearStepsResponse } = stepsResponse.actions;
export default stepsResponse.reducer;