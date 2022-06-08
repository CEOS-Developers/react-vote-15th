import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../reducers";
import axios from "axios";
import { ISignUpAction, ISignUpData } from "../interfaces/actionType";
import { ISignUpResponseType } from "../interfaces/dataType";

function signUpAPI(data: ISignUpData) {
  console.log("signUpAPI 실행");
  return axios.post("/api/signup/", data);
}

function* signUp(action: ISignUpAction) {
  try {
    // action.data is form object data (front signup form)
    // data is object from response
    const result: ISignUpResponseType = yield call(signUpAPI, action.data);

    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (error: any) {
    console.error(error);
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchSignUp() {
  console.log("signUpAPI 요청 실행??");
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
