import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
  // componentDidMount() {
  //   console.log("props in player is " + JSON.stringify(this.props.player.player));
  // }
  // handleOnClick = () => {this.props.deletePlayer(this.props.player.id)}
  // console.log(this.props);

    // componentDidUpdate = () => {
    //   if (this.props.player.player.player != undefined) {
    //     console.log("props in player is " + JSON.stringify(this.props));
    //     return (
    //       <div>
    //         {/* Name: */}
    //         Name: {this.props.player.player.player.Name}
    //       </div>)
    //   }else {
    //     return "Enter Player Info to see Player"
    //   } 

    // }
    
    
    renderPlayer = () => {
      if (this.props.player.loading == 'success') {
        console.log("props in player is " + JSON.stringify(this.props));
        return (
          <div>
            Name: {this.props.player.Name}
            Level: {this.props.player.Level}
          </div>)
      }else {
        return "Try Again"
      } 

    }
        
    // renderPlayer = () => {
    //   if (this.props.player != undefined) {
    //     console.log("props in player is " + JSON.stringify(this.props));
    //     return (
    //       <div>
    //         {/* Name: */}
    //         Name: {this.props.player.Name}
    //       </div>)
    //   }
    //   // else {
    //   //   this.renderPlayer()
    //   // } 


  render() {
    console.log("in plaer " + JSON.stringify(this.props))
    return (
      <div>
          <br />
          <h3>Account Info:</h3>
          <label>Name: </label> <p>{this.props.player.Name}</p>
          <label>Playform: </label> <p>{this.props.player.Platform}</p>
          <label>Account Creation: </label> <p>{this.props.player.Created_Datetime}</p>
          <label>Last Login: </label> <p>{this.props.player.Last_Login_Datetime}</p>
          <label>Level: </label> <p>{this.props.player.Level}</p>
          <label>Wins: </label> <p>{this.props.player.Wins}</p>
          <label>Losses: </label> <p>{this.props.player.Losses}</p>
          <label>Mastery Level: </label> <p>{this.props.player.MasteryLevel}</p>
          <label>Total Worshippers: </label> <p>{this.props.player.Totak_Worshippers}</p>
          <label>Minuted Played: </label> <p>{this.props.player.MinutesPlayed}</p>
          <label>Total Achievements: </label> <p>{this.props.player.Total_Achievements}</p>
          <label>Clan: </label> <p>{this.props.player.Team_Name}</p>
          <ul><label>Ranked Joust Controller for season: </label> <p>{this.props.player.RankedJoustController.Season}</p>
            <li><label>Wins: </label> <p>{this.props.player.RankedJoustController.Wins}</p></li>
            <li><label>Losses: </label> <p>{this.props.player.RankedJoustController.Losses}</p></li>
            <li><label>Rank: </label> <p>{this.props.player.RankedJoustController.Rank}</p></li>
            <li><label>Points: </label> <p>{this.props.player.RankedJoustController.Points}</p></li>
            <li><label>Rank Stat: </label> <p>{this.props.player.RankedJoustController.Rank_Stat}</p></li>
            <li><label>Variance: </label> <p>{this.props.player.RankedJoustController.Rank_Variance}</p></li>
          </ul>
          <button onClick={event => this.handleMatchHistory(event)}>Get Match History For This Player </button>
      </div>
    );
  }

};
const mapStateToProps = state => {
  console.log(state)
  return {
    // gods: state.gods,
    // items: state.items,
    // builds: state.builds,
    player: state.player,
    // this will be selector.gods
    // loading: state.loading
  }
}
export default connect(mapStateToProps)(Player);
