import { FC, MouseEventHandler } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import styled from 'styled-components';
import Clock from './Clock';

interface Props {
  backButton: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Header: FC<Props> = ({ backButton }) => {
  return (
    <HeaderContainer>
      <BackButton onClick={backButton}>
        <IoChevronBack />
      </BackButton>
      <Clock />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fdf6d8;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 0 20px 0 17px;
  width: 100%;
  height: 50px;
`;

const BackButton = styled.button`
  margin-top: 4px;
  font-size: 20px;
`;
