import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {findGod} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import God from './God'
import { connect } from 'react-redux';
import GodSearch from './GodSearch'
import GodSearchRadio from './GodSearchRadio'

class Gods extends Component {

    renderGodList = () => {
        console.log(`this.props.god in gods is ${JSON.stringify(this.props)}`);
        if (this.props.gods.gods.length > 1) {
          return this.props.gods.gods.map(god => 
        <li><Link to={`gods/${god.god_id}`}>{god.name}</Link></li>)
        } else {
            return this.props.gods.gods.map(god => 
                (<God god={god} key={god.god_id} />))
        }
    }


    handleClick = (event) => {
      
        let idx = this.props.gods.gods.findIndex(god => god.name.toLowerCase() === event.target.innerText.toLowerCase() );
        return this.props.gods.gods[idx]
      
    }
  render() {


    return (
      <ul>
          <GodSearch  />
          <GodSearchRadio  />
        {this.renderGodList()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  console.log(state)
  return {
    gods: state.gods,
    // items: state.items,
    // builds: state.builds,
    // player: state.player,
    // this will be selector.gods
    // loading: state.loading
  }
}


export default connect(mapStateToProps, {findGod})(Gods);