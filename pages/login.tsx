import AppLayout from "../components/AppLayout";
import { useRouter } from "next/router";
import styled from "styled-components";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";

const Login = () => {
  const { isLoggedIn, mode } = useSelector<State, State>((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const backHome = () => {
    router.push("/").then((r) => null);
  };
  const askSignup = (): void => {
    router.push("/signup").then((r) => null);
  };

  const submitLogInForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push("/").then((r) =>
      dispatch({
        type: "LOGGED_IN",
      })
    );
  };
  return (
    <>
      <AppLayout>
        <Wrapper>
          <button onClick={backHome}>↩️</button>
          <LogInFormStyle onSubmit={submitLogInForm} action="">
            <input type="text" placeholder="사용자이름" />
            <input type="text" placeholder="비밀번호" />
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
