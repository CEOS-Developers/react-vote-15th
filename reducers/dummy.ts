import {
  ICurrentVoteStatus,
  ICurrentVoteStatusByCandidate,
} from "../interfaces/interface";

export const dummyCurrentVoteStatus: ICurrentVoteStatus = [
  {
    id: 1,
    name: "유시원",
    count: 3,
    votes: [
      {
        id: 1,
        candidate: 1,
        candidate_name: "투표자1",
        user: 3,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
      {
        id: 2,
        candidate: 1,
        candidate_name: "투표자2",
        user: 4,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
      {
        id: 3,
        candidate: 1,
        candidate_name: "투표자3",
        user: 5,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
    ],
  },
  {
    id: 2,
    name: "김주현",
    count: 2,
    votes: [
      {
        id: 1,
        candidate: 1,
        candidate_name: "투표자1",
        user: 3,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
      {
        id: 2,
        candidate: 1,
        candidate_name: "투표자2",
        user: 4,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
    ],
  },
  {
    id: 1,
    name: "김현재",
    count: 1,
    votes: [
      {
        id: 1,
        candidate: 1,
        candidate_name: "투표자1",
        user: 3,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
    ],
  },
];

export const dummyCurrentVoteStatusByCandidate: ICurrentVoteStatusByCandidate =
  {
    id: 1,
    name: "유시원",
    count: 3,
    votes: [
      {
        id: 1,
        candidate: 1,
        candidate_name: "투표자1",
        user: 3,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
      {
        id: 2,
        candidate: 1,
        candidate_name: "투표자2",
        user: 4,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
      {
        id: 3,
        candidate: 1,
        candidate_name: "투표자3",
        user: 5,
        created_at: "2022-05-26T08:45:24.630015+09:00",
        updated_at: "2022-05-26T08:45:24.630030+09:00",
      },
    ],
  };
