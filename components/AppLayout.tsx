import { FC } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import React from "react";
type Props = {
    children: React.ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <>
            <Wrapper>
                <Header>
                    <div>LG U+</div>
                    <div>시계</div>
                </Header>
                {children}
                <Footer>
                        <button>홈</button>
                        <button>메뉴</button>
                        <button>메뉴</button>
                        <button>메뉴</button>
                </Footer>
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
`
const Footer = styled.div`
  
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  
`;
const FootButtonWrapper = styled.div`
  display: flex;
  
  justify-content: space-between;
  border: 1px solid rosybrown;
`;

export default AppLayout;