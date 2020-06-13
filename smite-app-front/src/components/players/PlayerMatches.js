import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchMatchDetails } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Matches'
import PlayerMatch from './PlayerMatch';

class PlayerMatches extends Component {
    
    renderPlayerMatches = () => {

      if (this.props.playerMatches.loading == 'success') {
        console.log("props in playermatches is " + JSON.stringify(this.props.playerMatches));
        console.log(`matches is  ${JSON.stringify(Object.entries(this.props.playerMatches))}`);
        return (
          
          // console.log(`matches is  ${JSON.stringify(Object.entries(this.props.playerMatches))}`);
           Object.entries(this.props.playerMatches).map(m => <PlayerMatch match={m[1]} key={m[1].Match} />));
          
          // matches.map(m => <PlayerMatch match={i.Match} key={m} />))
      }else {
        return "Try Again"
      } 

    }
        
    // this will go into individual player match 
    // handleMatchDetails = event => {
    //   this.props.fetchMatchDetails(this.props.player.matches.)

    // } 


  render() {
    console.log("in plaermatches " + JSON.stringify(this.props));
    if (this.props.player.loading === 'success') {
      return this.renderPlayerMatches()
    }
    }
};
const mapStateToProps = state => {
  console.log(state)
  return {
    // gods: state.gods,
    // items: state.items,
    // builds: state.builds,
    player: state.player,
    playerMatches: state.playerMatches,
    // this will be selector.gods
    loading: state.loading
  }
}
export default connect(mapStateToProps)(PlayerMatches);
