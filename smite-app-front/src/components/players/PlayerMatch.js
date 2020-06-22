import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchMatchDetails } from '../../actions/fetchMatches'
import Match from './Match'
// import Match from './PlayerMatches';

class PlayerMatch extends Component {
          
    handleMatchHistory = event => {
      console.log("match  id?? " + JSON.stringify(this.props.matches.Match));
      this.props.fetchMatchDetails(this.props.matches.Match)
      // return <Match match={this.props.match}/>
      return <Redirect to="/match"/>
    } 

  render() {
    console.log("in plaerm " + JSON.stringify(this.props.match));
    if (this.props.match.loading === 'success') {
      // return <Match match={this.props.match}/>
      return <Redirect to="/match"/>
    } else {
    return (
      <div>
          <br />
          <h3>Match Info for {this.props.player.Name}:</h3>
          <p><h4>Map: </h4> {this.props.matches.Map_Game} - {this.props.matches.Win_Status}</p>
          <p><h4>God Played: </h4> <Link to={`/gods/${this.props.matches.GodId}`}>{this.props.matches.God}</Link></p> 
          <p><h4>Time: </h4> {this.props.matches.Match_Time}</p>
          <p><h4>K/D/A: </h4> {this.props.matches.Kills}/{this.props.matches.Deaths}/{this.props.matches.Assists}</p>
          <p><h4>Damage: </h4> {this.props.matches.Damage}</p>
          <p><h4>Damage Taken: </h4> {this.props.matches.Damage_Taken}</p>
          <p><h4>Structure Damage: </h4> {this.props.matches.Damage_Structure}</p>
          <p><h4>Gold: </h4> {this.props.matches.Gold}</p>
          <p><h4>Healing: </h4> {this.props.matches.Healing}</p>
          <p><h4>Self Healing: </h4> {this.props.matches.Healing_Player_Self}</p>
          <p><h4>Minutes: </h4> {this.props.matches.Minutes}</p>
          <p><h4>Wards Placed: </h4> {this.props.matches.Wards_Placed}</p>
          <button onClick={event => this.handleMatchHistory(event)}>Get Match Details </button>
      </div>
    );
  }
  }
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
    // this will be selector.gods
    loading: state.loading
  }
}
export default connect(mapStateToProps, {fetchMatchDetails})(PlayerMatch);
