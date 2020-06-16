import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout} from './components/home/Layout';
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
import Home from './components/home/Home';
import Player from './components/players/Player';
import Build from './components/builds/Build';
import Item from './components/items/Item';
import Navigationbar from './components/navigation/NavBar';
// import SmiteBackground from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/SmiteBackground.png'
// let sectionStyle = {
//   backgroundImage: `url(${SmiteBackground})`,
//   backgroundPosition:'fixed', 
//   backgroundRepeat: 'no-repeat'
  
// }
class App extends Component {

  componentDidMount() {
    this.props.fetchGods();
    this.props.fetchItems();
    this.props.fetchBuilds()
  }

  
  render() {
    return (
      <React.Fragment>
        <Navigationbar />
        {/* <div className="app" style={sectionStyle}> */}
        <Layout >
          <BrowserRouter>
            {/* <Switch> */}
              {/* <div className="App"> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/gods" component={GodsContainer} />
                <Route exact path="/builds" render={(props) => {
                  if (this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success')
                  return <BuildsContainer />
                }}  />
                {/* builds to render gods bbefore load */}
                <Route exact path="/build/new" render={(props) =>{
                  if (this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success')
                  return <BuildNew items={this.props.items} gods={this.props.gods}/> }} />
                <Route path="/builds/:build_id" render={(routerProps) => {
                  return this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success' ? <Build items={this.props.items} gods={this.props.gods} build={Object.values(this.props.builds).find(b => {
                    // b.god_id_smite =  this.props.gods.gods.find(g => g.god_id == b.god_id_smite);
                    // for (let i=0; i<b.items.length; i++) {return b.item[i] = this.props.items.find(i=> i.name === b.item[i])}
                    // make these liiks to the actual item ogject IN TJE COMPONENT
                    // b.item1= this.props.items.find(i => i.name == b.item1);
                    // b.item2 = this.props.items.find(i => i.name == b.item2);
                    // b.item3 = this.props.items.find(i => i.name == b.item3);
                    // b.item4 = this.props.items.find(i => i.name == b.item4);
                    // b.item5 = this.props.items.find(i => i.name == b.item5);
                    // b.item6 = this.props.items.find(i => i.name == b.item6);
                    return b.id === routerProps.match.params.build_id
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
                  return this.props.items.loading ==='success' ? <Item item={this.props.items.find(i => {
                    return i.item_id == routerProps.match.params.item_id}) }/> : <div> Loading... </div>
                }}/>
                <Route exact path="/players/find" component={PlayersContainer}/>
                {/* <Route exact path="/player" render= {() => {
                    if (this.props.player.loading === 'success') {
                      return <Player player={this.props.player} />}
                } }/> */}
                
                {/* <Route component={NoMatch}/> */}
              {/* </div> */}
            {/* </Switch> */}
          </BrowserRouter>
        </Layout>
        {/* </div> */}
      </React.Fragment>
    );
  }
};


const mapStateToProps = state => {
  console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    builds: state.builds,
    player: state.player,
    playerMatches: state.playerMatches,
    match: state.match,
    god_ranks: state.god_ranks,
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


export default connect(mapStateToProps, mapDispatchToProps)(App)


