import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Flight from "./modules/Flight";

const Landing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/places" component={App} />
          <Route path="/flights" component={Flight}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Landing;
