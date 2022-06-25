import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";
import { IPartList } from "../lib/interface";
import VoteResultList from "../components/voteResult/VoteResultList";
import axios from "axios";

const Container = styled.article`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VoteList = styled.section`
  margin-top: 2rem;
`;

const VoteResult = () => {
  const [curPart, setCurPart] = useState("f");
  const [partList, setPartList] = useState<IPartList[]>([]);

  useEffect(() => {
    let resultList = [] as IPartList[];

    axios(
      `http://ec2-43-200-125-15.ap-northeast-2.compute.amazonaws.com:80/api/vote/${curPart}`
    ).then((response) => {
      resultList = response.data;
      resultList.sort((a, b) => b.vote_num - a.vote_num);
      setPartList(resultList);
    });
  }, [curPart]);

  return (
    <Container>
      <ToggleButtons curPart={curPart} setCurPart={setCurPart} />
      <VoteList>
        {partList.length !== 0 && <VoteResultList partList={partList} />}
      </VoteList>
    </Container>
  );
};

export default VoteResult;
