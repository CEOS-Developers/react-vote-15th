import { createStore, AnyAction, Store, applyMiddleware, compose } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { Task } from "redux-saga";

declare module "redux" {
  export interface Store {
    sagaTask?: Task;
  }
}

import { reducer } from "../reducers";
import { rootSaga } from "../sagas";

const configureStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  // 에디터에서 줄 긋는 거라서 무시 가능, 저거 줄 나오게 만든 redux 관리자가 스택 오버플로우에 무시 해도 된다고 글 썼음
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware?.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
