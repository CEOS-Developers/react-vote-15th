import AppLayout from "../../components/AppLayout";
import { useRouter } from "next/router";

const Get = () => {
  const router = useRouter();
  const backHome = () => {
    router.push("/vote").then((r) => null);
  };
  return (
    <>
      <AppLayout>
        <button onClick={backHome}>↩️</button>
        <h1>현황</h1>
      </AppLayout>
    </>
  );
};

export default Get;
