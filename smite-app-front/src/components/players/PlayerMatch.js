import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMatchDetails } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Matches'
import Match from './Match'
// import Match from './PlayerMatches';

class PlayerMatch extends Component {
          
    handleMatchHistory = event => {
      console.log("match  id?? " + JSON.stringify(this.props.match.Match));
      this.props.fetchMatchDetails(this.props.match.Match)
    } 

  render() {
    console.log("in plaerm " + JSON.stringify(this.props.match));
    if (this.props.match.loading === 'success') {
      return <Match />
    } else {
    return (
      <div>
          <br />
          <h3>Match Info for {this.props.player.Name}:</h3>
          <p><h4>Map: </h4> {this.props.match.Map_Game} - {this.props.match.Win_Status}</p>
          <p><h4>God Played: </h4> <Link to={`/gods/${this.props.match.GodId}`}>{this.props.match.God}</Link></p> 
          <p><h4>Time: </h4> {this.props.match.Match_Time}</p>
          <p><h4>K/D/A: </h4> {this.props.match.Kills}/{this.props.match.Deaths}/{this.props.match.Assists}</p>
          <p><h4>Damage: </h4> {this.props.match.Damage}</p>
          <p><h4>Damage Taken: </h4> {this.props.match.Damage_Taken}</p>
          <p><h4>Structure Damage: </h4> {this.props.match.Damage_Structure}</p>
          <p><h4>Gold: </h4> {this.props.match.Gold}</p>
          <p><h4>Healing: </h4> {this.props.match.Healing}</p>
          <p><h4>Self Healing: </h4> {this.props.match.Healing_Player_Self}</p>
          <p><h4>Minutes: </h4> {this.props.match.Minutes}</p>
          <p><h4>Wards Placed: </h4> {this.props.match.Wards_Placed}</p>
          <button onClick={event => this.handleMatchHistory(event)}>Get Match Details </button>
      </div>
    );
  }
  }
};

// can get buld by Item_1, etc, can link god by GodId, link them all 
const mapStateToProps = state => {
  console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    // builds: state.builds,
    player: state.player,
    playerMatches: state.playerMatches,
    // this will be selector.gods
    loading: state.loading
  }
}
export default connect(mapStateToProps, {fetchMatchDetails})(PlayerMatch);
