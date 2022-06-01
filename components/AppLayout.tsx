import { FC } from "react";
import styled from "styled-components";
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
  const pathname = router.pathname;
  const changeMode = (): void => {
    dispatch({
      type: "CHANGE_MODE",
    });
  };
  return (
    <>
      <Wrapper>
        <Header>
          <button onClick={changeMode}>모드 변경</button>
          <div>시계</div>
        </Header>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 375px;
  height: 500px;
  border: 1px dotted green;
  display: grid;
  grid-template-rows: 1fr 12fr 2fr;
`;
const Header = styled.div`
  border: 2px dotted gold;
  display: flex;
  justify-content: space-between;
`;

export default AppLayout;
