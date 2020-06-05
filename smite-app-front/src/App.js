import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import GodsContainer from './containers/GodsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PlayersContainer /> */}
        <GodsContainer gods={this.props.gods}/>
      </div>
    );
  }
};

export default App
