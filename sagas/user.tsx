import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  ADD_CANDIDATE_NAME_FAILURE,
  ADD_CANDIDATE_NAME_REQUEST,
  ADD_CANDIDATE_NAME_SUCCESS,
  CURRENT_VOTE_STATUS_FAILURE,
  CURRENT_VOTE_STATUS_REQUEST,
  CURRENT_VOTE_STATUS_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  VOTE_TO_CANDIDATE_FAILURE,
  VOTE_TO_CANDIDATE_REQUEST,
  VOTE_TO_CANDIDATE_SUCCESS,
} from "../reducers";
import axios from "axios";
import {
  IAddCandidateNameAction,
  ICurrentVoteStatusAction,
  ILogInAction,
  ISignUpAction,
  IVoteToCandidateAction,
} from "../interfaces/actionType";
import {
  ISignUpData,
  ILogInData,
  IAddCandidateNameData,
  IVoteToCandidateData,
} from "../interfaces/dataType";
import {
  IAddCandidateNameResponseType,
  ICurrentVoteStatusResponseType,
  ILogInResponseType,
  ISignUpResponseType,
  IVoteToCandidateResponseType,
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
function currentVoteStatusAPI(data: null) {
  return axios.get("/api/votes/");
}
function voteToCandidateAPI(data: IVoteToCandidateData) {
  return axios.post(`api/votes/?candidate=${data.id}`);
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
    console.log(result.data);
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
function* voteToCandidate(action: IVoteToCandidateAction) {
  try {
    const result: IVoteToCandidateResponseType = yield call(
      voteToCandidateAPI,
      action.data
    );
    console.log(result);
    yield put({
      type: VOTE_TO_CANDIDATE_SUCCESS,
      data: result.data,
    });
  } catch (error: any) {
    console.error(error);
    yield put({
      type: VOTE_TO_CANDIDATE_FAILURE,
      error: error.response.data,
    });
  }
}

function* currentVoteStatus(action: ICurrentVoteStatusAction) {
  try {
    const result: ICurrentVoteStatusResponseType = yield call(
      currentVoteStatusAPI,
      action.data
    );
    console.log(result.data);
    yield put({
      type: CURRENT_VOTE_STATUS_SUCCESS,
      data: result.data,
    });
  } catch (error: any) {
    console.error(error);
    yield put({
      type: CURRENT_VOTE_STATUS_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchAddCandidateName() {
  yield takeLatest(ADD_CANDIDATE_NAME_REQUEST, addCandidateName);
}
function* watchCurrentVoteStatus() {
  yield takeLatest(CURRENT_VOTE_STATUS_REQUEST, currentVoteStatus);
}

function* watchVoteToCandidate() {
  yield takeLatest(VOTE_TO_CANDIDATE_REQUEST, voteToCandidate);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchAddCandidateName),
    fork(watchCurrentVoteStatus),
    fork(watchVoteToCandidate),
  ]);
}
