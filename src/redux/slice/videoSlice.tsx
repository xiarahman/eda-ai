import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  job_id: 0,
  data: [],
  loading: false,
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    videoFetchRequest: (state, action) => {
      state.loading = true;
      state.job_id = action.payload.job_id;
    },
    videoFetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    videoFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { videoFetchRequest, videoFetchSuccess, videoFetchFailure } =
  videoSlice.actions;

export const { reducer } = videoSlice;
