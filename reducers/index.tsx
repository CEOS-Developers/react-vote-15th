import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import {
  IUser,
  ICurrentVoteStatusByCandidate,
  ICurrentVoteStatus,
} from "../interfaces/interface";
import {
  dummyCurrentVoteStatus,
  dummyCurrentVoteStatusByCandidate,
} from "./dummy";
import produce from "immer";

export interface IState {
  mode: boolean;
  isLoggedIn: boolean;
  handleCandidateModal: boolean;
  user: IUser | null;
  currentVoteStatus: ICurrentVoteStatus | null;
  currentVoteStatusByCandidate: ICurrentVoteStatusByCandidate | null;
  signUpLoading: boolean | null;
  signUpDone: boolean | null;
  signUpError: boolean | object | string | null;
}
const initialState: IState = {
  mode: true,
  isLoggedIn: false,
  handleCandidateModal: false,
  user: null,
  currentVoteStatus: dummyCurrentVoteStatus,
  currentVoteStatusByCandidate: dummyCurrentVoteStatusByCandidate,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

export const LOGGED_IN: string = "LOGGED_IN";
export const CHANGE_MODE: string = "CHANGE_MODE";
export const HANDLE_CANDIDATE_MODAL: string = "HANDLE_CANDIDATE_MODAL";

export const ADD_CANDIDATE_NAME: string = "ADD_CANDIDATE_NAME";

export const ADD_CANDIDATE_NAME_REQUEST: string = "ADD_CANDIDATE_NAME_REQUEST";
export const ADD_CANDIDATE_NAME_SUCCESS: string = "ADD_CANDIDATE_NAME_SUCCESS";
export const ADD_CANDIDATE_NAME_FAILURE: string = "ADD_CANDIDATE_NAME_FAILURE";

export const VOTE_TO_CANDIDATE_REQUEST: string = "VOTE_TO_CANDIDATE_REQUEST";
export const VOTE_TO_CANDIDATE_SUCCESS: string = "VOTE_TO_CANDIDATE_SUCCESS";
export const VOTE_TO_CANDIDATE_FAILURE: string = "VOTE_TO_CANDIDATE_FAILURE";

export const CURRENT_VOTE_STATUS_REQUEST: string =
  "CURRENT_VOTE_STATUS_REQUEST";
export const CURRENT_VOTE_STATUS_SUCCESS: string =
  "CURRENT_VOTE_STATUS_SUCCESS";
export const CURRENT_VOTE_STATUS_FAILURE: string =
  "CURRENT_VOTE_STATUS_FAILURE";

export const CURRENT_VOTE_STATUS_BY_CANDIDATE_REQUEST: string =
  "CURRENT_VOTE_STATUS_BY_CANDIDATE_REQUEST";
export const CURRENT_VOTE_STATUS_BY_CANDIDATE_SUCCESS: string =
  "CURRENT_VOTE_STATUS_BY_CANDIDATE_SUCCESS";
export const CURRENT_VOTE_STATUS_BY_CANDIDATE_FAILURE: string =
  "CURRENT_VOTE_STATUS_BY_CANDIDATE_FAILURE";

export const SIGN_UP_REQUEST: string = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS: string = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE: string = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST: string = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS: string = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE: string = "LOG_IN_FAILURE";

// create your reducer
export const reducer = (state: IState = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // case HYDRATE:
      // return { ...state, ...action.payload };
      case LOGGED_IN:
        draft.isLoggedIn = true;
        break;
      case CHANGE_MODE:
        draft.mode = !draft.mode;
        break;
      case HANDLE_CANDIDATE_MODAL:
        draft.handleCandidateModal = !draft.handleCandidateModal;
        break;
      case ADD_CANDIDATE_NAME:
        draft.currentVoteStatus?.push(action.data);
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = null;
        draft.signUpError = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.user = action.data;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      default:
        return state;
    }
  });
};
