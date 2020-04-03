import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./Todo/AboutUs";
import ContactUs from "./Todo/ContactUs";
import BaseLayout from "./Todo/layout/BaseLayout";
import Blogs from "./Todo/Blogs";
import NoMatch from "./Todo/NoMatch";
import CoronaData from "./CoronaData";
import Forms from "./Forms";
import LiftingState from "./LiftingState";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect from="/aboutus" to="/" />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/blogs/:blogID" component={Blogs} />
        <Route path="/corona" component={CoronaData} />
        <Route path="/forms" component={Forms} />
        <Route path="/liftingstate" component={LiftingState} />
        <Route component={NoMatch} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
