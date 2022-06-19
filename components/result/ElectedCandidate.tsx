import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'reducers';
import styled from 'styled-components';

interface Props {
  frontLeaderName: string;
}

const ElectedCandidate: FC<Props> = ({ frontLeaderName }) => {
  const { mode } = useSelector<IState, IState>((state) => state);

  return (
    <>
      <FrontLeaderName>{frontLeaderName}</FrontLeaderName>
    </>
  );
};

const FrontLeaderName = styled.div``;

export default ElectedCandidate;
