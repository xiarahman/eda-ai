// githubSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from '../slice/attachmentSlice.tsx';

function* fetchData(action) {
  const { file } = action.payload;

  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = yield call(
      axios.post,
      'https://randomuser.me/api/?results=6',
      formData
    );
    console.log('API Response:', response.data);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeEvery(fetchDataStart, fetchData);
}
