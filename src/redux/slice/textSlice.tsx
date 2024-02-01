import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Define the structure of the input state
interface InputState {
  analysisResult: any | null;
  loading: boolean;
  error: string | null;
}
// Define the initial state for the input slice
const initialState: InputState = {
  analysisResult: null,
  loading: false,
  error: null,
};
// Create a slice for handling text input related actions and state
const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    // Action to initiate text analysis request
    analyzeTextRequest: (state) => {
      state.loading = true; 
      state.error = null; 
    },
    // Action to handle successful text analysis response
    analyzeTextSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false; 
      state.analysisResult = action.payload; 
      state.error = null; 
    },
    // Action to handle text analysis failure
    analyzeTextFailure: (state, action: PayloadAction<string>) => {
      state.loading = false; 
      state.error = action.payload; 
    },
  },
});
// Export the action creators
export const { analyzeTextRequest, analyzeTextSuccess, analyzeTextFailure } =
  inputSlice.actions;
export default inputSlice.reducer;
