import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import Main from "./Main";
import Shops from './Pages/Shops'
import Planets from "./Pages/Planets";
import Schools from "./Pages/Schools";
import Friends from "./Pages/Friends";
import Games from "./Pages/Games";


const App = ({ auth }) => (
  <Router>
    <div className="container has-text-centered">
      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to="/" className="">
            <h1 className="title is-1">Brian's App</h1>
          </Link>
          <Nav />
          {/* <Main /> */}
        </div>
      </div>

      <div className="">
        {!auth.isAuthenticated && <Route exact path="/" component={Login} />}
        {auth.isAuthenticated && <Route exact path="/" component={Main} />}

        {auth.isAuthenticated && <Route exact path="/shops" component={Shops} />}
        {auth.isAuthenticated && <Route exact path="/schools" component={Schools} />}
        {auth.isAuthenticated && <Route exact path="/friends" component={Friends} />}
        {auth.isAuthenticated && <Route exact path="/games" component={Games} />}



        {auth.isAuthenticated && <Route exact path="/planets" component={Planets} />}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </div>
  </Router>
);

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
