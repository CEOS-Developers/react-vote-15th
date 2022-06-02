export interface IVotedType {
  id: number;
  candidate: number;
  candidate_name: string;
  user: number;
  created_at: string;
  updated_at: string;
}

// 후보자별 현황 조회
export interface IGetCandidateVoted {
  id: number;
  name: string;
  count: number;
  votes: IVotedType[];
}

// 투표 현황 조회
export interface IVotedTypes {
  id: number;
  candidate: number;
  candidate_name: string;
  user: number;
  created_at: string;
  updated_at: string;
}

export interface IGetVoted {
  id: number;
  name: string;
  count: number;
  votes: IVotedTypes[];
}

export interface IGetVoteds extends Array<IGetVoted> {}
