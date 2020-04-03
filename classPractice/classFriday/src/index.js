import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BaseLayout from "./components/layout/BaseLayout";
import TodoList from "./components/taskList/TodoList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/todo" component={TodoList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
