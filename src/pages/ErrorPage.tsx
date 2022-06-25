import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.gray};
`;

const ErrorPage = () => {
  return <Container>🚫 잘못된 경로입니다 🚫</Container>;
};

export default ErrorPage;
