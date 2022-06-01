import AppLayout from "../components/AppLayout";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const backHome = () => {
    router.push("/").then((r) => null);
  };
  const submitSignUpForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router
      .push("/")
      .then((r) => alert("회원가입이 완료 됐습니다. 바로 로그인이 됩니다."));
  };
  return (
    <>
      <AppLayout>
        <Wrapper>
          <button onClick={backHome}>↩️</button>
          <LogInFormStyle onSubmit={submitSignUpForm} action="">
            <input type="text" placeholder="사용자이름" />
            <input type="text" placeholder="이메일" />
            <input type="text" placeholder="비밀번호" />
            <input type="text" placeholder="비밀번호확인" />
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
