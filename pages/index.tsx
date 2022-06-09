import AppLayout from "../components/AppLayout";
import MainVoteList from "../components/MainVoteList";
import axios from "axios";
import { backUrl } from "../config/config";
import { useSelector } from "react-redux";
import { IState } from "../reducers";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

const Home = () => {
  const { isLoggedIn, mode, user } = useSelector<IState, IState>(
    (state) => state
  );

  return (
    <>
      <AppLayout>
        <MainVoteList />
      </AppLayout>
    </>
  );
};

export default Home;
