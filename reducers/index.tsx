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

export interface IState {
  mode: boolean;
  isLoggedIn: boolean;
  user: IUser | null;
  currentVoteStatus: ICurrentVoteStatus | null;
  currentVoteStatusByCandidate: ICurrentVoteStatusByCandidate | null;
}
const initialState: IState = {
  mode: true,
  isLoggedIn: false,
  user: null,
  currentVoteStatus: dummyCurrentVoteStatus,
  currentVoteStatusByCandidate: dummyCurrentVoteStatusByCandidate,
};

const LOGGED_IN: string = "LOGGED_IN";
const CHANGE_MODE: string = "CHANGE_MODE";

// create your reducer
export const reducer = (state: IState = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case CHANGE_MODE:
      return { ...state, mode: !state.mode };
    default:
      return state;
  }
};
