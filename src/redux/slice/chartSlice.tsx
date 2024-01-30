import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  job_id: 0,
  chartsData: [],
  loading: false,
  error: null,
};

const videoSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    chartsDataFetchRequest: (state, action) => {
      state.loading = true;
      state.job_id = action.payload.job_id;
    },
    chartsDataFetchSuccess: (state, action) => {
      state.loading = false;
      state.chartsData = action.payload;
    },
    chartsDataFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  chartsDataFetchRequest,
  chartsDataFetchSuccess,
  chartsDataFetchFailure,
} = videoSlice.actions;

export const { reducer } = videoSlice;
