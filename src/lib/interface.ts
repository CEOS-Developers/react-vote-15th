import { Dispatch } from "react";

export interface IToggleButtons {
  curPart: string;
  setCurPart: Dispatch<string>;
}

export interface IPartList {
  id: number;
  part: string;
  name: string;
  vote_num: number;
}

export interface IVoteList {
  curPart: string;
  partList: IPartList[];
}

export interface ILoginServerResponse {
  user: string;
  message: string;
  refresh: string;
  access: string;
}

export interface authState {
  authenticated: boolean;
  accessToken: any;
  expireTime: any;
}
