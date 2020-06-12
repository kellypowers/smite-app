import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
  
    // const {   deletePlayer } = this.props;
    // console.log(`props in players is ${JSON.stringify(this.props)}`);
    // let players = this.props.players;
    // console.log(`players in players is ${JSON.stringify(players)}`);

    playerList = () => { this.props.player.player.map((play) => {
      return <Player key={play.Name} player={play}  />
    })}
    // let players = this.props.players.map(player =><li> <Player key={player.id} /> {player.player_name} </li>);
    render() {
      console.log(`props in players is ${JSON.stringify(this.props)}`);
    return (
      <ul>
        {this.playerList()}
        {/* {players} */}
      </ul>
    );
  }
};



export default Players;