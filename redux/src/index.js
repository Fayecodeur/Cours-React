import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { store } from "./store.js";
import Provider from "react-redux";
ReactDOM.render(<App />, document.getElementById("root"));
