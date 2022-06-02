import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import { useRouter } from "next/router";
import Image from "next/image";
import frontUrl from "../public/front.png";
import backUrl from "../public/back.png";
import ceosUrl from "../public/ceos.png";

const MainVoteList = () => {
  interface INames {
    first: string;
    second: string;
    third: string;
  }

  const names: INames = {
    first: "프론트장 투표",
    second: "백엔드장 투표",
    third: "CEOS 회장단 투표",
  };

  const { isLoggedIn, mode } = useSelector<State, State>((state) => state);
  const router = useRouter();
  const dispatch = useDispatch();

  const askLogin = (): void => {
    if (!isLoggedIn) {
      const res = confirm("로그인이 필요합니다.");
      if (res) {
        router.push("/login").then((r) => null);
      }
    } else {
      router.push("/vote").then((r) => null);
    }
  };

  return (
    <>
      <Wrapper>
        <TimeLine>
          <div></div>
          <LineContainer>
            <OuterCircle active>
              <InnerCircle active />
            </OuterCircle>
            <Line />
          </LineContainer>
          <LineContainer>
            <OuterCircle>
              <InnerCircle />
            </OuterCircle>
            <Line />
          </LineContainer>
          <LineContainer>
            <OuterCircle>
              <InnerCircle />
            </OuterCircle>
            <Line />
          </LineContainer>
        </TimeLine>
        <Contents>
          <LoggerContainer>Feed</LoggerContainer>
          <CardContainer>
            <div>
              <Span active front>
                A moment{" "}
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
    </>
  );
};

const ImgStyle = {
  borderRadius: "50%",
};

const LoggerContainer = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100%;
`;
const MainVoteCard = styled.div<{ active?: boolean; mode?: boolean }>`
  width: 100%;
  height: 100%;
  background: var(--bg-mode-gray);
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-size: 24px;
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
  border-radius: 12px;
`;

const Span = styled.span<{ front?: boolean; mode?: boolean; active?: boolean }>`
  font-weight: ${({ front }) => (front ? "700" : "500")};
  opacity: ${({ active }) => (active ? "90%" : "30%")};
`;

const CardContainer = styled.div`
  width: 100%;
  height: 70%;

  display: grid;
  grid-template-rows: 1fr 3fr;
`;
const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TimeLine = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr;
`;
const Contents = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr;
`;

const Line = styled.div`
  height: 100%;
  width: 0;
  border: 1px solid var(--bg-mode-gray);
`;

const VoteName = styled.div<{ mode?: boolean; active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bg-mode-black);
`;

const OuterCircle = styled.div<{ active?: boolean; mode?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ active }) =>
    active ? "var(--bg-mode-black)" : "var(--bg-mode-gray)"};
`;
const InnerCircle = styled.div<{ active?: boolean; mode?: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ active }) =>
    active ? "var(--bg-mode-gray)" : "var(--bg-mode-black)"};
`;

export default MainVoteList;
