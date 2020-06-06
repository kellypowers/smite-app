import React, { Component } from 'react';
// import uuid from 'uuid';
// import { deletePlayer } from '../actions/index';
import { addPlayer } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import { connect } from 'react-redux';

class PlayerSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      //  player: {
        player_name: '',
        portal_id: ''
      // }
  }
  // state = {
  //   text: ''
  }

  handleOnChange = event => {
    this.setState({
      // ...this.state.player,
      // player: {
      // player_name: event.target.value,
      // portal_id: event.target.value
      // }
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const player = {...this.state};
    this.props.addPlayer(player);
    this.setState({
      player_name: '',
      portal_id: ''
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)} >
            <label for="player_name">Player Name:</label>
            <input type="text" name="player_name" value={this.state.player_name} onChange={event => {this.handleOnChange(event)}} />
            <label for="portal_id">Select a platform </label>
            <select name="portal_id" >
                <option value="10">XBox</option>
                <option value="5">Steam</option>
                <option value="9">PS4</option>
                <option value="22">Switch</option>
                <option value="1">PC</option>
            </select>
          <input type="submit" />
        </form>
        
      </div>
    );
  }
};

export default connect(null, {addPlayer})(PlayerSearch);
