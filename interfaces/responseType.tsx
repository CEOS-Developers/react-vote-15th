import { ICurrentVoteStatus } from "./interface";

export interface ILogInResponseType {
  data: {
    message: string;
    user: string;
    access: string;
    refresh: string;
    is_voted: boolean;
  };
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}

export interface ISignUpResponseType {
  data: {
    message: string;
    user: string;
    access: string;
    refresh: string;
  };
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}
export interface IAddCandidateNameResponseType {
  data: {
    message: string;
    id: number;
    name: string;
    count: number;
  };
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}
export interface ICurrentVoteStatusResponseType {
  data: ICurrentVoteStatus;
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}
