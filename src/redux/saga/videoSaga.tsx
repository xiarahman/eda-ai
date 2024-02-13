import { call, put, takeEvery } from "redux-saga/effects";
import {
  chartsDataFetchFailure,
  chartsDataFetchSuccess,
  videoFetchFailure,
  videoFetchSuccess,
  videoFetchRequest,
  liveStreamFetchSuccess,
  liveStreamFetchFailure,
} from "../slice/videoSlice.tsx";
import axios from "axios";

function* workVideoFetchRequest({ payload }) {
  console.log("Video fetch request saga triggered");
  const { job_id } = payload; // Extract ID from action payload

  try {
    const response = yield call(
      axios.get,
      `https://eae.smartdemo.live/analyze_video?job_id=${job_id}`,
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
      `https://eae.smartdemo.live/frames-chart?job_id=${job_id}`,
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
      `https://eae.smartdemo.live/get-live-streams?job_id=${job_id}`,
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
}

export default videoSaga;
