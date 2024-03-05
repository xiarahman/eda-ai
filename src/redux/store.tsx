import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import videoSaga from "./saga/videoSaga.tsx";
import { reducer as videoReducer } from "./slice/videoSlice.tsx";
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    video: videoReducer,
  },
  middleware: () => [saga],
});
saga.run(videoSaga);

export default store;
