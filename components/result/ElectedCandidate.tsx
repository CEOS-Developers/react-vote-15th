import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'reducers';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  frontLeaderName: string;
}

const ElectedCandidate: FC<Props> = ({ frontLeaderName }) => {
  const { mode } = useSelector<IState, IState>((state) => state);

  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }} />;
  return (
    <Wrapper>
      <Congratulate>🎉 축하합니다! 🎉</Congratulate>
      <FrontLeaderName>{frontLeaderName}</FrontLeaderName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 30px;
  height: 200px;
  text-align: center;
  margin: 15px;
`;

const Congratulate = styled.div`
  padding-top: 20px;
  font-size: 20px;
  font-weight: 600;
`;
const FrontLeaderName = styled.div`
  line-height: 130px;
  font-size: 35px;
  color: #e3af41;
  font-weight: 600;
`;

export default ElectedCandidate;
