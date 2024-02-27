import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  chartsDataFetchFailure,
  chartsDataFetchSuccess,
  videoFetchFailure,
  videoFetchSuccess,
  videoFetchRequest,
  liveStreamFetchSuccess,
  liveStreamFetchFailure,
  analyzeTextRequest,
  analyzeTextSuccess,
  analyzeTextFailure,
} from "../Slice/index.ts";
import axios from "axios";
import { API_ENDPOINT } from "../../utils/constants.ts";

function* workVideoFetchRequest({ payload }) {
  console.log("Video fetch request saga triggered");
  const { job_id } = payload; // Extract ID from action payload

  try {
    const response = yield call(
      axios.get,
      `${API_ENDPOINT}/analyze_video?job_id=${job_id}`,
      {
        headers: {
          "ngrok-skip-browser-warning": true,
        },
      }
    );

    const formattedRespone = yield response.data[0]; // Use response.data instead of response.json()
    console.log(
      "%cvideoSaga.tsx line:26 formattedRespone",
      "color: #007acc;",
      formattedRespone
    );
    yield put(videoFetchSuccess(formattedRespone));
  } catch (error) {
    yield put(videoFetchFailure(error));
  }
}

function* workChartsDataFetchRequest({ payload }) {
  console.log("Charts data fetch request saga triggered");
  const { job_id } = payload; // Extract ID from action payload
  try {
    const response = yield call(
      axios.get,
      `${API_ENDPOINT}/frames-chart?job_id=${job_id}`,
      {
        headers: {
          "ngrok-skip-browser-warning": true,
        },
      }
    );
    const formattedRespone = response.data; // Use response.data instead of response.json()
    console.log(
      "%cvideoSaga.tsx line:45 formattedRespone",
      "color: #007acc;",
      formattedRespone
    );
    yield put(chartsDataFetchSuccess(formattedRespone));
  } catch (error) {
    yield put(chartsDataFetchFailure(error));
  }
}

function* workLiveStreamFetchRequest({ payload }) {
  console.log("Live Stream fetch request saga triggered");
  const { job_id } = payload; // Extract ID from action payload
  try {
    const response = yield call(
      axios.get,
      `${API_ENDPOINT}/live-stream-chart?job_id=${job_id}`,
      {
        headers: {
          "ngrok-skip-browser-warning": true,
        },
      }
    );
    const formattedRespone = response.data; // Use response.data instead of response.json()
    console.log(
      "%cvideoSaga.tsx line:45 formattedRespone",
      "color: #007acc;",
      formattedRespone
    );
    yield put(liveStreamFetchSuccess(formattedRespone));
  } catch (error) {
    yield put(liveStreamFetchFailure(error));
  }
}

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
  const requestURL = `${API_ENDPOINT}/analyze_text`;
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

function* videoSaga() {
  yield takeEvery<any>(videoFetchRequest.type, workVideoFetchRequest);
  yield takeEvery<any>(
    "video/chartsDataFetchRequest",
    workChartsDataFetchRequest
  );
  yield takeEvery<any>(
    "video/liveStreamFetchRequest",
    workLiveStreamFetchRequest
  );
  yield takeLatest<any>(analyzeTextRequest.type, analyzeTextSaga);
}

export default videoSaga;
