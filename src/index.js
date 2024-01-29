import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./configureStore.ts";
import { ConnectedRouter } from "connected-react-router";
import history from "./history.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const initialState = {};
const store = configureStore(initialState, history);

root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
