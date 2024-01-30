import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import videoSaga from "./saga/videoSaga.tsx";
import chartSaga from "./saga/chartSaga.tsx";
import { reducer as videoReducer } from "./slice/videoSlice.tsx";
import { reducer as chartReducer } from "./slice/chartSlice.tsx";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    video: videoReducer,
    chart: chartReducer,
  },
  middleware: () => [saga],
});
saga.run(videoSaga);
saga.run(chartSaga);

export default store;
