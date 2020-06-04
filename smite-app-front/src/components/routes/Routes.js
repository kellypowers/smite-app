import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Player from './components/players/Player';
// import About from './container/About';
// import Login from './container/Login';
// import Signup from './container/SignUp';
// import Navigation from './components/navigation/Navigation';
import GodsContainer from './container/GodsContainer'

import './components/App.css';
class Routes extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/gods" component={GodsContainer} />
          <Route exact path="/player" component={Player} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Routes