export interface IUser {
  message: string;
  user: string;
  access: string;
  refresh: string;
  is_voted: boolean;
}

// 투표한 사람에 대한 정보
export interface IVotedUsersType {
  id: number;
  candidate: number;
  candidate_name: string;
  user: number;
  created_at: string;
  updated_at: string;
}

// 후보자별 현황 조회
export interface ICurrentVoteStatusByCandidate {
  id: number;
  name: string;
  count: number;
  votes: IVotedUsersType[];
}

// 투표 현황 조회
export interface ICurrentVoteStatus
  extends Array<ICurrentVoteStatusByCandidate> {}