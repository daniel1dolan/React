import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BaseLayout from "./components/layout/BaseLayout";
import TodoList from "./components/taskList/TodoList";
import ProjectManagement from "./components/projectManagement/ProjectManagement";
import ContactList from "./components/contacts/ContactList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/todo" component={TodoList} />
        <Route path="/projectmanagement" component={ProjectManagement} />
        <Route path="/contacts" component={ContactList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
