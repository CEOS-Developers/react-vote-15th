import useInput from "../hooks/useInput";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_CANDIDATE_NAME_REQUEST,
  CURRENT_VOTE_STATUS_REQUEST,
  IState,
} from "../reducers";
import Modal from "./Modal";

const AddCandidateModal = () => {
  const {
    mode,
    handleCandidateModal,
    currentVoteStatus,
    user,
    addCandidateNameDone,
  } = useSelector<IState, IState>((state) => state);
  const dispatch = useDispatch();
  const [candidateName, onChangeCandidateName] = useInput("");

  const onSubmitCandidateName = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      const data = {
        name: candidateName,
      };
      dispatch({
        type: ADD_CANDIDATE_NAME_REQUEST,
        data,
      });
    },
    [candidateName]
  );
  useEffect(() => {
    if (addCandidateNameDone) {
      dispatch({
        type: CURRENT_VOTE_STATUS_REQUEST,
        data: null,
      });
    }
  }, [addCandidateNameDone]);

  return (
    <Modal>
      <form onSubmit={onSubmitCandidateName} action="">
        <input onChange={onChangeCandidateName} type="text" />
        <button>추가하기</button>
      </form>
    </Modal>
  );
};

export default AddCandidateModal;
