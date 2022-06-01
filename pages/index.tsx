import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";

const Home = () => {
  const { isLoggedIn } = useSelector<State, State>((state) => state);
  const dispatch = useDispatch();
  const test = () => {
    dispatch({ type: "LOGGED_IN" });
  };
  return (
    <>
      <AppLayout>
        <h1>contents</h1>
        <button>새로운 투표 만들기</button>
        <button onClick={test}>button</button>
        {isLoggedIn ? "true" : "false"}
      </AppLayout>
    </>
  );
};

export default Home;
