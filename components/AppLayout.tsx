import { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../reducers';
import Clock from './common/Clock';

type Props = {
  children: React.ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
  const { mode } = useSelector<IState, IState>((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  // const [isMobile, setIsMobile] = useState(false);
  // const _handleResize = () => {
  //   if (window.innerWidth <= 500) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };
  //
  // useEffect(() => {
  //   if (window.innerWidth <= 500) {
  //     setIsMobile(true);
  //   }
  //   window.addEventListener("resize", _handleResize);
  //   return () => {
  //     window.removeEventListener("resize", _handleResize);
  //   };
  // }, []);

  const changeMode = (): void => {
    dispatch({
      type: 'CHANGE_MODE',
    });
  };

  return (
    <>
      <Wrapper isMobile>
        <Header>
          <button onClick={changeMode}>모드 변경</button>
          <Clock />
        </Header>
        <Container>{children}</Container>
      </Wrapper>
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
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fdf6d8;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 0 20px 0 17px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow: auto;
`;

export default AppLayout;
