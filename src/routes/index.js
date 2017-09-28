import React from "react";
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from "react-router-dom";

import Home from "./Home";

console.log("routes/index has been activated!");

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Home" exact component={Home}/>
      <Route path="/user" exact component={Profile}/>
    </Switch>
  </Router>
);