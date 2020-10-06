import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Flight from "./modules/Flight";
import Booking from "./modules/Book";

const Landing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/places" component={App} />
          <Route path="/kids" component={Flight}/>
          <Route path="/book" component={Booking}/>

        </Switch>
      </Router>
    </div>
  );
};

export default Landing;
