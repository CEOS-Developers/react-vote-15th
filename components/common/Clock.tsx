import { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Clock = () => {
  //moment.js 모듈 사용
  const [time, setTime] = useState(moment());

  // 처음 렌더링될 때만 실행
  useEffect(() => {
    setInterval(() => {
      //현재 시간 불러오기
      setTime(moment());

      //1초마다 반복
    }, 1000);
  }, []);

  return <ClockContainer>{time.format('HH:mm')}</ClockContainer>;
};
export default Clock;

const ClockContainer = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  margin-top: 17px;
`;
