// githubSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  uploadDataSuccess,
  uploadDataFailure,
  uploadFile,
} from "../slice/attachmentSlice.tsx";

export default function* fetchData(action) {
  try {
    const response = yield call(
      axios.post,
      "https://cf6c-203-175-67-12.ngrok-free.app/analyze_video",
      action.payload
    );

    yield put(uploadDataSuccess(response.data));
  } catch (error) {
    yield put(uploadDataFailure(error.message));
  }
}

export function* saga() {
  yield takeEvery(uploadFile, fetchData);
}
