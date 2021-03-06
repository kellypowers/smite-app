import React, { Component } from 'react';
import PlayersContainer from './containers/PlayersContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchGods } from './actions/fetchGods'
import { fetchItems } from './actions/fetchItems'
import { fetchBuilds } from './actions/fetchBuilds'
import GodsContainer from './containers/GodsContainer';
import GodRankContainer from './containers/GodRankContainer';
import God from './components/gods/God';
import Player from './components/players/Player';
import PlayerMatches from './components/players/PlayerMatches';
import Match from './components/players/Match';
import Clan from './components/players/Clan';
import ItemsContainer from './containers/ItemsContainer';
import BuildsContainer from './containers/BuildsContainer';
import BuildNew from './components/builds/BuildNew';
import Home from './components/home/Home';
import Build from './components/builds/Build';
import Item from './components/items/Item';

class App extends Component {

  componentDidMount() {
    this.props.fetchGods();
    this.props.fetchItems();
    this.props.fetchBuilds()
  }

  render() {
    return (
      <div>
          <BrowserRouter>
            <Switch>
              <Route path="/gods/:god_id" render={(routerProps) => {
                  return this.props.gods.loading === 'success' ? <God god={this.props.gods.gods.find(g => {
                    return g.god_id == routerProps.match.params.god_id
                    })
                  }/> :  <div>Loading...</div> 
                }}/> 
              <Route exact path="/gods" component={GodsContainer} /> 
              <Route exact path="/build/new" render={(props) =>{
                  if (this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success')
                  return <BuildNew {...props} /> }} />
              <Route path="/builds/:build_id" render={(routerProps) => {
                  return this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success' ? <Build items={this.props.items} gods={this.props.gods} build={this.props.builds.builds.find(b => {
                  return b.id == routerProps.match.params.build_id
                  })
                }/> :  <div>Loading...</div> 
              }}/> 
              <Route exact path="/builds" render={() => {
                if (this.props.builds.loading === 'success' && this.props.gods.loading === 'success' && this.props.items.loading ==='success')
                return <BuildsContainer />
              }}  />
              <Route path="/items/:item_id" render={(routerProps) => {
                return this.props.items.loading ==='success' ? <Item item={Object.values(this.props.items).find(i => {
                  return i.item_id == routerProps.match.params.item_id}) }/> : <div> Loading... </div>
              }}/>
              <Route exact path="/items" component={ItemsContainer} />
              <Route path="/players/find/:portalid/:playername/:playerid/player_matches/:matchid" render= {(routerProps) => {
                return <Match routerProps={routerProps}/>
              } }/>
              <Route exact path="/players/find/:portalid/:playername/:playerid/player_matches" render= {(routerProps) => {
                  return <PlayerMatches routerProps={routerProps} />
                } }/>
              <Route exact path="/players/find/:portalid/:playername/:playerid/god_ranks" render= {(routerProps) => {
                return <GodRankContainer routerProps={routerProps} />
              } }/>
              <Route exact path="/players/find/:portalid/:playername" render= {(routerProps) => {
                    return <Player routerProps={routerProps} />
              } }/>
              <Route exact path="/players/find" component={PlayersContainer}/>
              <Route exact path="/clan/:clanname/:clanid" render= {(routerProps) => {
                    return <Clan routerProps={routerProps} />
              } }/>
              <Route exact path="/" component={Home} />
              {/* <Route component={NoMatch}/> */}
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
};


const mapStateToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    builds: state.builds,
    player: state.player,
    player_matches: state.player_matches,
    match: state.match,
    god_ranks: state.god_ranks,
    clan: state.clan,
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


