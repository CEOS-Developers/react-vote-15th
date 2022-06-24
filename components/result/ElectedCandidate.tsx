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

  return (
    <motion.div animate={{ scale: 2 }} transition={{ duration: 2 }}>
      <Wrapper>
        <Congratulate>🎉 축하합니다! 🎉</Congratulate>
        <FrontLeaderName>{frontLeaderName}</FrontLeaderName>
      </Wrapper>
    </motion.div>
  );
};

const Wrapper = styled.div`
  /* border: 1.5px solid #848281; */
  border-radius: 30px;
  height: 100px;
  text-align: center;
  margin: 15px;
`;

const Congratulate = styled.div`
  padding-top: 20px;
  font-size: 10px;
  font-weight: 600;
`;
const FrontLeaderName = styled.div`
  line-height: 70px;
  font-size: 17px;
  color: #e3af41;
  font-weight: 600;
`;

export default ElectedCandidate;
