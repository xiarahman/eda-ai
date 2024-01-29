import { createSelector } from "reselect";
import { initialState } from "./../slice/videoSlice.tsx";
// Selectors
const getItems = (state) => initialState || state.video;

// Reselect selector
export const getVideos = createSelector([getItems], (items) => items);
