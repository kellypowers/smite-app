import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMatches } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/PlayerMatches'
import PlayerMatches from './PlayerMatches';

class Player extends Component {
        
    handleMatchHistory = event => {
      console.log("active id? " + this.props.player.ActivePlayerId);
      this.props.fetchPlayerMatches({player_id: this.props.player.ActivePlayerId})
    } 

  render() {
    console.log("in plaer " + JSON.stringify(this.props.playerMatches));
    if (this.props.playerMatches.loading === 'success') {
      return <PlayerMatches />
    } else {
    return (
      <div>
          <br />
          <h3>Account Info:</h3>
          <label>Name: </label> <p>{this.props.player.Name}</p>
          <label>Platform: </label> <p>{this.props.player.Platform}</p>
          <label>Account Creation: </label> <p>{this.props.player.Created_Datetime}</p>
          <label>Last Login: </label> <p>{this.props.player.Last_Login_Datetime}</p>
          <label>Level: </label> <p>{this.props.player.Level}</p>
          <label>Wins: </label> <p>{this.props.player.Wins}</p>
          <label>Losses: </label> <p>{this.props.player.Losses}</p>
          <label>Mastery Level: </label> <p>{this.props.player.MasteryLevel}</p>
          <label>Total Worshippers: </label> <p>{this.props.player.Total_Worshippers}</p>
          <label>Minuted Played: </label> <p>{this.props.player.MinutesPlayed}</p>
          <label>Total Achievements: </label> <p>{this.props.player.Total_Achievements}</p>
          <label>Clan: </label> <p>{this.props.player.Team_Name}</p>
          <ul><label>Ranked Joust Controller for season: </label> <p>{this.props.player.RankedJoustController['Season']}</p>
            <li><label>Wins: </label> <p>{this.props.player.RankedJoustController['Wins']}</p></li>
            <li><label>Losses: </label> <p>{this.props.player.RankedJoustController.Losses}</p></li>
            <li><label>Rank: </label> <p>{this.props.player.RankedJoustController.Rank}</p></li>
            <li><label>Points: </label> <p>{this.props.player.RankedJoustController.Points}</p></li>
            <li><label>Rank Stat: </label> <p>{this.props.player.RankedJoustController.Rank_Stat}</p></li>
            <li><label>Variance: </label> <p>{this.props.player.RankedJoustController.Rank_Variance}</p></li>
          </ul>
          <button onClick={event => this.handleMatchHistory(event)}>Get Match History For {this.props.player.Name} </button>
      </div>
    )};
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    // gods: state.gods,
    // items: state.items,
    // builds: state.builds,
    player: state.player,
    playerMatches: state.playerMatches,
    // this will be selector.gods
    loading: state.loading
  }
};


// const mapDispatchToProps = dispatch => {
//   return {
//     addBuild: build => dispatch(addBuild(build)),
//     postBuild: build => dispatch(postBuild(build))
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPlayerMatches: playerMatches => dispatch(fetchPlayerMatches()),

//   }
// }

export default connect(mapStateToProps, {fetchPlayerMatches})(Player);
