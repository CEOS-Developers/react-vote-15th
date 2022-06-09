// 리덕스에서 사용하는 액션 타입

export interface ISignUpAction {
  type: string;
  data: {
    username: string;
    email: string;
    password: string;
  };
}
export interface ILogInAction {
  type: string;
  data: {
    username: string;
    password: string;
  };
}

export interface IAddCandidateNameAction {
  type: string;
  data: {
    name: string;
  };
}
