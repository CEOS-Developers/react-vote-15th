import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../reducers';
import { useRouter } from 'next/router';
import Image from 'next/image';
import frontUrl from '../public/front.png';
import backUrl from '../public/back.png';
import ceosUrl from '../public/ceos.png';
import { PageTitle } from 'styles/CommonStyle';
import Header from './common/Header';
import React from 'react';

const MainVoteList = () => {
  interface INames {
    first: string;
    second: string;
    third: string;
  }

  const names: INames = {
    first: '프론트장 투표',
    second: '백엔드장 투표',
    third: 'CEOS 회장단 투표',
  };

  const { user, mode } = useSelector<IState, IState>((state) => state);
  const router = useRouter();

  const askLogin = (): void => {
    if (!user) {
      const res = confirm('로그인이 필요합니다.');
      if (res) {
        router.push('/login').then((r) => null);
      }
    } else {
      router.push('/vote').then((r) => null);
    }
  };

  const backHome = () => {
    router.push('/').then((r) => null);
  };

  return (
    <>
      <Header backButton={backHome} />
      <Container>
        <Wrapper>
          <Contents>
            <PageTitle>Vote</PageTitle>
            <CardContainer>
              <div>
                <Span active front>
                  A moment{' '}
                </Span>
                <Span active>ago</Span>
              </div>
              <MainVoteCard onClick={askLogin} active>
                <VoteThumbNailContainer>
                  <VoteThumbNail>
                    <Image
                      src={frontUrl}
                      alt="front"
                      width="50px"
                      height="50px"
                      style={ImgStyle}
                    />
                  </VoteThumbNail>
                </VoteThumbNailContainer>
                <VoteName>{names.first}</VoteName>
              </MainVoteCard>
            </CardContainer>
            <CardContainer>
              <div>
                <Span front>12 minutes </Span>
                <Span>ago</Span>
              </div>
              <MainVoteCard>
                <VoteThumbNailContainer>
                  <VoteThumbNail>
                    <Image
                      src={backUrl}
                      style={ImgStyle}
                      alt="back"
                      width="100%"
                      height="100%"
                    />
                  </VoteThumbNail>
                </VoteThumbNailContainer>
                <VoteName>{names.second}</VoteName>
              </MainVoteCard>
            </CardContainer>
            <CardContainer>
              <div>
                <Span front>5 hours </Span>
                <Span>ago</Span>
              </div>
              <MainVoteCard>
                <VoteThumbNailContainer>
                  <VoteThumbNail>
                    <Image
                      src={ceosUrl}
                      style={ImgStyle}
                      alt="ceos"
                      width="50px"
                      height="50px"
                    />
                  </VoteThumbNail>
                </VoteThumbNailContainer>
                <VoteName>{names.third}</VoteName>
              </MainVoteCard>
            </CardContainer>
          </Contents>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow: auto;
`;

const ImgStyle = {
  borderRadius: '50%',
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: auto;
`;
const MainVoteCard = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 100%;
  background: #f6f6f4;
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  font-size: 24px;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  border-radius: 15px;
`;

const Span = styled.span<{ front?: boolean; active?: boolean }>`
  font-weight: ${({ front }) => (front ? '700' : '500')};
  opacity: ${({ active }) => (active ? '90%' : '30%')};
`;

const CardContainer = styled.div`
  width: 100%;
  height: 70%;

  display: grid;
  grid-template-rows: 1fr 3fr;
`;

const VoteThumbNailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VoteThumbNail = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const Contents = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr;
`;

const VoteName = styled.div<{ mode?: boolean; active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bg-mode-black);
  font-weight: 500;
`;

export default React.memo(MainVoteList);
