import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router";

const Result = () => {
  const router = useRouter();
  const backHome = () => {
    router.push("/vote").then((r) => null);
  };
  return (
    <>
      <AppLayout>
        <button onClick={backHome}>↩️</button>
        <h1>투표 결과 보기 </h1>
      </AppLayout>
    </>
  );
};

export default Result;
