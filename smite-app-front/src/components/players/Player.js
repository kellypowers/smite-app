import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayerMatches } from '../../actions/fetchPlayerMatches'
import { fetchPlayerGodRanks } from '../../actions/fetchPlayerGodRank'
import { fetchPlayer } from '../../actions/fetchPlayer'


class Player extends Component {

  componentWillMount(){
    console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
    this.props.fetchPlayer({player_name: this.props.routerProps.match.params.playername, portal_id: this.props.routerProps.match.params.portalid})
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
        <table>
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
        <td>{this.props.player.Team_Name ? this.props.player.Team_Name : ""}</td>
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
        </table>

        <Link to={`/players/find/${this.props.player.ActivePlayerId}/player_matches`}>Get Match History For {this.props.player.Name} </Link>
        {/* <button onClick={event => this.handleGodInfo(event)}><Link to="/god_ranks">Get God Info for {this.props.player.Name}</Link> </button> */}
        <button onClick={event => this.handleGodInfo(event)}>Get God Info for {this.props.player.Name} </button>
        {/* {this.renderAccountInfo} */}
        {/* <button><Link to="/players/find">BACK</Link></button> */}
    </div>
    )
  }
        
    // renderAccountInfo = () => {
    //   if (this.props.player_matches.loading === 'success') {
    //     return <Redirect to="/player_matches"/>
    //   }else if (this.props.god_ranks.loading === 'success') {
    //     return <Redirect to="/godranks"/>
    //   } else {
    //     return this.playerInfo()
    //   }
    // }
    // componentWillUnmount(){

    // }

  
    handleMatchHistory = event => {
      event.preventDefault();
    window.location = `http://localhost:3001/players/find/${this.player.ActivePlayerId}/player_matches`
      // this.props.fetchPlayerMatches({player_id: this.props.player.ActivePlayerId})
      // return <PlayerMatches />
    } 
    handleGodInfo = event => {
      console.log("active id? " + this.props.player.ActivePlayerId);
      this.props.fetchPlayerGodRanks({player_id: this.props.player.ActivePlayerId})

    } 

    componentDidMount(){
      console.log("in plaer " + JSON.stringify(this.props.player));
    }
  render() {
   
  //   if (this.props.player_matches.loading === 'success') {
  //     return <Redirect to="/player_matches"/>
  //   } else if (this.props.god_ranks.loading ==='success') { 
  //     return <Redirect to="/godranks"/>
  // } else 
  // if (this.props.player.loading ==="success"){
  //   console.log("in plaer " + JSON.stringify(this.props.player));
    return (
      <div>
              <br />
        <h3>Account Info:</h3>
        <table>
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
        <td>{this.props.player.Team_Name ? this.props.player.Team_Name : ""}</td>
        </tr>
        {/* <tr>
        <th>Ranked Joust Controller for season: </th> 
        <td> {this.props.player.RankedJoustController.Season}</td>
        </tr>
        <tr>
          <th>Wins: </th> 
          <td>{this.props.player.RankedJoustController.Wins}</td>
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
        </tr> */}
        </table>
        <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/player_matches`}>Get Match History For {this.props.player.Name} </Link>
        {/* <button onClick={event => this.handleMatchHistory(event)}>Get Match History For {this.props.player.Name} </button> */}
        <button onClick={event => this.handleGodInfo(event)}>Get God Info for {this.props.player.Name} </button>
      </div>
    )};
  // };
};

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
