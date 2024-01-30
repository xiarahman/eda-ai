import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import inputReducer from './slice/textSlice.tsx'
import rootSaga from './saga/rootSaga.ts'
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    input: inputReducer
    // github: github,
  },
  middleware: [sagaMiddleware],
});
 sagaMiddleware.run(rootSaga);

export default store;



