import useInput from "../hooks/useInput";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ADD_CANDIDATE_NAME_REQUEST } from "../reducers";
import Modal from "./Modal";

const AddCandidateModal = () => {
  const dispatch = useDispatch();
  const [candidateName, onChangeCandidateName] = useInput("");

  const onSubmitCandidateName = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name: candidateName,
    };
    dispatch({
      type: ADD_CANDIDATE_NAME_REQUEST,
      data,
    });
  }, []);

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
