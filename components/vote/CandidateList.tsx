import styled from 'styled-components';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CURRENT_VOTE_STATUS_REQUEST,
  IState,
  VOTE_TO_CANDIDATE_REQUEST,
} from '../../reducers';
import { CandidateInfo, CandidateName } from 'styles/CommonStyle';

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
    <CandidateListWrapper>
      <CandidateImg
        src={`https://source.boringavatars.com/beam/20/${name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
      />
      <CandidateInfo>
        <CandidateName>{name}</CandidateName>
      </CandidateInfo>
      <VotedButton onClick={onClickVoteButton}>투표하기</VotedButton>
    </CandidateListWrapper>
  );
};

const CandidateListWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: #f6f6f4;
  margin-bottom: 30px;
`;
const CandidateImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 0 0 30px;
`;

const VotedButton = styled.button`
  width: 100px;
  background-color: #e3af41;
  color: white;
  font-weight: 700;
  border-radius: 20px;
  font-size: 15px;
`;
export default CandidateList;
