import AppLayout from '../../components/AppLayout';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_VOTE_STATUS_REQUEST, IState } from '../../reducers';
import { useCallback, useEffect, useState } from 'react';
import ElectedCandidate from 'components/result/ElectedCandidate';
import ResultCandidateList from 'components/result/ResultCandidateList';
import React from 'react';
import Header from 'components/common/Header';
import { PageTitle } from 'styles/CommonStyle';
import Lottie, { LottiePlayer } from 'lottie-react';
import congratulations from '../../animations/congratulations.json';
const Result = () => {
  const { mode, currentVoteStatus } = useSelector<IState, IState>(
    (state) => state
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const [frontLeader, setFrontLeader] = useState(currentVoteStatus[0]);
  const [sameCount, setSameCount] = useState('');

  useEffect(()=>{
    dispatch({
      type : CURRENT_VOTE_STATUS_REQUEST
    })
  },[])

  // 최다 득표자가 2명이상일 때 처리. 근데 useEffect 무한루프..
  useEffect(() => {
    console.log(currentVoteStatus)
    if (currentVoteStatus[0].count === currentVoteStatus[1].count) {
      setSameCount('최다 득표자가 2명 이상입니다!');
    } else {
      setFrontLeader(currentVoteStatus[0]);
    }
  }, [currentVoteStatus]);



  const backToHome = useCallback(() => {
    router.push('/vote').then((r) => null);
  }, []);

  return (
    <>
      <AppLayout>
        <Header backButton={backToHome} />
        <TitleContainer>
          <PageTitle>Result</PageTitle>
        </TitleContainer>
        <Wrapper>
          <AnimationContainer>
            <Lottie
              animationData={congratulations}
              height="30px"
              width="30px"
            />
          </AnimationContainer>
          <FrontLeaderResult>
            <h3>프론트엔드 파트장</h3>

            {/* sameCount가 null이 아니면 sameCount를 넘겨주고 NUll이면 frontLeader 넘겨주기 */}
            {sameCount === '' ? (
              <ElectedCandidate frontLeaderName={frontLeader.name} />
            ) : (
              <ElectedCandidate frontLeaderName={sameCount} />
            )}
          </FrontLeaderResult>
          <RankTitleContainer>
            <h3>Rank</h3>
          </RankTitleContainer>
          <ResultCandidateListContainer>
            {currentVoteStatus?.map((user) => {
              return (
                <>
                  <ResultCandidateList
                    index={currentVoteStatus.indexOf(user)}
                    key={user.id + `new Date()`}
                    name={user.name}
                    count={user.count}
                  />
                </>
              );
            })}
          </ResultCandidateListContainer>
        </Wrapper>
      </AppLayout>
    </>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
  height: 100%;
  padding: 0 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const AnimationContainer = styled.div`
  position: fixed;
  top: 50px;
  pointer-events: none;
  left: 50%;
  transform: translate(-50%, 0);
`;

const TitleContainer = styled.div`
  padding: 0 20px;
  height: 100px;
`;

const RankTitleContainer = styled.div`
  padding: 0 20px;
`;

const FrontLeaderResult = styled.div`
  padding: 0 20px;
`;
const ResultCandidateListContainer = styled.div`
  height: 400px;
  overflow: scroll;
  padding: 0 20px;
`;

export default Result;
