import AppLayout from '../components/AppLayout';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { IState, SIGN_UP_REQUEST } from '../reducers';
import { AccessButton, PageTitle, TextInput } from 'styles/CommonStyle';
import Header from 'components/common/Header';
import { toast } from 'react-toastify';
const Signup = () => {
  const { signUpError, signUpDone } = useSelector<IState, IState>(
    (state) => state
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const [passwordError, setPwdError] = useState(false);
  const [passwordCheck, setPwdCheck] = useState('');

  const [email, onChangeEmail] = useInput('');
  const [username, onChangeUser] = useInput('');
  const [password, onChangePwd] = useInput('');

  const onChangePwdCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setPwdError(e.target.value !== password);
      setPwdCheck(e.target.value);
    },
    [passwordCheck, password]
  );

  const backHome = () => {
    router.push('/').then((r) => null);
  };
  const submitSignUpForm = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      const data = {
        username,
        password,
        email,
      };
      dispatch({
        type: SIGN_UP_REQUEST,
        data,
      });
    },
    [username, password, passwordCheck, email]
  );

  useEffect(() => {
    if (signUpDone) {
      router.push('/login').then((r) =>
        toast('회원 가입이 완료 됐습니다. 로그인 페이지로 이동합니다.', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
    }
    if (signUpError) {
      toast('값이 잘못 입력 됐습니다.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [signUpError, signUpDone]);
  return (
    <>
      <AppLayout>
        <Header backButton={backHome} />
        <Wrapper>
          <PageTitle>Sign Up</PageTitle>
          <LogInFormStyle onSubmit={submitSignUpForm} action="">
            <TextInput
              type="text"
              onChange={onChangeUser}
              value={username}
              placeholder="아이디"
              required
            />
            <TextInput
              onChange={onChangeEmail}
              value={email}
              type="email"
              placeholder="이메일"
              required
            />
            <TextInput
              type="password"
              onChange={onChangePwd}
              value={password}
              placeholder="비밀번호"
              required
            />
            <TextInput
              type="password"
              onChange={onChangePwdCheck}
              value={passwordCheck}
              placeholder="비밀번호 확인"
              required
            />
            {passwordError && (
              <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
            )}
            <StyledButton>
              <AccessButton>회원가입</AccessButton>
            </StyledButton>
          </LogInFormStyle>
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
  grid-template-rows: 2fr 7fr;
`;

const LogInFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 15px 0 15px;
`;

const StyledButton = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export default Signup;
