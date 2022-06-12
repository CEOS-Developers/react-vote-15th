import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { useCallback } from "react";

const Result = () => {
  const { mode, handleCandidateModal, currentVoteStatus, user } = useSelector<
    IState,
    IState
  >((state) => state);
  const router = useRouter();

  console.log(currentVoteStatus);

  const backToHome = useCallback(() => {
    router.push("/vote").then((r) => null);
  }, []);

  return (
    <>
      <AppLayout>
        <button onClick={backToHome}>↩️</button>
        <h1>투표 결과 보기 </h1>
      </AppLayout>
    </>
  );
};

export default Result;
