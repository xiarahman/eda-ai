import { call, put, takeEvery } from "redux-saga/effects";
import {
  chartsDataFetchFailure,
  chartsDataFetchSuccess,
} from "../slice/chartSlice.tsx";
import axios from "axios";

function* workChartsDataFetchRequest({ payload }) {
  const { job_id } = payload; // Extract ID from action payload

  try {
    const response = yield call(
      axios.get,
      `https://cf6c-203-175-67-12.ngrok-free.app/frames-chart`,
      {
        params: { job_id },
        headers: {
          "ngrok-skip-browser-warning": true,
        },
      }
    );

    const formattedRespone = yield response.data[0]; // Use response.data instead of response.json()
    yield put(chartsDataFetchSuccess(formattedRespone));
  } catch (error) {
    yield put(chartsDataFetchFailure(error));
  }
}

function* chartSaga() {
  yield takeEvery<any>(
    "chart/chartsDataFetchRequest",
    workChartsDataFetchRequest
  );
}

export default chartSaga;
