import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from 'history/browser';

class GodRanks extends Component {
    // console.log("god ranks " + JSON.stringify(props.god_ranks));
    renderGodRanks = () => {
        console.log("god ranks " + JSON.stringify(Object.values(this.props.god_ranks)));
    return Object.values(this.props.god_ranks).map(god => {
        // let god_name = (this.props.gods.gods.find(g => g.god_id_smite === god.god_id).name);
        // let god_name = god_object.name;
    return (
        <div className="god_ranks_table_div">
            <br/>
        <table>
            <tr><th>God</th>
            <th>Worshippers:</th>
            <th>Rank:</th>
            <th>K/D/A: </th>
            <th>Minion Kills: </th>
            <th>W/L : </th></tr>
            <tr>
            <td><a href={`gods/${god.god_id}`}> {god.god} </a></td>
            <td> {god.Worshippers} </td>
            <td> {god.Rank}</td>
            <td>{god.Kills}/{god.Deaths}/{god.Assists}</td>
            <td>{god.MinionKills}</td>
            <td>{god.Wins} / {god.Losses}</td>
            </tr>
            {/* <td><Link to={`gods/${god.god_id}`}> {god.name} </Link></td></tr>
            <tr><th>Worshippers:</th><td> {god.Worshippers} </td></tr>
            <tr><th>Rank:</th><td> {god.Rank}</td></tr>
            <tr><th>K/D/A: </th><td>{god.Kills}/{god.Deaths}/{god.Assists}</td></tr>
            <tr><th>Minion Kills: </th><td>{god.MinionKills}</td></tr>
            <tr><th>W/L : </th><td>{god.Wins} / {god.Losses}</td></tr> */}
         </table>
         <br/>
         </div>
    )})
    }
    render(){
        return (
            <div>
                <button onClick={window.history.back}>BACK</button>
                {this.renderGodRanks()}
            </div>
        )
    }
    
    
}
const mapStateToProps = state => {
    // console.log(state)
    return {
      gods: state.gods,
      items: state.items,
      // builds: state.builds,
      player: state.player,
      player_matches: state.player_matches,
      god_ranks: state.god_ranks,
    //   match: state.match,
      clan: state.clan,
      loading: state.loading
    }
  }
export default connect(mapStateToProps)(GodRanks)