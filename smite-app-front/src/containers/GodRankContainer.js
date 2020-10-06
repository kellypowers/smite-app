import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPlayerGodRanks } from '../actions/fetchPlayerGodRank'
import { Link } from 'react-router-dom';
import AccountNavBar from '../components/players/account/AccountNavBar'
import GodRankSort from '../components/players/GodRankSort'
import GodRanks from '../components/players/GodRanks'

class GodRankContainer extends Component {
    state = {
        sort: "Worshippers"
    }
    handleOnChange = event => {
        this.setState({
          sort: event.target.value
        })
      }

    componentDidMount(){
        this.props.fetchPlayerGodRanks(this.props.routerProps.match.params.playerid)
    }

    render(){
        return (
            <div>
                <AccountNavBar 
                    player={this.props.player} 
                    portalid={this.props.routerProps.match.params.portalid} 
                    playername={this.props.routerProps.match.params.playername}
                    playerid={this.props.routerProps.match.params.playerid}
                />
                <div>
                    <h3>God ranks for {this.props.routerProps.match.params.playername}</h3>
                    <GodRankSort 
                        handleOnChange={this.handleOnChange}
                    />
                    <GodRanks 
                        playername={this.props.routerProps.match.params.playername}
                        sort={this.state.sort}
                    />
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
export default connect(mapStateToProps, {fetchPlayerGodRanks})(GodRankContainer)