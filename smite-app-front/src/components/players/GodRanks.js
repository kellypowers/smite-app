import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPlayerGodRanks } from '../../actions/fetchPlayerGodRank'
import { Link } from 'react-router-dom';
import AccountNavBar from './account/AccountNavBar'
import GodRank from './GodRank'

class GodRanks extends Component {

    applySortToGodArray = (sort) => {
        let arrayOfGods = Object.values(this.props.god_ranks);
        switch (sort){
            case "Worshippers":
                return arrayOfGods.sort(function(a, b) {
                    return b.Worshippers < a.Worshippers ? -1 : 1 });
            case "Rank":
                return arrayOfGods.sort(function(a, b) {
                    return b.Rank < a.Rank ? -1 : 1 });
            case "Wins":
                return arrayOfGods.sort(function(a, b) {
                    return b.Wins < a.Wins ? -1 : 1 });
            case "TotalGames":
                return arrayOfGods.sort(function(a, b) {
                    return ((b.Wins + b.Losses)  < (a.Wins + a.Losses)) ? -1 : 1});
            case "WinRate":
                return arrayOfGods.sort(function(a, b){
                    return ((b.Wins / (b.Losses + b.Wins) *100) < (a.Wins / (a.Losses + a.Wins) *100)) ? -1 : 1});  
            case "Kills":
                return arrayOfGods.sort(function(a, b) {
                    return b.Kills < a.Kills ? -1 : 1 });
            case "Deaths":
                return arrayOfGods.sort(function(a, b) {
                    return b.Deaths < a.Deaths ? -1 : 1 });
            default:
            return arrayOfGods.sort(function(a, b) {
                // console.log(`in sort fun a is ${JSON.stringify(a)} and b is ${JSON.stringify(b)}`);
                return b.Worshippers < a.Worshippers ? -1 : 1 });
            }
            }
    renderGodRank = () => {
        return Object.values(this.props.god_ranks).map(god => {
            let selectedGod = this.props.gods.gods.find(g=> g.god_id == god.god_id);
            if (god.god) {
                return (
                    <GodRank selectedGod={selectedGod} god={god} />
                )
            }
        })
    }
        
        renderSortedGods = () => {
            let sortedGods = this.applySortToGodArray(this.props.sort);
            console.log(`sortedgods is ${JSON.stringify(sortedGods)}`)
            return sortedGods.map(god => {
                if (god.god) {
                    let selectedGod = this.props.gods.gods.find(g=> g.god_id == god.god_id);
                    return (
                        <GodRank selectedGod={selectedGod} god={god} sort={this.props.sort} />
                    )
                }
            })
        }

    render(){
        return (
            <div>
                {this.renderSortedGods()}
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
export default connect(mapStateToProps)(GodRanks)