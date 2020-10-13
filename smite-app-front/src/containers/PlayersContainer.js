import React, { Component } from 'react'
import PlayerSearch from '../components/players/PlayerSearch'
import Player from '../components/players/Player'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import NavBar from '../components/navigation/NavBar'
import NavBarPlayerScreen from '../components/navigation/NavBarPlayerScreen'

class PlayersContainer extends Component {

  renderNavBar = () => {
    return (
      <div className="player-navbar">
        <div className="player-navbar-left">
          <Link to={`/`}>Home</Link>
        </div>
        <div className="player-navbar-right">
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}`}>Account Info for {this.props.player.Name} </Link> 
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername.replace("%20", "%2520")}/${this.props.player.ActivePlayerId}/player_matches`}>Get Match History For {this.props.player.Name} </Link> 
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/god_ranks`}>Get God Ranks For {this.props.player.Name} </Link>
        </div>
      </div>
      ) 
   }
  
  render() {
    if (this.props.player.loading === 'success' || this.props.player.ActivePlayerId !== undefined) {
      return (
        <div>
          {this.renderNavBar()}
        <div class="players-container">
          <Player routerProps={this.props.routerProps}/>
        </div>
        </div>
      )
    } else {return (
      <div>
          <NavBar />
          <div class="players-container">
    <PlayerSearch/>
    </div>
        </div>)

  }
  }
}

const mapStateToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    player: state.player,
    player_matches: state.player_matches,
    god_ranks: state.god_ranks,
    loading: state.loading
  }
};

export default connect(mapStateToProps)(PlayersContainer);
