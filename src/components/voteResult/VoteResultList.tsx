import React from "react";
import { IPartList } from "../../lib/interface";
import styled, { keyframes } from "styled-components";

const VoteResultAnimation = keyframes`
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
const VoteItem = styled.section<{ delay: number }>`
  display: flex;
  justify-content: space-between;

  width: 20rem;
  font-weight: 200;
  font-size: 1.5rem;

  padding-bottom: 0.5rem;
  margin-bottom: 1.7rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.gray};

  animation: ${VoteResultAnimation} 1s ease-in-out both;
  animation-delay: ${({ delay }) => delay}s;
`;
const VoteName = styled.section`
  padding-left: 0.5rem;
`;
const VoteNumber = styled.section`
  padding-right: 0.5rem;
  color: ${({ theme }) => theme.red};
`;

const VoteResultList = ({ partList }: { partList: IPartList[] }) => {
  return (
    <>
      {partList.map((part, idx) => (
        <VoteItem key={idx} delay={idx * 0.4}>
          <VoteName>{part.name}</VoteName>
          <VoteNumber>{part.vote_num}표</VoteNumber>
        </VoteItem>
      ))}
    </>
  );
};

export default VoteResultList;
