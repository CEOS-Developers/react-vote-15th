import AppLayout from "../components/AppLayout";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [pwdError, setPwdError] = useState(false);
  const [pwdCheck, setPwdCheck] = useState("");

  const [email, onChangeEmail] = useInput("");
  const [user, onChangeUser] = useInput("");
  const [pwd, onChangePwd] = useInput("");

  const onChangePwdCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPwdError(e.target.value !== pwd);
      setPwdCheck(e.target.value);
    },
    [pwdCheck, pwd]
  );

  const backHome = () => {
    router.push("/").then((r) => null);
  };
  const submitSignUpForm = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      dispatch({
        type: "LOGGED_IN",
      });
      router
        .push("/")
        .then((r) => alert("회원가입이 완료 됐습니다. 바로 로그인 됩니다."));
    },
    [user, pwd, pwdCheck, email]
  );
  return (
    <>
      <AppLayout>
        <Wrapper>
          <button onClick={backHome}>↩️</button>
          <LogInFormStyle onSubmit={submitSignUpForm} action="">
            <input
              type="text"
              onChange={onChangeUser}
              value={user}
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
              value={pwd}
              placeholder="비밀번호"
              required
            />
            <input
              type="password"
              onChange={onChangePwdCheck}
              value={pwdCheck}
              placeholder="비밀번호확인"
              required
            />
            {pwdError && (
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
