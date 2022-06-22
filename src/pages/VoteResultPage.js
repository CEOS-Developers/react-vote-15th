import { useEffect, useState } from 'react';
import axios from 'axios';
import { CenteringWrapper } from '../GlobalStyle';
import { StyledBox } from '../styles/StyledBox';
import styled from 'styled-components';
import { Button } from '../styles/StyleForm';

function VoteResultPage() {
  const [result, setResult] = useState(null);
  const [leader, setLeader] = useState('');
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const fetcthResult = async () => {
      try {
        setResult(null);
        const response = await axios.get(
          'http://ec2-3-38-228-115.ap-northeast-2.compute.amazonaws.com/api/vote/'
        );
        setResult(response.data);
        setLeader(response.data[0].candidate_name);
      } catch (e) {
        console.log(1);
      }
    };

    fetcthResult();
  }, []);

  function scrollAnimation(){
    setScroll(!scroll);
  }

  if (!result) return null;
  return (
    <>
      <CenteringWrapper>
        <Title data-aos="zoom-in-up" data-aos-delay="500">16기 백엔드짱 : 🎊{leader}🎊</Title>
        <Button onClick={scrollAnimation}>전체결과보기</Button>
        {result.map((user) => (
          <>{scroll && (<StyledBox key={user.id} data-aos="fade-down">
            {user.candidate_name} ({user.vote_cnt})
          </StyledBox>) }</>
        ))}
      </CenteringWrapper>
    </>
  );
}

const Title = styled.div`
  margin: 10px;
  font-size: 30px;
  color: white;
`;
export default VoteResultPage;
