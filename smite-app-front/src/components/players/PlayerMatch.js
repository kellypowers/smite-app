import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMatchDetails } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Matches'
// import Match from './PlayerMatches';

class PlayerMatch extends Component {
    
    // renderPlayerMatch = () => {
    //   if (this.props.player.loading == 'success') {
    //     console.log("props in playermatch is " + JSON.stringify(this.props));
    //     return (
    //       <div>
    //         Name: {this.props.player.Name}
    //         Level: {this.props.player.Level}
    //       </div>)
    //   }else {
    //     return "Try Again"
    //   } 

    // }
        
    handleMatchDetails = event => {
      console.log("match  id?? " + JSON.stringify(this.props.match.Match));
      this.props.fetchMatchDetails(this.props.match.Match)

    } 


  render() {
    console.log("in plaerm " + JSON.stringify(this.props));
    if (this.props.player.loading === 'success') {
    //   return <PlayerMatches />
    // } else {
    return (
      <div>
          <br />
          <h3>Match Info:</h3>
          <label>God: </label> <p>{this.props.match.God}</p>
          <label>Map: </label> <p>{this.props.match.Map_Game}</p>
          <label>Damage: </label> <p>{this.props.match.Damage}</p>
          <label>Damage Taken: </label> <p>{this.props.match.Damage_Taken}</p>
          <label>Structure Damage: </label> <p>{this.props.match.Damage_Structure}</p>
          <label>Gold: </label> <p>{this.props.match.Gold}</p>
          <label>Healing: </label> <p>{this.props.match.Healing}</p>
          <label>Self Healing: </label> <p>{this.props.match.Healing_Self}</p>
          <label>Minutes: </label> <p>{this.props.match.Minutes}</p>
          <label>Time: </label> <p>{this.props.match.Match_Time}</p>
          <label>Assists: </label> <p>{this.props.match.Assists}</p>
          <label>Kills: </label> <p>{this.props.match.Kills}</p>
          <label>Deaths: </label> <p>{this.props.match.Deaths}</p>
          <label>Won?: </label> <p>{this.props.match.Win_Status}</p>
          <label>Wards Placed: </label> <p>{this.props.match.Wards_Placed}</p>
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
    // player: state.player,
    // this will be selector.gods
    loading: state.loading
  }
}
export default connect(mapStateToProps, {fetchMatchDetails})(PlayerMatch);
