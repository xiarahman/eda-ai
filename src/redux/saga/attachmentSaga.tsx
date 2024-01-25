// githubSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  uploadDataSuccess,
  uploadDataFailure,
  uploadFile,
} from "../slice/attachmentSlice.tsx";

export default function* fetchData(action) {
  const { file } = action.payload;

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = yield call(
      axios.post,
      "https://cf6c-203-175-67-12.ngrok-free.app/analyze_video",
      formData
    );

    console.log("API Response:", response.data);

    yield put(uploadDataSuccess(response.data));
  } catch (error) {
    yield put(uploadDataFailure(error.message));
  }
}

export function* saga() {
  yield takeEvery(uploadFile, fetchData);
}
