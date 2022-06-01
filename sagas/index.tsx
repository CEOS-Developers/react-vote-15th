import { all, fork } from "redux-saga/effects";
import axios from "axios";

axios.defaults.withCredentials = true;
export function* rootSaga() {
  yield all([]);
}
