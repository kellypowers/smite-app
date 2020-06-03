import React, { Component } from 'react';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      player_name: '',
      portal_id: ''

  }
  // state = {
  //   text: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addPlayer(this.state.player_name, this.state.portal_id);
    this.setState({
      player_name: '',
      portal_id: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)} >
            <label for="player_name">Player Name:</label>
            <input type="text" name="player_name" value={this.state.player_name} onChange={event => {this.handleOnChange(event)}} />
            <label for="portal_id">Select a platform </label>
            <select name="portal_id" >
                <option value="5">Steam</option>
                <option value="9">PS4</option>
                <option value="10">XBox</option>
                <option value="22">Switch</option>
                <option value="1">PC</option>
            </select>
          <input type="submit" />
        </form>
        
      </div>
    );
  }
};

export default PlayerInput;
