import React, { Component } from 'react'
import { connect } from 'react-redux';
import Player from './Player'


class Clan extends Component {
    goBack = () => {
        return window.history.back()
    }
    renderClanInfo = () => {
        this.props.clan.map(e => {
            return (
            <table>
                <tr><th>Player Name:</th><td>{e.Name}</td></tr>
                <tr><th>Account Level:</th><td>{e.AccountLevel}</td></tr>
                <tr><th>Joined:</th><td>{e.JoinedDatetime}</td></tr>
                <tr><th>Last Login:</th><td>{e.LastLoginDatetime}</td></tr>
            </table>
            )
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.goBack()}Back></button>
                {this.renderClanInfo}
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
    //   match: state.match,
      clan: state.clan,
      loading: state.loading
    }
  }

  export default connect(mapStateToProps)(Clan)
