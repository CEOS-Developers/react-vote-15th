import AppLayout from '../../components/AppLayout';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_VOTE_STATUS_REQUEST, IState } from '../../reducers';
import { useCallback, useEffect, useState } from 'react';
import ElectedCandidate from 'components/result/ElectedCandidate';
import ResultCandidateList from 'components/result/ResultCandidateList';
import { current, setUseProxies } from 'immer';
import React from 'react';

const Result = () => {
  const { mode, currentVoteStatus } = useSelector<IState, IState>(
    (state) => state
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const [frontLeader, setFrontLeader] = useState(currentVoteStatus[0]);
  const [sameCount, setSameCount] = useState('');

  // 최다 득표자가 2명이상일 때 처리. 근데 useEffect 무한루프..
  useEffect(() => {
    if (currentVoteStatus[0].count === currentVoteStatus[1].count) {
      setSameCount('최다 득표자가 2명 이상입니다!');
    } else {
      setFrontLeader(currentVoteStatus[0]);
    }
  }, []);

  console.log(currentVoteStatus);

  const backToHome = useCallback(() => {
    router.push('/vote').then((r) => null);
  }, []);

  return (
    <>
      <AppLayout>
        <button onClick={backToHome}>↩️</button>

        <h1>투표 결과 보기 </h1>
        <>
          <h3>프론트엔드 파트장</h3>
          {/* sameCount가 null이 아니면 sameCount를 넘겨주고 NUll이면 frontLeader 넘겨주기 */}
          {sameCount === '' ? (
            <ElectedCandidate frontLeaderName={frontLeader.name} />
          ) : (
            <ElectedCandidate frontLeaderName={sameCount} />
          )}
        </>

        <>
          <h3>투표 결과 상세</h3>
          <ResultCandidateListContainer>
            {currentVoteStatus?.map((user) => {
              return (
                <>
                  <ResultCandidateList
                    key={user.id + `new Date()`}
                    name={user.name}
                    count={user.count}
                  />
                </>
              );
            })}
          </ResultCandidateListContainer>
        </>
      </AppLayout>
    </>
  );
};

const ResultCandidateListContainer = styled.div`
  height: 400px;
  overflow: scroll;
`;

export default React.memo(Result);
