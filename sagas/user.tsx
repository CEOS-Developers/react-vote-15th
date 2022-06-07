import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../reducers";
import axios from "axios";
import { ServerResponse } from "http";
import { ISignUpData } from "../interfaces/userInterface";

function signUpAPI(data: ISignUpData) {
  return axios.post("/api/signup/", data);
}

function* signUp() {
  try {
    const result: ServerResponse = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
