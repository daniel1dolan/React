import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import BaseLayout from "./components/layout/BaseLayout";
import ProjectManagement from "./components/projectManagement/ProjectManagement";
import { createStore } from "redux";
import { Provider } from "react-redux";
import projectReducer from "./components/reducers/projectReducer";

import "bootstrap/dist/css/bootstrap.min.css";

let store = createStore(
  projectReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route
            exact
            path="/projectManagement"
            component={ProjectManagement}
          />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
