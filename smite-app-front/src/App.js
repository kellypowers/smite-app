import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchGods } from './actions/fetchGods'
import GodsContainer from './containers/GodsContainer';
import ItemsContainer from './containers/ItemsContainer';

class App extends Component {

  // componentDidMount() {
  //   this.props.fetchGods()
  // }
  
  // handleLoading = () => {
  //   console.log(this.props.gods.loading)
  //   if (this.props.gods.loading) {
  //     return <div>Loading...</div>
  //   } else {
  //     return <GodsContainer gods = {this.props.gods} />
  //   }
  // }
  render() {
    console.log(`props in app is ${JSON.stringify(this.props)}`)

    return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>
    );
    // return (
    //   <div className="App">
    //     {/* <PlayersContainer /> */}

    //     {this.handleLoading()}
    //   </div>
    // );
  }
};
// const mapDispatchToProps = state => {
//   return {
//     gods: state.gods,
//     items: state.items,
//     loading: state.loading
//   }
// }


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
