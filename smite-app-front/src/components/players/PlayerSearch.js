import React, { Component } from 'react';
import Player from './Player'
import {Redirect} from 'react-router-dom'
import { fetchPlayer } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Player'
import { connect } from 'react-redux';

class PlayerSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
        player_name: '',
        portal_id: '',
        // player: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      player_name: event.target.value
    })
  }
  handleOnSelect = event => {
    this.setState({
      portal_id: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // const result = this.props.fetchPlayer(this.state);
    this.props.fetchPlayer(this.state);
    // console.log("result is " + JSON.stringify(result));

}

  renderForm = () =>(
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
  )
  
  renderPlayer = () => {
    if (this.props.player.loading === 'success') {
      
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
        <Player key={this.props.player.Name} player={this.props.player} /> 
        </div>
          )
    } else {
      return console.log("Try Again")
    } 
  }

  render() {
    // console.log("props is " + JSON.stringify(this.props));
    if (this.props.player.loading ==='success') {
      return (
        this.renderPlayer() 
      )
    } else {
    return (
      <div>
        {this.renderForm()}
        
      </div>
    );
    }
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
    loading: state.loading
  }
}


export default connect(mapStateToProps, {fetchPlayer})(PlayerSearch);
