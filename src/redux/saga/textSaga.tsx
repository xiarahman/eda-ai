import { takeLatest, put } from "redux-saga/effects";
import {
  analyzeTextRequest,
  analyzeTextSuccess,
  analyzeTextFailure,
} from "../slice/textSlice.tsx";
import request from "./requests.ts";
// Saga function to handle text analysis
function* analyzeTextSaga({ payload }) {
  const { payloadData } = payload;
  // Create a FormData object and append the text data
  const formData = new FormData();
  formData.append("input_text", payloadData);
  // Define options for the fetch request
  const options = {
    method: "POST",
    body: formData,
  };
  const requestURL = "https://cf6c-203-175-67-12.ngrok-free.app/analyze_text";
  try {
    // Make the POST request to the API
    const response = yield fetch(requestURL, options);
    // Check if the response is successful and if not throw error
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    // Extract JSON data from the response
     const data = yield response.json();
    // Dispatch success action with the received data
    yield put(analyzeTextSuccess(data));
  } catch (error) {
    // Dispatch failure action with the error message
    yield put(analyzeTextFailure(error.message));
  }
}
// Root saga function
function* rootSaga() {
  // Watch for analyzeTextRequest action and call analyzeTextSaga
  yield takeLatest(analyzeTextRequest.type, analyzeTextSaga);
}
export default rootSaga;
