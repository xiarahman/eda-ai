
import { takeLatest, put } from "redux-saga/effects";
import {
  analyzeTextRequest,
  analyzeTextSuccess,
  analyzeTextFailure,
} from "../slice/textSlice.tsx";
import request from "./requests.ts";

function* analyzeTextSaga({ payload }) {
  const { payloadData } = payload;
  const formData = new FormData();
  formData.append("input_text", payloadData);
  const options = {
    method: "POST",
    body: formData,
  };
  const requestURL = "https://cf6c-203-175-67-12.ngrok-free.app/analyze_text";
  try {
    const response = yield fetch(requestURL, options);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = yield response.json(); // Extract JSON data
    yield put(analyzeTextSuccess(data));
     // Dispatch success action with data
  } catch (error) {
    yield put(analyzeTextFailure(error.message)); // Dispatch failure action
  }
}

function* rootSaga() {
  yield takeLatest(analyzeTextRequest.type, analyzeTextSaga);
}

export default rootSaga;

