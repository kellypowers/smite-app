import React, { Component } from 'react';

class Player extends Component {
  // componentDidMount() {
  //   console.log("props in player is " + JSON.stringify(this.props.player.player));
  // }
  // handleOnClick = () => {this.props.deletePlayer(this.props.player.id)}
  // console.log(this.props);

    // componentDidUpdate = () => {
    //   if (this.props.player.player.player != undefined) {
    //     console.log("props in player is " + JSON.stringify(this.props));
    //     return (
    //       <div>
    //         {/* Name: */}
    //         Name: {this.props.player.player.player.Name}
    //       </div>)
    //   }else {
    //     return "Enter Player Info to see Player"
    //   } 

    // }
    
    
    renderPlayer = () => {
      if (this.props.player.loading == 'success') {
        console.log("props in player is " + JSON.stringify(this.props));
        return (
          <div>
            Name: {this.props.player.player.Name}
            Level: {this.props.player.player.Level}
          </div>)
      }else {
        return "Try Again"
      } 

    }
        
    // renderPlayer = () => {
    //   if (this.props.player != undefined) {
    //     console.log("props in player is " + JSON.stringify(this.props));
    //     return (
    //       <div>
    //         {/* Name: */}
    //         Name: {this.props.player.Name}
    //       </div>)
    //   }
    //   // else {
    //   //   this.renderPlayer()
    //   // } 

    // }

    // render = () => {
      
    // }

  render() {
    console.log("in plaer " + JSON.stringify(this.props))
    return (
      <div>
          {/* {player text} */}
          <br />
          {/* Player Info:  */}
          {/* {this.renderPlayer()} */}
        {/* <button onClick={this.handleOnClick}> X </button> */}
        Name: {this.props.player.player.player.Name}
      </div>
    );
  }

};

export default Player;
