import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "github",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    uploadFile: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    uploadDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    uploadDataFailure: (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { uploadFile, uploadDataSuccess, uploadDataFailure } =
  githubSlice.actions;

export default githubSlice.reducer;
