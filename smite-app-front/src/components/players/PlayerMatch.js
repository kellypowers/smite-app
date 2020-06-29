import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchMatchDetails } from '../../actions/fetchMatches'
import Player from '../../components/players/Player';
import Match from './Match'
// import Match from './PlayerMatches';

class PlayerMatch extends Component {

  


  render() {
    console.log("in plaerm " + JSON.stringify(this.props.routerProps));
    // if (this.props.match.loading === 'success') {
    //   // return <Match match={this.props.match}/>
    //   return <Redirect to="/match"/>

    // } else {
    return (
      <div>
          <br />
          <table>
          <tr><th>Map: </th><td> {this.props.matches.Map_Game} - {this.props.matches.Win_Status}</td> </tr>
          <tr><th>God Played: </th><td> <p><Link to={`/gods/${this.props.matches.GodId}`}>{this.props.matches.God}</Link></p> </td></tr>
          <tr><th>Time: </th> <td>{this.props.matches.Match_Time}</td></tr>
          <tr><th>K/D/A: </th> <td>{this.props.matches.Kills}/{this.props.matches.Deaths}/{this.props.matches.Assists}</td></tr>
          <tr><th>Damage: </th><td> {this.props.matches.Damage}</td></tr>
          <tr><th>Damage Taken: </th> <td>{this.props.matches.Damage_Taken}</td></tr>
          <tr><th>Structure Damage: </th> <td>{this.props.matches.Damage_Structure}</td></tr>
          <tr><th>Gold: </th><td> {this.props.matches.Gold}</td></tr>
          <tr><th>Healing: </th> <td>{this.props.matches.Healing}</td></tr>
          <tr><th>Self Healing: </th> <td>{this.props.matches.Healing_Player_Self}</td></tr>
          <tr><th>Minutes: </th> <td>{this.props.matches.Minutes}</td></tr>
          <tr><th>Wards Placed: </th> <td>{this.props.matches.Wards_Placed}</td></tr>
          </table>
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/player_matches/${this.props.matches.Match}`}>Get Match Details {this.props.player.Name} </Link>
          {/* <button onClick={event => this.handleMatchHistory(event)}>Get Match Details </button> */}
      </div>
    );
  }
  // }
};

// can get buld by Item_1, etc, can link god by GodId, link them all 
const mapStateToProps = state => {
  // console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    // builds: state.builds,
    player: state.player,
    playerMatches: state.playerMatches,
    match: state.match,
    clan: state.clan,
    loading: state.loading
  }
}
export default connect(mapStateToProps, {fetchMatchDetails})(PlayerMatch);
