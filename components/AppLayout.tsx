import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";

type Props = {
  children: React.ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
  const { isLoggedIn, mode } = useSelector<State, State>((state) => state);
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
      type: "CHANGE_MODE",
    });
  };

  return (
    <>
      <Wrapper isMobile>
        <Header>
          <button onClick={changeMode}>모드 변경</button>
          <div>시계</div>
        </Header>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<{ isMobile: boolean }>`
  width: 500px;
  height: 500px;

  display: grid;
  grid-template-rows: 1fr 12fr;
  -webkit-box-shadow: 5px 5px 15px -5px #000000;
  box-shadow: 5px 5px 15px -5px #000000;
`;
const Header = styled.div`
  border: 2px dotted gold;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export default AppLayout;
