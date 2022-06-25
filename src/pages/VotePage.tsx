import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";
import { IPartList } from "../lib/interface";
import VoteCandidateList from "../components/votePage/VoteCandidateList";
import axios from "axios";

const Container = styled.article`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VoteList = styled.section`
  margin-top: 5rem;

  display: grid;
  grid-gap: 7rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
const VoteComment = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.gray};

  margin-top: 0.5rem;
`;

const VotePage = () => {
  const [curPart, setCurPart] = useState("f");
  const [partList, setPartList] = useState<IPartList[]>([]);

  useEffect(() => {
    axios(
      `http://ec2-43-200-125-15.ap-northeast-2.compute.amazonaws.com:80/api/vote/${curPart}`
    ).then((response) => {
      setPartList(response.data);
    });
  }, [curPart]);

  return (
    <Container>
      <ToggleButtons curPart={curPart} setCurPart={setCurPart} />
      <VoteComment>
        당신의 {curPart === "f" ? "프" : "백"}짱에게 투표하세요!
      </VoteComment>
      <VoteList>
        {partList.length !== 0 && (
          <VoteCandidateList curPart={curPart} partList={partList} />
        )}
      </VoteList>
    </Container>
  );
};

export default VotePage;
