// 리덕스에서 사용하는 액션 타입

import {
  IAddCandidateNameData,
  ILogInData,
  ISignUpData,
  IVoteToCandidateData,
} from './dataType';

interface ISignUpAction {
  type: string;
  data: ISignUpData;
}
interface ILogInAction {
  type: string;
  data: ILogInData;
}

interface IAddCandidateNameAction {
  type: string;
  data: IAddCandidateNameData;
}

interface ICurrentVoteStatusAction {
  type: string;
  data: null;
}
interface IVoteToCandidateAction {
  type: string;
  data: IVoteToCandidateData;
}

export type {
  ISignUpAction,
  ILogInAction,
  IAddCandidateNameAction,
  ICurrentVoteStatusAction,
  IVoteToCandidateAction,
};
