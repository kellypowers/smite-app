import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayer } from '../../actions/fetchPlayer'
// import NavBarPlayerScreen from  '../navigation/NavBarPlayerScreen'
import AccountHeader from './account/AccountHeader'
import AccountNavBar from './account/AccountNavBar'
import AccountMatchesInfo from './account/AccountMatchesInfo'
import AccountMasteries from './account/AccountMasteries'
import AccountInfo from './account/AccountInfo'
import RankedInfo from './account/RankedInfo'

class Player extends Component {


  renderNavBar = () => {
    return (
      <div className="player-navbar">
        <div className="player-navbar-left">
          <Link to={`/`}>Home</Link>
        </div>
        <div className="player-navbar-right">
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}`}>Account Info for {this.props.player.Name} </Link> 
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/player_matches`}>Get Match History For {this.props.player.Name} </Link> 
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/god_ranks`}>Get God Ranks For {this.props.player.Name} </Link>
        </div>
      </div>
      ) 
   }

  componentDidMount(){
    // console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
    this.props.fetchPlayer({player_name: this.props.routerProps.match.params.playername, portal_id: this.props.routerProps.match.params.portalid})
  }

  render() {
    if (this.props.player.loading ==="success") {
    return (
      <div class="player-page">
        
        <AccountNavBar 
          player={this.props.player} 
          portalid={this.props.routerProps.match.params.portalid} 
          playername={this.props.routerProps.match.params.playername}
          playerid={this.props.player.ActivePlayerId}
        />
        <br />
        <AccountHeader  
          portalid={this.props.routerProps.match.params.portalid} 
          player={this.props.player} 
        />
          <div class="player-page-details">
            <AccountMatchesInfo 
              player={this.props.player} 
              portalid={this.props.routerProps.match.params.portalid}
            />
            <AccountMasteries
              player={this.props.player} 
              portalid={this.props.routerProps.match.params.portalid}
            />
            <AccountInfo
              player={this.props.player} 
              portalid={this.props.routerProps.match.params.portalid}
            />
            <RankedInfo
              player={this.props.player} 
              portalid={this.props.routerProps.match.params.portalid}
            />
        </div>
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
