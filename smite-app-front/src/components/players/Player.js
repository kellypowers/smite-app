import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMatches } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/PlayerMatches'
import { fetchPlayerGodRanks } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/PlayerGodRank'
import PlayerMatches from './PlayerMatches';
import GodRanks from './GodRanks';

class Player extends Component {
        
    handleMatchHistory = event => {
      console.log("active id? " + this.props.player.ActivePlayerId);
      this.props.fetchPlayerMatches({player_id: this.props.player.ActivePlayerId})
    } 
    handleGodInfo = event => {
      console.log("active id? " + this.props.player.ActivePlayerId);
      this.props.fetchPlayerGodRanks({player_id: this.props.player.ActivePlayerId})
    } 

  render() {
    console.log("in plaer " + JSON.stringify(this.props.playerMatches));
    if (this.props.playerMatches.loading === 'success') {
      return <PlayerMatches />
    } else if (this.props.god_ranks.loading ==='success') { 
      return <GodRanks />
  }else {
    return (
      <div>
          <br />
          <h3>Account Info:</h3>
          <p><label>Name: </label> {this.props.player.Name}</p>
          <p><label>Platform: </label> {this.props.player.Platform}</p>
          <p><label>Account Creation: </label> {this.props.player.Created_Datetime}</p>
          <p><label>Last Login: </label> {this.props.player.Last_Login_Datetime}</p>
          <p><label>Level: </label> {this.props.player.Level}</p>
          <p><label>Wins: </label> {this.props.player.Wins}</p>
          <p><label>Losses: </label> {this.props.player.Losses}</p>
          <p><label>Mastery Level: </label> {this.props.player.MasteryLevel}</p>
          <p><label>Total Worshippers: </label> {this.props.player.Total_Worshippers}</p>
          <p><label>Minuted Played: </label> {this.props.player.MinutesPlayed}</p>
          <p><label>Total Achievements: </label> {this.props.player.Total_Achievements}</p>
          <p><label>Clan: </label> {this.props.player.Team_Name}</p>
          <ul><p><label>Ranked Joust Controller for season: </label> {this.props.player.RankedJoustController['Season']}</p>
            <li><p><label>Wins: </label> {this.props.player.RankedJoustController['Wins']}</p></li>
            <li><p><label>Losses: </label> {this.props.player.RankedJoustController.Losses}</p></li>
            <li><p><label>Rank: </label> {this.props.player.RankedJoustController.Rank}</p></li>
            <li><p><label>Points: </label> {this.props.player.RankedJoustController.Points}</p></li>
            <li><p><label>Rank Stat: </label> {this.props.player.RankedJoustController.Rank_Stat}</p></li>
            <li><p><label>Variance: </label> {this.props.player.RankedJoustController.Rank_Variance}</p></li>
          </ul>
          <button onClick={event => this.handleMatchHistory(event)}>Get Match History For {this.props.player.Name} </button>
          <button onClick={event => this.handleGodInfo(event)}>Get God Info {this.props.player.Name} </button>
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
    god_ranks: state.god_ranks,
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

export default connect(mapStateToProps, {fetchPlayerMatches, fetchPlayerGodRanks})(Player);
