import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import styled from "styled-components";
import { useRouter } from "next/router";

const Home = () => {
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
      <AppLayout>
        <VoteComponent mode={mode} onClick={askLogin}>
          <H2>프짱 투표 진행중</H2>
        </VoteComponent>
        <h1>투표에 참여해주세요</h1>
      </AppLayout>
    </>
  );
};

const VoteComponent = styled.div<{ mode: boolean }>`
  width: 150px;
  height: 50px;
  text-align: center;
  color: var(--bg-mode1-color1);
  background: ${({ mode }) =>
    mode ? "var(--bg-mode1-color1)" : "var(--bg-mode2-color1)"};
  cursor: pointer;
`;
const H2 = styled.h2`
  color: black;
`;

export default Home;
