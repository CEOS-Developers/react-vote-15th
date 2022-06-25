import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VotePage from "./pages/VotePage";
import VoteResult from "./pages/VoteResult";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./Global.css";
import theme from "./lib/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="" element={<HomePage />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="vote" element={<VotePage />} />
                <Route path="voteResult" element={<VoteResult />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
