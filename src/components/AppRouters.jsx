import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Banana from "../pages/Fruits/Banana";
import Orange from "../pages/Fruits/Orange";
import Peach from "../pages/Fruits/Peach";
import Pear from "../pages/Fruits/Pear";
import Main from "../pages/Main";

function AppReducers () {
  return(
    <Switch>
      <Route path="/" component={Main} exact/>
      <Route path="/banana" component={Banana} exact/>
      <Route path="/orange" component={Orange} exact/>
      <Route path="/pear" component={Pear} exact/>
      <Route path="/peach" component={Peach} exact/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppReducers;