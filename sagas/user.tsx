import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  ADD_CANDIDATE_NAME_FAILURE,
  ADD_CANDIDATE_NAME_REQUEST,
  ADD_CANDIDATE_NAME_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers";
import axios from "axios";
import {
  IAddCandidateNameAction,
  ILogInAction,
  ISignUpAction,
} from "../interfaces/actionType";
import {
  ISignUpData,
  ILogInData,
  IAddCandidateNameData,
} from "../interfaces/dataType";
import {
  IAddCandidateNameResponseType,
  ILogInResponseType,
  ISignUpResponseType,
} from "../interfaces/responseType";

function signUpAPI(data: ISignUpData) {
  return axios.post("/api/signup/", data);
}
function logInAPI(data: ILogInData) {
  return axios.post("/api/login/", data);
}

function addCandidateNameAPI(data: IAddCandidateNameData) {
  return axios.post("/api/candidates/", data);
}

function* signUp(action: ISignUpAction) {
  try {
    // action.data is form object data (front signup form)
    // data is object from response
    const result: ISignUpResponseType = yield call(signUpAPI, action.data);
    const { access, refresh } = result.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
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
function* logIn(action: ILogInAction) {
  try {
    const result: ILogInResponseType = yield call(logInAPI, action.data);
    const { access, refresh } = result.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (error: any) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

function* addCandidateName(action: IAddCandidateNameAction) {
  try {
    const result: IAddCandidateNameResponseType = yield call(
      addCandidateNameAPI,
      action.data
    );
    yield put({
      type: ADD_CANDIDATE_NAME_SUCCESS,
      data: result.data,
    });
  } catch (error: any) {
    console.error(error);
    yield put({
      type: ADD_CANDIDATE_NAME_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchSignUp() {
  console.log("회원가입 요청 사가 실행");
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogIn() {
  console.log("로그인 요청 사가 실행");
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchAddCandidateName() {
  console.log("후보자 추가 요청 사가 실행");
  yield takeLatest(ADD_CANDIDATE_NAME_REQUEST, addCandidateName);
}

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchLogIn), fork(watchAddCandidateName)]);
}
