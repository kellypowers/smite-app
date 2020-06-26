import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayerMatches } from '../../actions/fetchPlayerMatches'
import { fetchPlayerGodRanks } from '../../actions/fetchPlayerGodRank'
import { fetchPlayer } from '../../actions/fetchPlayer'
import PlayerMatches from './PlayerMatches';
import GodRanks from './GodRanks';
import history from 'history/browser';

class Player extends Component {

  state= {
    component: null
  }

  getPlayerInfo = () =>{
    this.props.fetchPlayer([this.props.playerId, this.props.portalId]);
  }

  goBack = (e) => {
    // e.preventDefault;
    window.history.back()
  }

  playerInfo = () => {
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
        {/* <button onClick={event => this.handleGodInfo(event)}><Link to="/god_ranks">Get God Info for {this.props.player.Name}</Link> </button> */}
        <button onClick={event => this.handleGodInfo(event)}>Get God Info for {this.props.player.Name} </button>
        {/* {this.renderAccountInfo} */}
        {/* <button><Link to="/players/find">BACK</Link></button> */}
    </div>
    )
  }
        
    renderAccountInfo = () => {
      if (this.props.player_matches.loading === 'success') {
        // this.state.component = <PlayerMatches/>
        // this.setState({
        //   component: <PlayerMatches/>
        // })
        // return this.playerInfo()
        // history.push('/account_info');
        return <Redirect to="/player_matches"/>
        // return <PlayerMatches player={this.props.player} player_matches={this.props.player_matches}/>
       
      }else if (this.props.god_ranks.loading === 'success') {
        // this.setState({
        //   component: <GodRanks/>
        // })
        // return this.playerInfo()
        // history.push('/account_info');
        return <Redirect to="/godranks"/>
        // return this.playerInfo()
        // return <GodRanks player={this.props.player} god_ranks={this.props.god_ranks} />
      } else {
        return this.playerInfo()
      }
    }

  
    handleMatchHistory = event => {
      // console.log("active id? " + this.props.player.ActivePlayerId);
      // this.setState({
      //   component: <PlayerMatches/>
      // })
      this.props.fetchPlayerMatches({player_id: this.props.player.ActivePlayerId})
      // return <PlayerMatches />
    } 
    handleGodInfo = event => {
      console.log("active id? " + this.props.player.ActivePlayerId);
      this.props.fetchPlayerGodRanks({player_id: this.props.player.ActivePlayerId})
      // if (this.props.player_matches.loading === 'success'){
      // return <GodRanks god_ranks={this.props.god_ranks}/>
      // }
      // this.setState({
      //   component: <GodRanks/>
      // })
    } 

  render() {
  // //   console.log("in plaer " + JSON.stringify(this.props.playerMatches));
  //   if (this.props.player_matches.loading === 'success') {
  //     this.playerInfo();
  //     return <PlayerMatches />
  //   } else if (this.props.god_ranks.loading ==='success') { 
  //   this.playerInfo()
  //     return <GodRanks god_ranks={this.props.god_ranks}/>
  // }else {
    
    return (
      <div>
        <button onClick={(e) => this.goBack(e)}>Back</button>
      {this.renderAccountInfo()}
      </div>
      // this.playerInfo()
    )};
  };
// };

const mapStateToProps = state => {
  // console.log(state);
  return {
    gods: state.gods,
    items: state.items,
    // builds: state.builds,
    player: state.player,
    player_matches: state.player_matches,
    god_ranks: state.god_ranks,
    // this will be selector.gods
    loading: state.loading
  }
};


export default connect(mapStateToProps, {fetchPlayer, fetchPlayerMatches, fetchPlayerGodRanks})(Player);
