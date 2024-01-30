import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  analysisResult: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: InputState = {
  analysisResult: null,
  loading: false,
  error: null,
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    analyzeTextRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    analyzeTextSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.analysisResult = action.payload;
      console.log(action.payload)
      state.error = null; 
    },
    analyzeTextFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { analyzeTextRequest, analyzeTextSuccess, analyzeTextFailure } = inputSlice.actions;

export default inputSlice.reducer;
