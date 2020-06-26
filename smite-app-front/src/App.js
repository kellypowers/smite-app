import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout} from './components/home/Layout';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { fetchGods } from './actions/fetchGods'
import { fetchItems } from './actions/fetchItems'
import { fetchBuilds } from './actions/fetchBuilds'
import GodsContainer from './containers/GodsContainer';
import God from './components/gods/God';
import Player from './components/players/Player';
import PlayerMatches from './components/players/PlayerMatches';
import Match from './components/players/Match';
import Clan from './components/players/Clan';
import GodRanks from './components/players/GodRanks';
import ItemsContainer from './containers/ItemsContainer';
import BuildsContainer from './containers/BuildsContainer';
import BuildNew from './components/builds/BuildNew';
import Home from './components/home/Home';
import Build from './components/builds/Build';
import Item from './components/items/Item';
import Navigationbar from './components/navigation/NavBar';

class App extends Component {

  componentDidMount() {
    this.props.fetchGods();
    this.props.fetchItems();
    this.props.fetchBuilds()
  }

  
  render() {
    return (
      // <React.Fragment>
      <div>
        <Navigationbar />
        <Layout >
          <BrowserRouter>
            {/* <Switch> */}
              {/* <div className="App"> */}
                <Route exact path="/" component={Home} />
                <Route exact path="/gods" component={GodsContainer} />
                <Route path="/gods/:god_id" render={(routerProps) => {
                  return this.props.gods.loading === 'success' ? <God god={this.props.gods.gods.find(g => {
                    return g.god_id == routerProps.match.params.god_id
                    })
                  }/> :  <div>Loading...</div> 
                }}/> 
                <Route exact path="/builds" render={() => {
                  if (this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success')
                  return <BuildsContainer />
                }}  />
                <Route exact path="/build/new" render={(props) =>{
                  if (this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success')
                  return <BuildNew items={this.props.items} gods={this.props.gods}/> }} />
                <Route path="/builds/:build_id" render={(routerProps) => {
                  return this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success' ? <Build items={this.props.items} gods={this.props.gods} build={this.props.builds.builds.find(b => {
                    b.god_id_smite =  Object.values(this.props.gods.gods).find(g => g.god_id == b.god_id_smite);
                    console.log("items is " + JSON.stringify(this.props.items));
                    b.item1= Object.values(this.props.items).find(i => i.name == b.item1);
                    b.item2 = Object.values(this.props.items).find(i => i.name == b.item2);
                    b.item3 = Object.values(this.props.items).find(i => i.name == b.item3);
                    b.item4 = Object.values(this.props.items).find(i => i.name == b.item4);
                    b.item5 = Object.values(this.props.items).find(i => i.name == b.item5);
                    b.item6 = Object.values(this.props.items).find(i => i.name == b.item6);
                    return b.id == routerProps.match.params.build_id
                    })
                  }/> :  <div>Loading...</div> 
                }}/> 
                <Route exact path="/items" component={ItemsContainer} />
                <Route path="/items/:item_id" render={(routerProps) => {
                  return this.props.items.loading ==='success' ? <Item item={Object.values(this.props.items).find(i => {
                    return i.item_id == routerProps.match.params.item_id}) }/> : <div> Loading... </div>
                }}/>
                <Route exact path="/players/find" component={PlayersContainer}/>
                <Route exact path="/godranks" render={(props) =>{
                  if (this.props.god_ranks.loading === 'success' && this.props.gods.loading === 'success' ==='success')
                  return <GodRanks god_ranks={this.props.god_ranks} gods={this.props.gods}/> }} />
                <Route exact path="/account_info" render= {() => {
                    if (this.props.player.loading === 'success' || this.props.player.ActivePlayerId !== undefined) {
                      return <Player player={this.props.player} />} 
                      // else {return <PlayersContainer/>}
                } }/>
                <Route exact path="/player_matches" render= {() => {
                    if (this.props.player_matches.loading === 'success') {
                      return <PlayerMatches player_matches={this.props.player_matches} />}
                } }/>
                <Route exact path="/match" render= {() => {
                    if (this.props.match.loading === 'success') {
                      return <Match match={this.props.match} />}
                } }/>
                <Route exact path="/clan" render= {() => {
                    if (this.props.clan.loading === 'success') {
                      return <Clan clan={this.props.clan} />}
                } }/>
                {/* <Route component={NoMatch}/> */}
              {/* </div> */}
            {/* </Switch> */}
          </BrowserRouter>
        </Layout>
        </div>
      // </React.Fragment>
    );
  }
};


const mapStateToProps = state => {
  // console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    builds: state.builds,
    player: state.player,
    player_matches: state.player_matches,
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


