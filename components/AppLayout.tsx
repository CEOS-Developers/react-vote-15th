import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const AppLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 15px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 12fr;
  -webkit-box-shadow: 5px 5px 15px -5px #848281;
  box-shadow: 5px 5px 15px -5px #848281;
`;
export default AppLayout;
