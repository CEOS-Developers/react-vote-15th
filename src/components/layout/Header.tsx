import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCookieToken, removeCookieToken } from "../../lib/cookie";
import { DELETE_TOKEN } from "../../store/auth";
import { useDispatch } from "react-redux";

const Container = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 2rem;
  width: 95%;
  max-width: 70rem;
  height: 5rem;
  z-index: 1;

  background-color: black;
  border-radius: 0.2rem;
`;
const LeftContent = styled.section`
  display: flex;
  font-size: 1.3rem;

  color: white;
  align-items: center;

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.light_blue};
    transition: 0.5s;
  }
`;
const RightContent = styled.section`
  font-size: 1rem;
  margin-right: 1.7rem;

  color: ${({ theme }) => theme.gray};

  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  margin: 0 1.7rem;

  width: 3rem;
  height: 3rem;

  &:hover {
    -webkit-filter: brightness(80%) grayscale(10%);
    filter: brightness(80%) grayscale(10%);
    transition: 0.5s;
  }
`;
const LogoTitle = styled.h1`
  font-size: 1.3rem;
`;
const Tab = styled.section`
  cursor: pointer;
  font-weight: 500;
  padding: 1rem;

  margin-left: 1vw;

  &:hover {
    color: ${({ theme }) => theme.light_blue};
    transition: 0.5s;
  }
`;
const LoginTab = styled(Tab)`
  color: black;
  background-color: ${({ theme }) => theme.light_green};
  border-radius: 0.1rem;
  padding: 1rem 2rem;
  margin-left: 2vw;

  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.light_blue};
    transition: 0.5s;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: any) => state.authToken.authenticated
  );

  async function logout() {
    dispatch(DELETE_TOKEN());
    removeCookieToken();
    return navigate("/");
  }

  return (
    <Container>
      <LeftContent onClick={() => navigate("/")}>
        <Logo src="/healthier_logo.png" />
        <LogoTitle>
          Team <br />
          Healthier
        </LogoTitle>
      </LeftContent>
      <RightContent>
        <Tab onClick={() => navigate("/vote")}>투표하기</Tab>
        <Tab onClick={() => navigate("/voteResult")}>결과보기</Tab>
        {isAuthenticated ? (
          <LoginTab onClick={() => logout()}>로그아웃</LoginTab>
        ) : (
          <LoginTab onClick={() => navigate("/login")}>로그인</LoginTab>
        )}
      </RightContent>
    </Container>
  );
};

export default Header;
