import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export interface State {
  mode: boolean;
  isLoggedIn: boolean;
  user: object;
}
const initialState = {
  mode: true,
  isLoggedIn: false,
  user: {},
};

// create your reducer
export const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case "LOGGED_IN":
      return { ...state, isLoggedIn: true };
    case "CHANGE_MODE":
      return { ...state, mode: !state.mode };
    default:
      return state;
  }
};
