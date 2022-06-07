import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;

export function* rootSaga() {
  yield all([fork(userSaga)]);
}
