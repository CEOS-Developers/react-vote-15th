import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export interface State {
  isLoggedIn: boolean;
}
const initialState = { isLoggedIn: false };

// create your reducer
export const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case "LOGGED_IN":
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};
