import { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../reducers';
import Clock from './common/Clock';
import { IoChevronBack } from 'react-icons/io5';
import Header from './common/Header';

type Props = {
  children: React.ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Wrapper isMobile>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.div<{ isMobile: boolean }>`
  width: 500px;
  height: 700px;
  border-radius: 15px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 12fr;
  -webkit-box-shadow: 5px 5px 15px -5px #848281;
  box-shadow: 5px 5px 15px -5px #848281;
`;

const Container = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow: auto;
`;

export default AppLayout;
