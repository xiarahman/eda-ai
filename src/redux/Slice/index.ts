import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  job_id: 0,
  data: [],
  chartsData: [],
  loading: false,
  error: null,
  analyzeText: {
    analysisResult: {},
    loading: false,
    error: false,
  },
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
    chartsDataFetchRequest: (state, action) => {
      state.loading = true;
      state.job_id = action.payload.job_id;
    },
    chartsDataFetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.chartsData = payload;
    },
    chartsDataFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    liveStreamFetchRequest: (state, action) => {
      state.loading = true;
      state.job_id = action.payload.job_id;
    },
    liveStreamFetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.chartsData = payload;
    },
    liveStreamFetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action to initiate text analysis request
    analyzeTextRequest: (state) => {
      state.analyzeText.loading = true;
      state.analyzeText.error = false;
    },
    // Action to handle successful text analysis response
    analyzeTextSuccess: (state, { payload }) => {
      state.analyzeText.loading = false;
      state.analyzeText.analysisResult = payload;
    },
    // Action to handle text analysis failure
    analyzeTextFailure: (state) => {
      state.analyzeText.error = true;
      state.analyzeText.loading = false;
    },
  },
});

export const {
  videoFetchRequest,
  videoFetchSuccess,
  videoFetchFailure,
  chartsDataFetchRequest,
  chartsDataFetchSuccess,
  chartsDataFetchFailure,
  liveStreamFetchRequest,
  liveStreamFetchSuccess,
  liveStreamFetchFailure,
  analyzeTextRequest,
  analyzeTextSuccess,
  analyzeTextFailure,
} = videoSlice.actions;

export const { reducer } = videoSlice;
