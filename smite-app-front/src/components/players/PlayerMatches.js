import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchMatchDetails } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Matches'
import PlayerMatch from './PlayerMatch';
import { Link, Redirect } from 'react-router-dom';

class PlayerMatches extends Component {


    
    renderPlayerMatches = () => {

      if (this.props.player_matches.loading === 'success') {
        console.log("props in playermatches is " + JSON.stringify(this.props.player_matches));
        console.log(`matches is  ${JSON.stringify(Object.entries(this.props.player_matches))}`);
        return (
          
           Object.values(this.props.player_matches).map(m => <PlayerMatch matches={m} key={m.Match}/>)
          //  return (<li onClick={()=> {return <PlayerMatch matches={m} key={m.Match} /> }}>{m.Map_Game},{m.Match_Time}, {m.Win}</li>)
          
          //  <PlayerMatch matches={m} key={m.Match} />
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


  render() {
    
    // console.log("in plaermatches " + JSON.stringify(this.props));
    if (this.props.player.loading === 'success') {
      
      return (
        this.renderPlayerMatches()
    
      )
      }}
};
const mapStateToProps = state => {
  // console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    builds: state.builds,
    player: state.player,
    player_matches: state.player_matches,
    // this will be selector.gods
    loading: state.loading
  }
}
export default connect(mapStateToProps)(PlayerMatches);
