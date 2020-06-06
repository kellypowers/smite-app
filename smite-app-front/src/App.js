import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import GodsContainer from './containers/GodsContainer';

class App extends Component {

  componentDidMount() {
    this.props.fetchGods()
  }
  
  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <GodsContainer ={this.props.gods} />
    }
  }
  render() {
    return (
      <div className="App">
        {/* <PlayersContainer /> */}
        {/* <GodsContainer gods={this.props.gods}/> */}
        {this.handleLoading()}
      </div>
    );
  }
};

export default App
