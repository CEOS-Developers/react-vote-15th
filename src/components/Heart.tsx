import React from "react";
import styled, { keyframes } from "styled-components";

const HeartAnimation = keyframes`
  0% {
    transform: scale(0.5) rotate(45deg);
  }
  37.5% {
    transform: scale(1.5) rotate(45deg);
  }
`;
const HeartImg = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${({ theme }) => theme.red};
  transform: rotate(45deg);

  position: absolute;

  ::before,
  ::after {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 50%;
    background: ${({ theme }) => theme.red};
  }
  ::before {
    left: -50%;
  }
  ::after {
    top: -50%;
  }

  animation: ${HeartAnimation} 0.5s ease-in-out;
`;

const Heart = () => {
  return <HeartImg />;
};

export default Heart;
