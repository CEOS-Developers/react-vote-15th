import { FC } from "react";
import styled from "styled-components";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Sidebar>
          <div></div>
          <SideButton>
            <button>홈</button>
            <button>메뉴</button>
            <button>메뉴</button>
            <button>메뉴</button>
          </SideButton>
          <div></div>
        </Sidebar>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  border: 1px dotted green;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
const Sidebar = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-rows: 1fr 2fr 4fr;
`;
const SideButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rosybrown;
`;

export default AppLayout;
