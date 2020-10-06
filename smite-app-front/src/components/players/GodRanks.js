import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPlayerGodRanks } from '../../actions/fetchPlayerGodRank'
import { Link } from 'react-router-dom';
import AccountNavBar from './account/AccountNavBar'

class GodRanks extends Component {
    componentDidMount(){
        this.props.fetchPlayerGodRanks(this.props.routerProps.match.params.playerid)
    }

    renderGodRanks = () => {
        // let selectedGod = this.props.gods.gods.find(g=> g.god_id == this.props.god_ranks.god_id);
        return Object.values(this.props.god_ranks).map(god => {
            let selectedGod = this.props.gods.gods.find(g=> g.god_id == god.god_id);
            // console.log(`selectedgod is ${JSON.stringify(selectedGod)}`)
            if (god.god) {
                return (
                <div key={god.god_id}className="god-ranks-container">
                    <div className="god-ranks-godcard">
                        <h3><Link to={`/gods/${god.god_id}`}>{god.god}</Link></h3>
                        <img className="god-ranks-image" src={selectedGod.god_image} alt={selectedGod.name}/>
                    </div>
                    <div className="god-ranks-data">
                        <div>
                            <h5>Worhippers</h5>
                            <p>{god.Worshippers}</p>
                        </div>
                        <div>
                            <h5>Rank</h5>
                            <p>{god.Rank}</p>
                        </div>
                        <div>
                            <h5>Kills</h5>
                            <p>{god.Kills}</p>
                        </div>
                        <div>
                            <h5>Deaths</h5>
                            <p>{god.Deaths}</p>
                        </div>
                        <div>
                            <h5>Assists</h5>
                            <p>{god.Assists}</p>
                        </div>
                        <div>
                            <h5>Wins</h5>
                            <p>{god.Wins}</p>
                        </div>
                        <div>
                            <h5>Losses</h5>
                            <p>{god.Losses}</p>
                        </div>
                        <div>
                            <h5>Total Games</h5>
                            <p>{god.Wins + god.Losses}</p>
                        </div>
                        <div>
                            <h5>Win Rate</h5>
                            <p>{(god.Wins / (god.Losses + god.Wins) *100).toFixed(2)}%</p>
                        </div>
                        <div>
                            <h5>KDA</h5>
                            <p>{((god.Kills + (god.Assists/2)) / god.Deaths).toFixed(2)}</p>
                        </div>
                        <div>
                            <h5>KD</h5>
                            <p>{(god.Kills / god.Deaths).toFixed(2)}</p>
                        </div>
                    </div>
                {/* <br/>
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
                <br/> */}
                </div>
                )
            }
            else{return ""}
        })
    }
    render(){
        return (
            <div>
                <AccountNavBar 
                    player={this.props.player} 
                    portalid={this.props.routerProps.match.params.portalid} 
                    playername={this.props.routerProps.match.params.playername}
                />
                <div>
                    <h3>God ranks for {this.props.routerProps.match.params.playername}</h3>
                    {this.renderGodRanks()}
                </div>
                
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
      gods: state.gods,
      items: state.items,
      player: state.player,
      player_matches: state.player_matches,
      god_ranks: state.god_ranks,
      clan: state.clan,
      loading: state.loading
    }
}
export default connect(mapStateToProps, {fetchPlayerGodRanks})(GodRanks)