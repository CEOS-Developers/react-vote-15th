import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'reducers';
import styled from 'styled-components';
import { CandidateInfo, CandidateName } from 'styles/CommonStyle';

interface Props {
  name: string;
  count: number;
  index: number;
}
const ResultCandidateList: FC<Props> = ({ name, count, index }) => {
  const { mode } = useSelector<IState, IState>((state) => state);
  return (
    <Wrapper>
      <ResultRank>{index + 1}</ResultRank>
      <CandidateInfo>
        <CandidateName>{name}</CandidateName>
      </CandidateInfo>
      <Count>{count}표</Count>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: #f6f6f4;
  margin-bottom: 30px;
`;

const ResultRank = styled.div`
  margin-left: 40px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  text-align: center;
  line-height: 65px;
  font-size: 35px;
  font-weight: 900;
  color: white;
  background-color: #f9da9a;
`;

const Count = styled.div`
  line-height: 60px;
  text-align: center;
  width: 100px;
  background-color: #e3af41;
  color: white;
  font-weight: 700;
  border-radius: 20px;
  font-size: 15px;
  height: 60px;
`;

export default ResultCandidateList;
