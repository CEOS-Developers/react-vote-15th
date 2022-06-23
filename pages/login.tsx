import AppLayout from '../components/AppLayout';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState, LOG_IN_REQUEST } from '../reducers';
import useInput from '../hooks/useInput';
import { AccessButton, PageTitle, TextInput } from 'styles/CommonStyle';
import Header from 'components/common/Header';

const Login = () => {
  const { logInDone, logInError } = useSelector<IState, IState>(
    (state) => state
  );

  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();
  const router = useRouter();
  const backHome = () => {
    router.push('/').then((r) => null);
  };
  const askSignup = (): void => {
    router.push('/signup').then((r) => null);
  };

  const submitLogInForm = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      const data = {
        username,
        password,
      };

      dispatch({
        type: LOG_IN_REQUEST,
        data,
      });
    },
    [username, password]
  );
  useEffect(() => {
    if (logInDone) {
      router.push('/').then(() => null);
    }
    if (logInError) {
      alert('아이디 비밀번호를 다시 확인해주세요');
    }
  }, [logInDone, logInError]);
  return (
    <>
      <AppLayout>
        <Header backButton={backHome} />
        <Wrapper>
          <PageTitle>Login</PageTitle>
          <LogInFormStyle onSubmit={submitLogInForm} action="">
            <TextInput
              type="text"
              placeholder="아이디"
              onChange={onChangeUsername}
              required
            />
            <TextInput
              type="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
              required
            />
            <AccessButton>로그인</AccessButton>
          </LogInFormStyle>
          <button onClick={askSignup}>회원이 아니신가요?</button>
        </Wrapper>
      </AppLayout>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 12px 0 12px;
  grid-template-rows: 2fr 5.5fr 1.5fr;
`;

const LogInFormStyle = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 0 15px 0 15px;
`;

export default React.memo(Login);
