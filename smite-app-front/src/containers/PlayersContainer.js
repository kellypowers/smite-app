import React, { Component } from 'react'
import PlayerInput from '../components/players/PlayerInput'
import Players from '../components/Players'
import { connect } from 'react-redux'

class PlayersContainer extends Component {
  
  render() {
      console.log(this.props)
    return (
      <div>
        <PlayerInput addPlayer={this.props.addPlayer}/>
        <Players players={this.props.players} deletePlayer={this.props.deletePlayer}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({ players: state.players })

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: player => dispatch({type: "ADD_PLAYER", player}),
    deletePlayer: id => dispatch({type: "DELETE_PLAYER", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer)
