import React, { Component } from 'react';
import Player from './Player'
import {Redirect} from 'react-router-dom'
import { fetchPlayer } from '../../actions/fetchPlayer'
import { connect } from 'react-redux';
import history from 'history/browser';

class PlayerSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
        player_name: '',
        portal_id: '',
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
    window.location = `http://localhost:3001/players/find/${this.state.portal_id}/${this.state.player_name}`
}

  renderForm = () =>(
    <div className="findPlayerForm">
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
    if (this.props.player.loading === 'success' || this.props.player.ActivePlayerId !== undefined) {

     return  <Redirect to="/account_info" />
    } else {
      return console.log("Try Again")
    } 
  }

  render() {
    // if (this.props.player.loading ==='success') {
    //   return (
    //     this.renderPlayer() 
    //   )
    // } else {
    return (
      <div>
        {this.renderForm()}
        
      </div>
    );
    }
  // }
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
