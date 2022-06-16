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
function* signUp(action: ISignUpAction) {
  try {
    // action.data is form object data (front signup form)
    // data is object from response
    const result: ISignUpResponseType = yield call(signUpAPI, action.data);
    console.log(result.data);
    // const { access, refresh } = result.data;
    // axios.defaults.headers.common["Authorization"] = `Bearer ${}`;
    // Put == dispatch
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
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
