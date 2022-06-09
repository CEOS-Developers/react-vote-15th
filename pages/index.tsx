import AppLayout from "../components/AppLayout";
import MainVoteList from "../components/MainVoteList";
import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

const Home = () => {
  return (
    <>
      <AppLayout>
        <MainVoteList />
      </AppLayout>
    </>
  );
};

export default Home;
