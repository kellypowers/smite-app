import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';



class PlayerMatch extends Component {
  
  render() {
    let god = this.props.gods.gods.find(g=> g.god_id == this.props.matches.GodId);
    return (
      <div className="player-match">
          <br />
          <h4> <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/player_matches/${this.props.matches.Match}`}>{this.props.matches.Win_Status} -- {this.props.matches.Map_Game} -- {this.props.matches.Match_Time} -- {this.props.matches.Minutes} minutes </Link></h4>
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
              <tr><th>Damage: </th><td> {this.props.matches.Damage}</td></tr>
              <tr><th>Damage Taken: </th> <td>{this.props.matches.Damage_Taken}</td></tr>
              <tr><th>Structure Damage: </th> <td>{this.props.matches.Damage_Structure}</td></tr>
              <tr><th>Healing: </th> <td>{this.props.matches.Healing}</td></tr>
              <tr><th>Self Healing: </th> <td>{this.props.matches.Healing_Player_Self}</td></tr>
              <tr><th>Wards Placed: </th> <td>{this.props.matches.Wards_Placed}</td></tr>
            </tbody>
          </table>
          </div>

          {/* <table className="player-match-table">
            <tbody>
              <tr><th>Map: </th><td> {this.props.matches.Map_Game} - {this.props.matches.Win_Status}</td> </tr>
              <tr><th>God Played: </th><td> <p><Link to={`/gods/${this.props.matches.GodId}`}>{this.props.matches.God}</Link></p> </td></tr>
              <tr><th>Time: </th> <td>{this.props.matches.Match_Time}</td></tr>
              <tr><th>K/D/A: </th> <td>{this.props.matches.Kills}/{this.props.matches.Deaths}/{this.props.matches.Assists}</td></tr>
              <tr><th>Damage: </th><td> {this.props.matches.Damage}</td></tr>
              <tr><th>Damage Taken: </th> <td>{this.props.matches.Damage_Taken}</td></tr>
              <tr><th>Structure Damage: </th> <td>{this.props.matches.Damage_Structure}</td></tr>
              <tr><th>Gold: </th><td> {this.props.matches.Gold}</td></tr>
              <tr><th>Healing: </th> <td>{this.props.matches.Healing}</td></tr>
              <tr><th>Self Healing: </th> <td>{this.props.matches.Healing_Player_Self}</td></tr>
              <tr><th>Minutes: </th> <td>{this.props.matches.Minutes}</td></tr>
              <tr><th>Wards Placed: </th> <td>{this.props.matches.Wards_Placed}</td></tr>
            </tbody>
          </table> */}
          <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/player_matches/${this.props.matches.Match}`}>Get Match Details {this.props.player.Name} </Link>
      </div>
    );
  }
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
export default connect(mapStateToProps)(PlayerMatch);
