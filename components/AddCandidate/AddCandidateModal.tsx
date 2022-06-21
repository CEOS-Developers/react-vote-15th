import useInput from '../../hooks/useInput';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_CANDIDATE_NAME_REQUEST,
  CURRENT_VOTE_STATUS_REQUEST,
  IState,
} from '../../reducers';
import Modal from './Modal';
import styled from 'styled-components';

const AddCandidateModal = () => {
  const {
    mode,
    handleCandidateModal,
    currentVoteStatus,
    user,
    addCandidateNameDone,
  } = useSelector<IState, IState>((state) => state);
  const dispatch = useDispatch();
  const [candidateName, onChangeCandidateName] = useInput('');

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
      <Wrapper>
        <form onSubmit={onSubmitCandidateName} action="">
          <AddCandidateInput
            onChange={onChangeCandidateName}
            placeholder="이름을 입력하세요 . ."
            type="text"
          />
          <AddCandidateButtonContainer>
            <AddCandidateButton>추가하기</AddCandidateButton>
          </AddCandidateButtonContainer>
        </form>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const AddCandidateInput = styled.input`
  width: 250px;
  padding-left: 1rem;
  border: 2px solid #f7d553;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 400;
  margin: 0.8rem 1.4rem;
  height: 2.5rem;
`;

const AddCandidateButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddCandidateButton = styled.button`
  font-weight: 500;
  color: #353332;
  padding: 10px 20px 0 0;
`;

export default AddCandidateModal;
