import React, { Component } from 'react';
import {findGod} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import God from './God'
import { connect } from 'react-redux';

class Gods extends Component {
    //action creater function to pass each god to the God component
    renderGodList = () => {
        console.log(`this.props.god in gods is ${JSON.stringify(this.props.gods)}`)
        // renders all 109 gods unless there are filters applied, then renders the info for each.. might do if props.gods.length > 1, then can just list the gods if search for all mages, etc
        if (this.props.gods.gods.length > 1) {
        return this.props.gods.gods.map(god => 
        <li onClick={event => this.handleClick(event)} key={god.god_id}>{god.name}</li> )
        } else {
            return this.props.gods.gods.map(god => 
                (<God god={god} key={god.god_id} />))
        }
    }

    handleClick = (event) => {
        this.props.findGod(event.target.innerText);
    }
  render() {


    return (
      <ul>
        {this.renderGodList()}
      </ul>
    );
  }
};

export default connect(null, {findGod})(Gods);