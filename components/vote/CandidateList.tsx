import styled from 'styled-components';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CURRENT_VOTE_STATUS_REQUEST,
  IState,
  VOTE_TO_CANDIDATE_REQUEST,
} from '../../reducers';

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
        return alert('이미 투표 하셨습니다 😭');
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
  height: 90px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: #f6f6f4;
  margin-bottom: 30px;
`;
const CandidateImg = styled.div`
  width: 100%;
  height: 100%;
`;
const CandidateInfo = styled.div`
  display: grid;
`;

const Name = styled.div`
  margin: auto;
  font-weight: 500;
  font-size: 20px;
`;
const VotedButton = styled.button`
  width: 100px;
  background-color: #e3af41;
  color: white;
  font-weight: 800;
  border-radius: 20px;
`;
export default CandidateList;
