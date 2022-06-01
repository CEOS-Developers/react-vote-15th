import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import styled from "styled-components";

const Home = () => {
  const { isLoggedIn, mode } = useSelector<State, State>((state) => state);
  const dispatch = useDispatch();
  const test = () => {
    dispatch({ type: "LOGGED_IN" });
  };
  return (
    <>
      <AppLayout>
        <h1>hahahah</h1>
        <VoteComponent mode={mode} />
      </AppLayout>
    </>
  );
};

const VoteComponent = styled.div<{ mode: boolean }>`
  width: 100px;
  height: 50px;
  background: ${({ mode }) => (mode ? "black" : "red")};
`;

export default Home;
