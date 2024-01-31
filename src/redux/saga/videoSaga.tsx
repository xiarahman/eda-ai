import { call, put, takeEvery } from "redux-saga/effects";
import {
  chartsDataFetchFailure,
  chartsDataFetchSuccess,
  videoFetchFailure,
  videoFetchSuccess,
  videoFetchRequest,
} from "../slice/videoSlice.tsx";
import axios from "axios";

function* workVideoFetchRequest({ payload }) {
  console.log("Video fetch request saga triggered");
  const { job_id } = payload; // Extract ID from action payload

  try {
    const response = yield call(
      axios.get,
      `https://cf6c-203-175-67-12.ngrok-free.app/analyze_video?job_id=${job_id}`,
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
      `https://cf6c-203-175-67-12.ngrok-free.app/frames-chart?job_id=${job_id}`,
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

function* videoSaga() {
  yield takeEvery<any>(videoFetchRequest.type, workVideoFetchRequest);
  yield takeEvery<any>(
    "video/chartsDataFetchRequest",
    workChartsDataFetchRequest
  );
}

export default videoSaga;
