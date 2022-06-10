// 리덕스에서 사용하는 액션 타입

import {
  IAddCandidateNameData,
  ILogInData,
  ISignUpData,
  IVoteToCandidateData,
} from "./dataType";

export interface ISignUpAction {
  type: string;
  data: ISignUpData;
}
export interface ILogInAction {
  type: string;
  data: ILogInData;
}

export interface IAddCandidateNameAction {
  type: string;
  data: IAddCandidateNameData;
}

export interface ICurrentVoteStatusAction {
  type: string;
  data: null;
}
export interface IVoteToCandidateAction {
  type: string;
  data: IVoteToCandidateData;
}
