import React from "react";
import styled, { keyframes } from "styled-components";
import Stars from "../components/Stars";
import { Canvas } from "@react-three/fiber";

const TextAnimation = keyframes`
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translateY(100%);
    opacity: 0;
  }
  95% {
    transform: translateY(0%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    opacity: 1;
  }
`;
const Container = styled.section`
  height: 100vh;
  width: 100vw;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.section<{ delay: number }>`
  color: ${({ theme }) => theme.gray};
  font-weight: 200;

  animation: ${TextAnimation} 1s ease-in-out both;
  animation-delay: ${({ delay }) => delay}s;

  margin-bottom: 1rem;
  font-size: 3rem;
`;
const HighLight = styled.span`
  color: ${({ theme }) => theme.light_green};
  font-weight: 400;
`;
const CanvasContainer = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const HomePage = () => {
  return (
    <>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </CanvasContainer>
      <Container>
        <Text delay={0}>당신의</Text>
        <Text delay={0.7}>
          <HighLight>파트장</HighLight>에게
        </Text>
        <Text delay={1.4}>지금 바로</Text>
        <Text delay={2.1}>투표하세요!</Text>
      </Container>
    </>
  );
};

export default HomePage;
