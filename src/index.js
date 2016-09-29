import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import store from "./store";
import "./index.styl";

const app = <Provider store={store}>
  <App /> 
</Provider>

ReactDOM.render(
  app,
  document.getElementById("root")
);
