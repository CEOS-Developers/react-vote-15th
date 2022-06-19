import AppLayout from '../../components/AppLayout';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_VOTE_STATUS_REQUEST, IState } from '../../reducers';
import { useCallback, useEffect } from 'react';
import ElectedCandidate from 'components/result/ElectedCandidate';
import ResultCandidateList from 'components/result/ResultCandidateList';
import { setUseProxies } from 'immer';

const Result = () => {
  const { mode, handleCandidateModal, currentVoteStatus, user } = useSelector<
    IState,
    IState
  >((state) => state);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: CURRENT_VOTE_STATUS_REQUEST,
      data: null,
    });
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
      </AppLayout>
    </>
  );
};

const ResultCandidateListContainer = styled.div`
  height: 350px;
  overflow: scroll;
`;

export default Result;
