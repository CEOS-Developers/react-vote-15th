import styled from "styled-components";

const CandidateList = () => {
  return (
    <Wrapper>
      <CandidateImg>대략 그림</CandidateImg>
      <CandidateInfo>
        <Name></Name>
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
  border: 2px dotted blue;
  grid-template-columns: 1fr 2fr 1fr;
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
