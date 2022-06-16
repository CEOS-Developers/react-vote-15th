import AppLayout from "../components/AppLayout";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import {
  IState,
  LOG_IN_REQUEST,
  LOGGED_IN,
  SIGN_UP_REQUEST,
} from "../reducers";

const Signup = () => {
  const { mode, user, signUpError } = useSelector<IState, IState>(
    (state) => state
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const [passwordError, setPwdError] = useState(false);
  const [passwordCheck, setPwdCheck] = useState("");

  const [email, onChangeEmail] = useInput("");
  const [username, onChangeUser] = useInput("");
  const [password, onChangePwd] = useInput("");

  const onChangePwdCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPwdError(e.target.value !== password);
      setPwdCheck(e.target.value);
    },
    [passwordCheck, password]
  );

  const backHome = () => {
    router.push("/").then((r) => null);
  };
  const submitSignUpForm = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      const data = {
        username,
        password,
        email,
      };
      dispatch({
        type: SIGN_UP_REQUEST,
        data,
      });
    },
    [username, password, passwordCheck, email]
  );

  useEffect(() => {
    // if (user) {
    //   router
    //     .push("/")
    //     .then((r) => alert("회원 가입이 됐습니다. 바로 이동합니다."));
    // }
    if (signUpError) {
      alert("값이 잘못 입력 됐습니다.");
    }
  }, [user, signUpError]);
  return (
    <>
      <AppLayout>
        <Wrapper>
          <button onClick={backHome}>↩️</button>
          <LogInFormStyle onSubmit={submitSignUpForm} action="">
            <input
              type="text"
              onChange={onChangeUser}
              value={username}
              placeholder="사용자이름"
              required
            />
            <input
              onChange={onChangeEmail}
              value={email}
              type="email"
              placeholder="이메일"
              required
            />
            <input
              type="password"
              onChange={onChangePwd}
              value={password}
              placeholder="비밀번호"
              required
            />
            <input
              type="password"
              onChange={onChangePwdCheck}
              value={passwordCheck}
              placeholder="비밀번호확인"
              required
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
            )}
            <button>회원가입하기</button>
          </LogInFormStyle>
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

export default Signup;
