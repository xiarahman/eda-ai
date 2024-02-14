import { createSelector } from "reselect";
import { initialState } from "../Slice/index.ts";
// Selectors
const getItems = (state) => state.video || initialState;

// Reselect selector
export const getVideos = createSelector([getItems], (items) => items);

export const selectorAnalyzeText = createSelector(
  [getItems],
  (items) => items.analyzeText
);
