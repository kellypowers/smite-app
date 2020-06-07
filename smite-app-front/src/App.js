import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { fetchGods } from './actions/fetchGods'
import GodsContainer from './containers/GodsContainer';
import Gods from './components/gods/Gods';
import God from './components/gods/God';
import ItemsContainer from './containers/ItemsContainer';
import Items from './components/items/Items';
import Item from './components/items/Item';
import Navbar from './components/navigation/NavBar';
class App extends Component {

  
  render() {
    console.log(`props in app is ${JSON.stringify(this.props)}`)
    console.log(`stategods in app is ${JSON.stringify(this.state)}`);
    return (
      <BrowserRouter>
        <div>
        <Navbar />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/gods" component={GodsContainer} />
          {/* <Route path='/gods' render={routerProps => <Gods {...routerProps} gods={this.props.gods}/>} /> */}
          <Route exact path="/items" component={ItemsContainer} />
        </div>
    </BrowserRouter>
    
    );
  }
};



const mapStateToProps = state => {
  console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    // this will be selector.gods
    loading: state.loading
  }
}



// export default GodsContainer;
export default connect(mapStateToProps)(App)

// export default connect(mapDispatchToProps, {fetchGods})(App)
// export default App;
