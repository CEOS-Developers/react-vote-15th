import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { HANDLE_CANDIDATE_MODAL } from '../../reducers';
import { useDispatch } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

const Modal: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);
  const handleCloseModal = useCallback(() => {
    dispatch({
      type: HANDLE_CANDIDATE_MODAL,
    });
  }, []);
  return (
    <ModalWrapper onClick={handleCloseModal}>
      <Container onClick={stopPropagation}>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        {children}
      </Container>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0;
  top: 0;
  right: 10px;
  z-index: 1022;
`;

const CloseButton = styled.button`
  margin: 10px;
  font-weight: 700;
`;
const Container = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  background: #fdf6d8;
  right: 10vh;
  top: 30vh;
  border-radius: 15px;
`;

export default Modal;
