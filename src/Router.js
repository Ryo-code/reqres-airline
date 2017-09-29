import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Create from "./components/Create";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/user/create" exact component={Create}/>
      <Route path="/user/:id" exact component={Profile}/>
      <Route path="/user/:id" exact component={Profile}/>
    </Switch>
  </Router>
);