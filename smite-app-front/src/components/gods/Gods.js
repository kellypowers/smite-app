import React, { Component } from 'react';
import God from './God'


class Gods extends Component {
  render() {
    console.log(`props in gods is ${JSON.stringify(this.props)}`);
    let gods = this.props.gods;

    const godList = gods.map( god => {
      return <God key={god.god_id} god={god}  />
    })
    return (
      <ul>
        {godList}
      </ul>
    );
  }
};

export default Gods;