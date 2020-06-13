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
        
    handleMatchHistory = event => {
      console.log("match  id?? " + JSON.stringify(this.props.match.Match));
      this.props.fetchMatchDetails(this.props.match.Match)

    } 


  render() {
    console.log("in plaerm " + JSON.stringify(this.props.match));
    if (this.props.playerMatches.loading === 'success') {
    //   return <PlayerMatches />
    // } else {
    return (
      <div>
          <br />
          <h3>Match Info:</h3>
          <h4>God: </h4> <p>{this.props.match.God}</p>
          <h4>Map: </h4> <p>{this.props.match.Map_Game}</p>
          <h4>Damage: </h4> <p>{this.props.match.Damage}</p>
          <h4>Damage Taken: </h4> <p>{this.props.match.Damage_Taken}</p>
          <h4>Structure Damage: </h4> <p>{this.props.match.Damage_Structure}</p>
          <h4>Gold: </h4> <p>{this.props.match.Gold}</p>
          <h4>Healing: </h4> <p>{this.props.match.Healing}</p>
          <h4>Self Healing: </h4> <p>{this.props.match.Healing_Self}</p>
          <h4>Minutes: </h4> <p>{this.props.match.Minutes}</p>
          <h4>Time: </h4> <p>{this.props.match.Match_Time}</p>
          <h4>Assists: </h4> <p>{this.props.match.Assists}</p>
          <h4>Kills: </h4> <p>{this.props.match.Kills}</p>
          <h4>Deaths: </h4> <p>{this.props.match.Deaths}</p>
          <h4>Won?: </h4> <p>{this.props.match.Win_Status}</p>
          <h4>Wards Placed: </h4> <p>{this.props.match.Wards_Placed}</p>
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
