import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Create from "./components/Create";
import Edit from "./components/Edit";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/users/create" exact component={Create}/>
      {/* アップデート */}
      <Route path="/users/:id" exact component={Profile}/>
      <Route path="/users/:id/edit" exact component={Edit}/>
    </Switch>
  </Router>
);