import styled from "styled-components";
import { FC } from "react";

interface Props {
  name: string;
}

const CandidateList: FC<Props> = ({ name }) => {
  return (
    <Wrapper>
      <CandidateImg>대략 그림</CandidateImg>
      <CandidateInfo>
        <Name>{name}</Name>
      </CandidateInfo>
      <VotedButton>투표하기</VotedButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-bottom: 15px;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px -5px #000000;
  box-shadow: 5px 5px 15px -5px #000000;
`;
const CandidateImg = styled.div`
  width: 100%;
  height: 100%;
`;
const CandidateInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 1px solid red;
`;

const Name = styled.div``;
const VotedButton = styled.button``;
export default CandidateList;
