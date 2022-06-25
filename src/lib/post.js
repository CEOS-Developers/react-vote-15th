import axios from "axios";

// promise 요청 타임아웃 시간 선언
const TIME_OUT = 300 * 1000;

// 백으로 요청할 promise
const requestPromise = (link, credentials) => {
  return new Promise((resolve, reject) => {
    axios
      .post(link, credentials)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

// promise 타임아웃 처리
const timeoutPromise = () => {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), TIME_OUT)
  );
};

// promise 요청
const getPromise = async (link, credentials) => {
  return await Promise.race([
    requestPromise(link, credentials),
    timeoutPromise(),
  ]);
};

export const customPost = async (link, credentials) => {
  const res = await getPromise(link, credentials).catch(() => {
    return { message: "REJECT" };
  });

  if (res.status === 200) {
    return res.data;
  } else {
    return { message: "REJECT" };
  }
};
