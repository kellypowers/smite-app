import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchMatchDetails } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Matches'
import PlayerMatch from './PlayerMatch';
import Players from './Players';
import {  fetchPlayerById } from '../../actions/fetchPlayer'
import { Link, Redirect } from 'react-router-dom';

class PlayerMatches extends Component {

  goBackToAccount = () => {
    console.log("player amtches props " + JSON.stringify(this.props.player_matches["0"].playerId))
    this.props.fetchPlayerById(this.props.player.ActivePlayerId);
    // return <Players />
    return <Redirect to="account_info"/>
  }
  
  renderPlayerMatches = () => {
    if (this.props.player_matches.loading === 'success') {
      console.log("player in playermatches is " + JSON.stringify(this.props.player));
      console.log(`matches is  ${JSON.stringify(Object.entries(this.props.player_matches))}`);
      return (
        <div>
          <button onClick={this.goBackToAccount}>Go Back To Acount Info</button>
        <h3>Match Info for {this.props.player.Name}</h3>
          {Object.values(this.props.player_matches).map(m => <PlayerMatch matches={m} key={m.Match}/>)}
          </div>
          );
        //  }))
          
        // matches.map(m => <PlayerMatch match={i.Match} key={m} />))
    } else {
      return "try Again"
    }

  }
        
    // this will go into individual player match 
    // handleMatchDetails = event => {
    //   this.props.fetchMatchDetails(this.props.player.matches.)

    // } 
    componentWillUnmount(){
      if (this.props.player.loading === 'success') {
        return <Redirect to="account_info"/>
        }
    }


  render() {
    
    // console.log("in plaermatches " + JSON.stringify(this.props));
    if (this.props.player.loading === 'success') {
      
      return (
        this.renderPlayerMatches()
    
      )
      }
    }
};
const mapStateToProps = state => {
  // console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    builds: state.builds,
    player: state.player,
    player_matches: state.player_matches,
    clan: state.clan,
    loading: state.loading
  }
}
export default connect(mapStateToProps, {fetchPlayerById})(PlayerMatches);
