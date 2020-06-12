import React, { Component } from 'react';
import Player from './Player';
import { connect } from 'react-redux';

class Players extends Component {
  // componentDidMount() {
  //   console.log("props in players is " + JSON.stringify(this.props.player.player));
  // }
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
        {/* {this.playerList()} */}
        <Player key={this.props.player.Name} player={this.props.player}  />
      </ul>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    // gods: state.gods,
    // items: state.items,
    // builds: state.builds,
    player: state.player,
    // this will be selector.gods
    // loading: state.loading
  }
}



// export default Players;
export default connect(mapStateToProps)(Players);