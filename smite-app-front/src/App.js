import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { fetchGods } from './actions/fetchGods'
import GodsContainer from './containers/GodsContainer';

class App extends Component {

  componentDidMount() {
    this.props.fetchGods()
  }
  
  handleLoading = () => {
    console.log(this.props.loading)
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <GodsContainer gods = {this.props.gods} />
    }
  }
  render() {
    console.log(`props in app is ${JSON.stringify(this.props)}`)
    return (
      <div className="App">
        {/* <PlayersContainer /> */}
        {/* <GodsContainer gods={this.props.gods}/> */}
        {this.handleLoading()}
      </div>
    );
  }
};
const mapDispatchToProps = state => {
  return {
    gods: state.gods,
    loading: state.loading
  }
}


export default connect(mapDispatchToProps, {fetchGods})(App)
