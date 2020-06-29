import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPlayerGodRanks } from '../../actions/fetchPlayerGodRank'
import { Link } from 'react-router-dom';


class GodRanks extends Component {
    // console.log("god ranks " + JSON.stringify(props.god_ranks));
    componentWillMount(){
        // console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
        this.props.fetchPlayerGodRanks(this.props.routerProps.match.params.playerid)
      }
    renderGodRanks = () => {
        // console.log("god ranks " + JSON.stringify(Object.values(this.props.god_ranks)));
        return Object.values(this.props.god_ranks).map(god => {
            if (god.god) {
            return (
            <div key={god.god_id}className="god_ranks_table_div">
            <br/>
            <table>
                <tbody>
                    <tr><th>God</th><td><Link to={`gods/${god.god_id}`}>{god.god}</Link></td></tr>
                    <tr><th>Worshippers:</th><td> {god.Worshippers} </td></tr>
                    <tr><th>Rank:</th><td> {god.Rank}</td></tr>
                    <tr><th>K/D/A: </th><td>{god.Kills}/{god.Deaths}/{god.Assists}</td></tr>
                    <tr><th>Minion Kills: </th><td>{god.MinionKills}</td></tr>
                    <tr><th>W/L : </th><td>{god.Wins} / {god.Losses}</td></tr>
                    <tr><th>Total Games: </th><td>{god.Wins + god.Losses}</td></tr>
                </tbody>
            </table>
            <br/>
            </div>
            )}
            else{return ""}
        })
    }
    render(){
        return (
            <div>
                <h3>God ranks for {this.props.routerProps.match.params.playername}</h3>
                {this.renderGodRanks()}
            </div>
        )
    }
    
    
}
const mapStateToProps = state => {
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
export default connect(mapStateToProps, {fetchPlayerGodRanks})(GodRanks)