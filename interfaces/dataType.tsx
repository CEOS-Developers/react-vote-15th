export interface ISignUpData {
  username: string;
  email: string;
  password: string;
}
export interface ISignUpResponseType {
  data: {};
  status: number;
  statusText: string;
  headers: {};
  config: {};
  request: XMLHttpRequest;
}
