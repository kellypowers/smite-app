import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMatches } from '../../actions/fetchPlayerMatches'
import PlayerMatch from './PlayerMatch';
import AccountNavBar from './account/AccountNavBar'


class PlayerMatches extends Component {

  componentWillMount(){
    // console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
    this.props.fetchPlayerMatches(this.props.routerProps.match.params.playerid)
  }

  render() {
    const player_matches = Object.values(this.props.player_matches).slice(0, 45);
    console.log(`playermayches is ${JSON.stringify(player_matches)}`)
    if (this.props.player_matches.loading === 'success') {
      return (
        <div>
          <AccountNavBar 
            player={this.props.player} 
            portalid={this.props.routerProps.match.params.portalid} 
            playername={this.props.routerProps.match.params.playername}
            playerid={this.props.routerProps.match.params.playerid}
          />
          <div className="player-matches-container">
            <h3>Match Info for {this.props.routerProps.match.params.playername}</h3>
            {player_matches.map(m => <PlayerMatch player={this.props.player} portalid={this.props.routerProps.match.params.portalid} playername={this.props.routerProps.match.params.playername.replace("%20", "%2520")} playerid={this.props.routerProps.match.params.playerid} gods={this.props.gods.gods} matches={m}  key={m.Match}/>)}
          </div>
        </div>
      )
    } else{return "Loading..."}
    }
};
const mapStateToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    builds: state.builds,
    player: state.player,
    player_matches: state.player_matches,
    clan: state.clan,
    loading: state.loading
  }
}
export default connect(mapStateToProps, {fetchPlayerMatches})(PlayerMatches);
