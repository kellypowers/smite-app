import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Link} from 'react-router-dom';



function PlayerMatch = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  // render() {
    let god = this.props.gods.gods.find(g=> g.god_id == this.props.matches.GodId);
    return (
      <div  className="player-match">
          <br />
          <div  onClick={() => setIsOpen(!isOpen)}className="accordion-header">
            <h4> {this.props.matches.Win_Status} -- {this.props.matches.Map_Game} -- {this.props.matches.Match_Time} -- {this.props.matches.Minutes} minutes </h4>
            <div className="accordion-indicator">
              {isOpen ? '-' : '+'}
            </div>
          </div>
          {isOpen && (
          <div className="player-match-deets">
            <div className="player-match-god">
            <h3><Link to={`/gods/${this.props.matches.GodId}`}>{this.props.matches.God}</Link></h3>
            <br/>
              <img className="match-god-image" src={god.god_image} alt={god.name}/>
              <h5>K/D/A: {this.props.matches.Kills}/{this.props.matches.Deaths}/{this.props.matches.Assists}</h5>
              <h5>Gold: {this.props.matches.Gold}</h5>
            </div>
          <table className="player-match-table">
            <tbody>
              <tr><th>Damage: </th><td> {props.matches.Damage}</td></tr>
              <tr><th>Damage Taken: </th> <td>{props.matches.Damage_Taken}</td></tr>
              <tr><th>Structure Damage: </th> <td>{props.matches.Damage_Structure}</td></tr>
              <tr><th>Healing: </th> <td>{props.matches.Healing}</td></tr>
              <tr><th>Self Healing: </th> <td>{props.matches.Healing_Player_Self}</td></tr>
              <tr><th>Wards Placed: </th> <td>{props.matches.Wards_Placed}</td></tr>
            </tbody>
          </table>
          </div>
          )}
          <Link to={`/players/find/${props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.routerProps.match.params.playerid}/player_matches/${this.props.matches.Match}`}>Get Match Details {this.props.player.Name} </Link>
          )}
      </div>
    );
  // }
};

const mapStateToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    player: state.player,
    playerMatches: state.playerMatches,
    match: state.match,
    clan: state.clan,
    loading: state.loading
  }
}
export default (PlayerMatch);
