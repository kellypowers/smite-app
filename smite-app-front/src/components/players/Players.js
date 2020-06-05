import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
  render() {
    // const {   deletePlayer } = this.props;
    console.log(`props in players is ${JSON.stringify(this.props)}`);
    // let players = this.props.players;
    // console.log(`players in players is ${JSON.stringify(players)}`);

    // const playerList = players.map((player, index) => {
    //   return <Player key={index} player={player} deletePlayer={deletePlayer} />
    // })
    // let players = this.props.players.map(player =><li> <Player key={player.id} /> {player.player_name} </li>);
    return (
      <ul>
        {/* {playerList} */}
        {/* {players} */}
      </ul>
    );
  }
};



export default Players;