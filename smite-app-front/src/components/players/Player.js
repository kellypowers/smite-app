import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayer } from '../../actions/fetchPlayer'


class Player extends Component {

  componentDidMount(){
    console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
    this.props.fetchPlayer({player_name: this.props.routerProps.match.params.playername, portal_id: this.props.routerProps.match.params.portalid})
  }

  render() {
    if (this.props.player.loading ==="success") {
    return (
      <div>
        <br />
        <h3>Account Info:</h3>
        <table>
          <tbody>
            <tr>
              <th>Name: </th> 
              <td> {this.props.player.Name}</td>
            </tr>
            <tr>
              <th>Platform: </th> 
              <td> {this.props.player.Platform}</td>
            </tr>
            <tr>
              <th>Account Creation: </th> 
              <td>{this.props.player.Created_Datetime}</td>
            </tr>
            <tr>
              <th>Last Login: </th> 
              <td>{this.props.player.Last_Login_Datetime}</td>
            </tr>
            <tr>
              <th>Level: </th> 
              <td> {this.props.player.Level}</td>
            </tr>
            <tr>
              <th>Wins: </th> 
              <td> {this.props.player.Wins}</td>
            </tr>
            <tr>
              <th>Losses: </th> 
              <td>{this.props.player.Losses}</td>
            </tr>
            <tr>
              <th>Mastery Level: </th> 
              <td>{this.props.player.MasteryLevel}</td>
            </tr>
            <tr>
              <th>Total Worshippers: </th>
              <td> {this.props.player.Total_Worshippers}</td>
            </tr>
            <tr>
              <th>Minuted Played: </th> 
              <td> {this.props.player.MinutesPlayed}</td>
            </tr>
            <tr>
              <th>Total Achievements: </th> 
              <td>{this.props.player.Total_Achievements}</td>
            </tr>
            <tr>
              <th>Clan: </th>
              <td>{this.props.player.Team_Name ? <Link to={`/clan/${this.props.player.Team_Name.replace(" ", "")}/${this.props.player.TeamId}`}>{this.props.player.Team_Name}</Link> : ""}</td>
            </tr>
            <tr>
              <th>Ranked Joust Controller for season: </th> 
              <td> {this.props.player.RankedJoustController['Season']}</td>
            </tr>
            <tr>
              <th>Wins: </th> 
              <td>{this.props.player.RankedJoustController['Wins']}</td>
            </tr>
            <tr>
              <th>Losses: </th> 
              <td> {this.props.player.RankedJoustController.Losses}</td>
            </tr>
            <tr>
              <th>Rank: </th> 
              <td> {this.props.player.RankedJoustController.Rank}</td>
            </tr>
            <tr>
              <th>Points: </th> 
              <td> {this.props.player.RankedJoustController.Points}</td>
            </tr>
            <tr>
              <th>Rank Stat: </th> 
              <td> {this.props.player.RankedJoustController.Rank_Stat}</td>
            </tr>
            <tr>
              <th>Variance: </th> 
              <td>{this.props.player.RankedJoustController.Rank_Variance}</td>
            </tr>
          </tbody>
        </table>
        <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/player_matches`}>Get Match History For {this.props.player.Name} </Link> <br/>
        <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/god_ranks`}>Get God Ranks For {this.props.player.Name} </Link>
        {console.log(" " + JSON.stringify(this.props.player.RankedJoustController))}
      </div>
    )} else{return "Loading..."}
  };
};

const mapStateToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    player: state.player,
    player_matches: state.player_matches,
    god_ranks: state.god_ranks,
    loading: state.loading
  }
};


export default connect(mapStateToProps, {fetchPlayer})(Player);
