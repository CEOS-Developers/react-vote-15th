import useInput from "../hooks/useInput";
import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ADD_CANDIDATE_NAME, HANDLE_CANDIDATE_MODAL } from "../reducers";
import Modal from "./Modal";

const AddCandidateModal = () => {
  const dispatch = useDispatch();
  const [candidateName, onChangeCandidateName] = useInput("");

  const handleCloseModal = useCallback(() => {
    dispatch({
      type: HANDLE_CANDIDATE_MODAL,
    });
  }, []);
  const onSubmitCandidateName = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({
      type: ADD_CANDIDATE_NAME,
      data: { name: candidateName },
    });
    console.log("hi");
  }, []);
  const stopPropagation = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation();
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
