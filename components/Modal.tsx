import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { HANDLE_CANDIDATE_MODAL } from "../reducers";
import { useDispatch } from "react-redux";

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
        <button onClick={handleCloseModal}>❌</button>
        {children}
      </Container>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  text-align: center;
  left: 0px;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
`;

//
const Container = styled.div`
  width: 200px;
  height: 70px;
  border: 1px solid red;
  position: absolute;
  background: red;
  right: 100px;
  top: 50vh;
`;

export default Modal;
