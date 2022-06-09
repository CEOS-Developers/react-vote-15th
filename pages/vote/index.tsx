import AppLayout from "../../components/AppLayout";
import styled from "styled-components";
import { useRouter } from "next/router";
import CandidateList from "../../components/CandidateList";
import { useDispatch, useSelector } from "react-redux";
import { HANDLE_CANDIDATE_MODAL, IState } from "../../reducers";
import { useCallback } from "react";
import AddCandidateModal from "../../components/AddCandidateModal";

const Vote = () => {
  const { isLoggedIn, mode, handleCandidateModal, currentVoteStatus, user } =
    useSelector<IState, IState>((state) => state);
  console.log(user);
  const dispatch = useDispatch();
  const router = useRouter();
  const backHome = () => {
    router.push("/").then((r) => null);
  };
  const pushVoteGet = () => {
    router.push("/vote/get").then((r) => null);
  };
  const pushVoteResult = () => {
    router.push("/vote/result").then((r) => null);
  };

  console.log(currentVoteStatus);
  const handleAddCandidateModal = useCallback(() => {
    dispatch({
      type: HANDLE_CANDIDATE_MODAL,
    });
  }, []);

  return (
    <>
      <AppLayout>
        <Wrapper>
          <button onClick={backHome}>↩️</button>
          {currentVoteStatus?.map((user) => {
            return (
              <>
                <CandidateList key={user.id} name={user.name} />
              </>
            );
          })}
          <button onClick={handleAddCandidateModal}>후보자 추가</button>
          {handleCandidateModal && <AddCandidateModal />}
          <button>투표하기</button>
          <button onClick={pushVoteGet}>현황 확인</button>
          <button onClick={pushVoteResult}>결과 확인</button>
        </Wrapper>
      </AppLayout>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Vote;
