import React, { Component } from 'react';

class Player extends Component {
  handleOnClick = () => {this.props.deletePlayer(this.props.player.id)}
  render() {
    const { player } = this.props
    console.log(player);
    return (
      <div>
        <li>
          {/* {player.text} */}
          {this.props.player}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Player;
