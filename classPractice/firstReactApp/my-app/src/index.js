import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Virus from "./components/Virus";
import * as serviceWorker from "./serviceWorker";
import data from "./data/virus";

ReactDOM.render(
  <div className="row">
    <App name="Sean" price={10.99} />
    <Virus virus={data[0].virus} country={data[0].country} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
