import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { saga } from "./saga/attachmentSaga";
import reducer from "../redux/slice/attachmentSlice.tsx";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);

export default store;
