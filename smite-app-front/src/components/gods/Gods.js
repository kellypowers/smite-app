import React, { Component } from 'react';
import God from './God'


class Gods extends Component {
    //action creater function to pass each god to the God component
    renderGodList = () => {
        return this.props.gods.map(god => 
         (<God god={god} key={god.god_id} />))
    }
  render() {
    // console.log(`props in gods is ${JSON.stringify(this.props)}`);
    // console.log(`props.gods in gods is ${JSON.stringify(this.props.gods)}`);

    return (
      <ul>
        {this.renderGodList()}
      </ul>
    );
  }
};

export default Gods;