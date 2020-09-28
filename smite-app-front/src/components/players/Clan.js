import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchClan } from '../../actions/fetchClan'


class Clan extends Component {

    componentDidMount(){
        console.log("router prosp in comp is " + JSON.stringify(this.props.routerProps))
        this.props.fetchClan(this.props.routerProps.match.params.clanid)
    }

    renderClanInfo = () => {
        return Object.values(this.props.clan).map(e => {
            if (e.AccountLevel) {
                return (
                    <div>
                        <table>
                            <tr><th>Player Name:</th><td>{e.Name}</td></tr>
                            <tr><th>Account Level:</th><td>{e.AccountLevel}</td></tr>
                            <tr><th>Joined:</th><td>{e.JoinedDatetime}</td></tr>
                            <tr><th>Last Login:</th><td>{e.LastLoginDatetime}</td></tr>
                        </table>
                        <br/>
                    </div>
                ) 
            } else{return ""}
        })
    }
    render() {
        if (this.props.clan.loading === 'success'){
            return (
                <div>
                    <h4>Clan info for {this.props.routerProps.match.params.clanname}</h4>
                    {this.renderClanInfo()}
                </div>
            )
        }else{
            return "Loading..."
        }
    }

}

const mapStateToProps = state => {
    return {
      gods: state.gods,
      items: state.items,
      player: state.player,
      player_matches: state.player_matches,
      clan: state.clan,
      loading: state.loading
    }
  }

  export default connect(mapStateToProps, {fetchClan})(Clan)
