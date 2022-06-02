import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import styled from "styled-components";
import { useRouter } from "next/router";
import MainVoteList from "../components/MainVoteList";

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
