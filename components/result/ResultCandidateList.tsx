import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'reducers';
import styled from 'styled-components';

interface Props {
  name: string;
  count: number;
}

const ResultCandidateList: FC<Props> = ({ name, count }) => {
  const { mode } = useSelector<IState, IState>((state) => state);
  return (
    <Wrapper>
      <ResultImg>등수</ResultImg>
      <CandidateInfo>
        <Name>{name}</Name>
      </CandidateInfo>
      <Count>{count}</Count>
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

const ResultImg = styled.div`
  width: 100%;
  height: 100%;
`;

const CandidateInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 1px solid red;
`;

const Name = styled.div``;

const Count = styled.div`
  margin: auto;
`;

export default ResultCandidateList;
