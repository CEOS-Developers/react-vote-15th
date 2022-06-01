import { createStore, AnyAction, Store, applyMiddleware, compose } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";

import { reducer } from "../reducers";
import { rootSaga } from "../sagas";

const configureStore = (context: Context) => {
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware())
      : composeWithDevTools(applyMiddleware());
  const store = createStore(reducer, enhancer);
  return store;
};

export const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
