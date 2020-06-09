import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { fetchGods } from './actions/fetchGods'
import { fetchItems } from './actions/fetchItems'
import GodsContainer from './containers/GodsContainer';
import God from './components/gods/God';
import ItemsContainer from './containers/ItemsContainer';
import BuildsContainer from './containers/BuildsContainer';
import BuildNew from './components/builds/BuildNew';
import Item from './components/items/Item';
import Navbar from './components/navigation/NavBar';
class App extends Component {

  componentDidMount() {
    this.props.fetchGods();
    this.props.fetchItems()
  }

  //   handleLoading = () => {
  //   console.log(this.props.gods.loading)
  //   if (this.props.gods.loading) {
  //     return <div>Loading...</div>
  //   } else {

  //   }
  // }
  render() {
    console.log(`props in app is ${JSON.stringify(this.props)}`)
    // console.log(`stategods in app is ${JSON.stringify(this.state)}`);
    // Do i need a switch?
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/gods" component={GodsContainer} />
          <Route exact path="/builds" component={BuildsContainer} />
          <Route exact path="/builds/new" render={(props) => <BuildNew items={this.props.items} gods={this.props.gods}/> } />
          <Route path="/gods/:god_id" render={(routerProps) => {
            return this.props.gods.loading === 'success' ? <God god={this.props.gods.gods.find(g => {
              return g.god_id == routerProps.match.params.god_id
            })
          }/> :  <div>Loading...</div> 
        }}/> 
          <Route exact path="/items" component={ItemsContainer} />
          <Route path="/items/:item_id" render={(routerProps) => {
            return this.props.items.loading ==='success' ? <Item item={this.props.items.items.find(i => {
              return i.item_id == routerProps.match.params.item_id}) }/> : <div> Loading... </div>
          }}/>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchGods: gods => dispatch(fetchGods()),
    fetchItems: items => dispatch(fetchItems())
  }
}



// export default GodsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default connect(mapStateToProps, {fetchGods})(App)
// export default App;
