import React, { Component } from 'react';
// import uuid from 'uuid';
// import { deletePlayer } from '../actions/index';
import { fetchPlayer } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Player'
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
      player_name: event.target.value
    })
  }
  handleOnSelect = event => {
    // console.log(event.target.value);
    this.setState({
      portal_id: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const player = {...this.state};
    this.props.fetchPlayer(player);
    this.setState({
      player_name: '',
      portal_id: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)} >
            <label for="player_name">Player Name:</label>
            <input type="text" name="player_name" value={this.state.player_name} onChange={event => {this.handleOnChange(event)}} />
            <label for="portal_id">Select a platform </label>
            <select name="portal_id" onChange={event => this.handleOnSelect(event)}>
               <option value=""> </option>
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

export default connect(null, {fetchPlayer})(PlayerSearch);
