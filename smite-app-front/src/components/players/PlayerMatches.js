import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMatches } from '../../actions/fetchPlayerMatches'
import PlayerMatch from './PlayerMatch';


class PlayerMatches extends Component {

  componentWillMount(){
    console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
    this.props.fetchPlayerMatches(this.props.routerProps.match.params.playerid)
  }

  render() {
    if (this.props.player_matches.loading === 'success') {
      return (
        <div>
          <h3>Match Info for {this.props.routerProps.match.params.playername}</h3>
          {Object.values(this.props.player_matches).map(m => <PlayerMatch routerProps={this.props.routerProps} matches={m} key={m.Match}/>)}
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
