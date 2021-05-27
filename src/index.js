import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./Container/store/index";
import MainPage from "../src/Container/service/index";

const initialState = {};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
