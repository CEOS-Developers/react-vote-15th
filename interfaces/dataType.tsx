interface ISignUpData {
  username: string;
  email: string;
  password: string;
}

interface ILogInData {
  username: string;
  password: string;
}
interface IAddCandidateNameData {
  name: string;
}

interface IVoteToCandidateData {
  id: string;
}

export type {
  ISignUpData,
  ILogInData,
  IAddCandidateNameData,
  IVoteToCandidateData,
};
