import React, { Component } from 'react';

class God extends Component {

  render() {
    // const { god } = this.props
    console.log(this.props);
    return (
      <div>
        <li>
          {/* {player.text} */}
          {this.props.god}
        </li>
      </div>
    );
  }

};

export default God;
