import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchGods } from './actions/fetchGods'
import GodsContainer from './containers/GodsContainer';
import ItemsContainer from './containers/ItemsContainer';

class App extends Component {

  
  render() {
    console.log(`props in app is ${JSON.stringify(this.props)}`)

    return (
      <div className="App">
        <BrowserRouter>
            <Main />
        </BrowserRouter>
      </div>
    );
  }
};



const Main = () =>
(
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    <Route exact path="/gods" component={GodsContainer} />
    <Route exact path="/items" component={ItemsContainer} />
  </Switch>
)

// export default connect(mapDispatchToProps, {fetchGods})(App)
export default App;
