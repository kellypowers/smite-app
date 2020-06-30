import React, { Component } from 'react';
import Player from './Player';
import { connect } from 'react-redux';

class Players extends Component {

  playerList = () => { this.props.player.player.map((play) => {
    return <Player key={play.Name} player={play}  />
  })}
   
  render() {
    return (
      <ul>
        <Player key={this.props.player.Name} player={this.props.player}  />
      </ul>
    );  
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    builds: state.builds,
    player: state.player,
    loading: state.loading
  }
}


export default connect(mapStateToProps)(Players);