import { call, put, takeEvery } from "redux-saga/effects";
import { videoFetchFailure, videoFetchSuccess } from "../slice/videoSlice.tsx";
import axios from "axios";

function* workVideoFetchRequest({ payload }) {
  const { job_id } = payload; // Extract ID from action payload

  try {
    const response = yield call(
      axios.get,
      `https://cf6c-203-175-67-12.ngrok-free.app/analyze_video`,
      {
        params: { job_id },
        headers: {
          "ngrok-skip-browser-warning": true,
        },
      }
    );

    const formattedRespone = yield response.data[0]; // Use response.data instead of response.json()
    yield put(videoFetchSuccess(formattedRespone));
  } catch (error) {
    yield put(videoFetchFailure(error));
  }
}

function* videoSaga() {
  yield takeEvery("video/videoFetchRequest", workVideoFetchRequest);
}

export default videoSaga;
