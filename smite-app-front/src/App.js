import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { fetchGods } from './actions/fetchGods'
import { fetchItems } from './actions/fetchItems'
import { fetchBuilds } from './actions/Builds'
import GodsContainer from './containers/GodsContainer';
import God from './components/gods/God';
import ItemsContainer from './containers/ItemsContainer';
import BuildsContainer from './containers/BuildsContainer';
import BuildNew from './components/builds/BuildNew';
import Build from './components/builds/Build';
import Item from './components/items/Item';
import Navbar from './components/navigation/NavBar';
class App extends Component {

  componentDidMount() {
    this.props.fetchGods();
    this.props.fetchItems();
    this.props.fetchBuilds()
  }

  //   handleLoading = () => {
  //   console.log(this.props.gods.loading)
  //   if (this.props.gods.loading) {
  //     return <div>Loading...</div>
  //   } else {

  //   }
  // }
  render() {
    // console.log(`props in app is ${JSON.stringify(this.props)}`)
    // console.log(`stategods in app is ${JSON.stringify(this.state)}`);
    // Do i need a switch?
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/gods" component={GodsContainer} />
          <Route exact path="/builds" component={BuildsContainer} />
          {/* builds to render gods bbefore load */}
          <Route exact path="/build/new" render={(props) =>{
            if (this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success')
             return <BuildNew items={this.props.items} gods={this.props.gods}/> }} />
          <Route path="/builds/:build_id" render={(routerProps) => {
            return this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success' ? <Build items={this.props.items} gods={this.props.gods} build={this.props.builds.builds.find(b => {
              // b.god_id_smite =  this.props.gods.gods.find(g => g.god_id == b.god_id_smite);
              b.item1= this.props.items.items.find(i => i.name == b.item1);
              b.item2 = this.props.items.items.find(i => i.name == b.item2);
              b.item3 = this.props.items.items.find(i => i.name == b.item3);
              b.item4 = this.props.items.items.find(i => i.name == b.item4);
              b.item5 = this.props.items.items.find(i => i.name == b.item5);
              b.item6 = this.props.items.items.find(i => i.name == b.item6);
              return b.id == routerProps.match.params.build_id
              
            })
          }/> :  <div>Loading...</div> 
        }}/> 
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
          <Route exact path="/players/find" component={PlayersContainer}/>
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
    builds: state.builds,
    // this will be selector.gods
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGods: gods => dispatch(fetchGods()),
    fetchItems: items => dispatch(fetchItems()),
    fetchBuilds: builds => dispatch(fetchBuilds())
  }
}



// export default GodsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default connect(mapStateToProps, {fetchGods})(App)
// export default App;
