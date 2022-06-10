import AppLayout from "../../components/AppLayout";
import styled from "styled-components";
import { useRouter } from "next/router";
import CandidateList from "../../components/CandidateList";
import { useDispatch, useSelector } from "react-redux";
import {
  CURRENT_VOTE_STATUS_REQUEST,
  HANDLE_CANDIDATE_MODAL,
  IState,
} from "../../reducers";
import { useCallback, useEffect } from "react";
import AddCandidateModal from "../../components/AddCandidateModal";
import usePush from "../../hooks/usePush";

const Vote = () => {
  const {
    mode,
    handleCandidateModal,
    currentVoteStatus,
    user,
    addCandidateNameDone,
  } = useSelector<IState, IState>((state) => state);

  const dispatch = useDispatch();
  const router = useRouter();

  const pushHome = () => {
    router.push("/").then((r) => null);
  };
  const pushVoteGet = () => {
    router.push("/vote/get").then((r) => null);
  };
  const pushVoteResult = () => {
    router.push("/vote/result").then((r) => null);
  };

  const handleAddCandidateModal = useCallback(() => {
    dispatch({
      type: HANDLE_CANDIDATE_MODAL,
    });
  }, []);

  // 투표 현황에 변화가 생기면 가져와서 하면 됨.
  useEffect(() => {
    // 제일 처음에 로드 되거나 변화가 생기면 currentVoteStatus 불러야 함.
    dispatch({
      type: CURRENT_VOTE_STATUS_REQUEST,
      data: null,
    });
  }, [addCandidateNameDone]);

  return (
    <>
      <AppLayout>
        <Wrapper>
          <button onClick={pushHome}>↩️</button>
          <CandidateListContainer>
            {currentVoteStatus?.map((user) => {
              return (
                <>
                  <CandidateList
                    key={user.id + `new Date()`}
                    name={user.name}
                    candidateNumber={user.id}
                  />
                </>
              );
            })}
          </CandidateListContainer>
          <ButtonsContainer>
            <button onClick={handleAddCandidateModal}>후보자 추가</button>
            {handleCandidateModal && <AddCandidateModal />}
            <button onClick={pushVoteGet}>현황 확인</button>
            <button onClick={pushVoteResult}>결과 확인</button>
          </ButtonsContainer>
        </Wrapper>
      </AppLayout>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
  height: 100%;
`;
const CandidateListContainer = styled.div`
  height: 350px;
  overflow: scroll;
`;
const ButtonsContainer = styled.div``;

export default Vote;
