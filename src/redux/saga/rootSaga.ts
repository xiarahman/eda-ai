import { all } from 'redux-saga/effects';
import  analyzeTextSaga  from './textSaga.tsx';

export default function* rootSaga() {
  yield all([
    analyzeTextSaga(),
  
  ]);
}
