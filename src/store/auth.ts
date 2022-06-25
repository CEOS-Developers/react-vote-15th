import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../lib/interface";

export const TOKEN_TIME_OUT = 600 * 1000;

const initialState: authState = {
  authenticated: false,
  accessToken: null,
  expireTime: null,
};

export const tokenSlice = createSlice({
  name: "authToken",
  initialState: initialState,
  reducers: {
    SET_TOKEN: (state: authState, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    },
    DELETE_TOKEN: (state: authState) => {
      state.authenticated = false;
      state.accessToken = null;
      state.expireTime = null;
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;
