import AppLayout from "../components/AppLayout";
import { useRouter } from "next/router";
import styled from "styled-components";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState, LOG_IN_REQUEST } from "../reducers";
import useInput from "../hooks/useInput";

const Login = () => {
  const { isLoggedIn, mode } = useSelector<IState, IState>((state) => state);

  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();
  const router = useRouter();
  const backHome = () => {
    router.push("/").then((r) => null);
  };
  const askSignup = (): void => {
    router.push("/signup").then((r) => null);
  };

  const submitLogInForm = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      const data = {
        username,
        password,
      };
      console.log(data);
      dispatch({
        type: LOG_IN_REQUEST,
        data,
      });

      // router.push("/").then((r) =>
      //   dispatch({
      //     type: "LOGGED_IN",
      //   })
      // );
    },
    [username, password]
  );
  return (
    <>
      <AppLayout>
        <Wrapper>
          <button onClick={backHome}>↩️</button>
          <LogInFormStyle onSubmit={submitLogInForm} action="">
            <input
              type="text"
              placeholder="사용자이름"
              onChange={onChangeUsername}
              required
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
              required
            />
            <button>로그인</button>
          </LogInFormStyle>
          <button onClick={askSignup}>회원이 아니신가요?</button>
        </Wrapper>
      </AppLayout>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogInFormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Login;
