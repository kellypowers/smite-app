import React, { Component } from 'react'
import PlayerSearch from '../components/players/PlayerSearch'
import Player from '../components/players/Player'
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

class PlayersContainer extends Component {
  
  render() {
  console.log(this.props.player);
  if (this.props.player.loading === 'success' || this.props.player.ActivePlayerId !== undefined) {
    return (
      <div>
        <Player/>
      </div>
    )

  } else {return <PlayerSearch/>}
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    gods: state.gods,
    items: state.items,
    // builds: state.builds,
    player: state.player,
    player_matches: state.player_matches,
    god_ranks: state.god_ranks,
    loading: state.loading
  }
};
export default connect(mapStateToProps)(PlayersContainer);
