import styled from "styled-components";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState, VOTE_TO_CANDIDATE_REQUEST } from "../reducers";

interface Props {
  name: string;
  candidateNumber: number;
}

const CandidateList: FC<Props> = ({ name, candidateNumber }) => {
  const { mode, user } = useSelector<IState, IState>((state) => state);
  const dispatch = useDispatch();
  const onClickVoteButton = () => {
    const result: boolean = confirm(`${name}에 투표하시겠습니까?`);
    // 후보자 번호를 id 에 담음
    const id = String(candidateNumber);
    const data = {
      id,
    };

    console.log(result);
    console.log(id);

    if (result) {
      if (user?.is_voted) {
        return alert("이미 투표 하셨습니다 😭");
      }
      dispatch({
        type: VOTE_TO_CANDIDATE_REQUEST,
        data,
      });

      alert(`${name}에 투표가 완료 됐습니다.`);
    }
  };

  return (
    <Wrapper>
      <CandidateImg>대략 그림</CandidateImg>
      <CandidateInfo>
        <Name>{name}</Name>
      </CandidateInfo>
      <VotedButton onClick={onClickVoteButton}>투표하기</VotedButton>
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
