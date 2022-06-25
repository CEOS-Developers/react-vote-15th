import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoLogInOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { customPost } from "../lib/post";
import { setRefreshToken } from "../lib/cookie";
import { SET_TOKEN } from "../store/auth";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  max-width: 40rem;
  max-height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  border-radius: 0.2rem;

  box-shadow: 0 0.4rem 0.5rem 0.04rem rgba(0, 0, 0, 0.02);
`;

const Button = styled.button`
  width: 40vw;
  max-width: 10.5rem;

  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0.4rem 0.5rem 0.04rem rgba(0, 0, 0, 0.02);
  border: none;
  border-radius: 0.2rem;

  padding: 1rem;
  margin: 2rem 0.5rem;
  font-size: 0.8rem;

  cursor: pointer;
  outline: inherit;
`;

const LoginButton = styled(Button)`
  background-color: ${({ theme }) => theme.blue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.light_green};
    color: black;
    transition: 0.5s;
  }
`;

const SignUpButton = styled(Button)`
  background-color: ${({ theme }) => theme.light_blue};
  color: ${({ theme }) => theme.blue};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-filter: brightness(80%) grayscale(10%);
    filter: brightness(80%) grayscale(10%);
    transition: 0.5s;
  }
`;

const Input = styled.input`
  width: 80vw;
  max-width: 20rem;

  padding: 1rem;
  margin: 0 0.5rem;

  border-radius: 0.2rem;
  border: none;
  font-size: 0.8rem;

  &:hover {
    box-shadow: 0 0 0.5rem 0.04rem rgba(0, 0, 0, 0.2);
  }
`;

const InputSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  padding: 1rem;
  color: white;
  // font-size: 4rem;
  font-weight: 200;
`;
const Description = styled.p`
  font-size: 0.8rem;
  color: white;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
`;
const Appendix = styled.p`
  font-size: 0.8rem;
  color: white;
  margin: 0.5rem 0rem;
`;
const AppendixLink = styled.span`
  color: ${({ theme }) => theme.blue};
  &:hover {
    cursor: pointer;
  }
`;

function Login() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendLoginRequest = useCallback(
    async (link: string, id: string, pw: string) => {
      const response = await customPost(link, { username: id, password: pw });
      console.log(response);
      if (response.message === "Login Success") {
        // 쿠키에 Refresh Token, store에 Access Token 저장
        setRefreshToken(response.refresh);
        dispatch(SET_TOKEN(response.access));
        return navigate("/");
      } else {
        alert("아이디와 비밀번호를 확인해주세요");
      }
    },
    [customPost, setRefreshToken, dispatch]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendLoginRequest(
      "http://ec2-43-200-125-15.ap-northeast-2.compute.amazonaws.com/api/login",
      username!,
      password!
    );
    setUserName("");
    setPassword("");
  };

  return (
    <Container>
      <Title>로그인 하기</Title>
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <InputSection>
            <Description>아이디</Description>
            <Input
              type="text"
              placeholder="아이디"
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
            <Description>비밀번호</Description>
            <Input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputSection>
          <ButtonSection>
            <SignUpButton
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </SignUpButton>
            <LoginButton type="submit">
              로그인
              <IoLogInOutline style={{ fontSize: "1.1rem" }} />
            </LoginButton>
          </ButtonSection>
        </Form>
        <Appendix>
          비밀번호를 잊으셨나요?{"    "}
          <AppendixLink
            onClick={() => {
              alert("잘 챙기고 다니세요");
            }}
          >
            비밀번호 찾기
          </AppendixLink>
        </Appendix>
      </ModalContainer>
    </Container>
  );
}

export default Login;
