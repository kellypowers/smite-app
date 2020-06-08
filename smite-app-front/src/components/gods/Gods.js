import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import {findGod} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import God from './God'
import { connect } from 'react-redux';
import GodSearch from './GodSearch'
import GodSearchRadio from './GodSearchRadio'

class Gods extends Component {
  constructor(props) {
    super(props)
  }

    //action creater function to pass each god to the God component
    renderGodList = () => {
        console.log(`this.props.god in gods is ${JSON.stringify(this.props)}`)
        // renders all 109 gods unless there are filters applied, then renders the info for each.. might do if props.gods.length > 1, then can just list the gods if search for all mages, etc
        if (this.props.gods.gods.length > 1) {
        return this.props.gods.gods.map(god => 
        // <Link key={god.god_id} to={`/gods/${god.god_id}`}><li onClick={event => this.handleClick(event)}>{god.name}</li></Link>)
        <li key={god.god_id} onClick={event => this.handleClick(event)}>{god.name}</li>)
        } else {
            return this.props.gods.gods.map(god => 
              // console.log(god);
            // <Route path={`gods/${god.god_id}`} component={<God god={god} key={god.god_id} />}/>)
              // <Route path='/gods' render={routerProps => <God key={god.god_id} {...routerProps} god={god}/>} />)
                (<God god={god} key={god.god_id} />))
        }
    }

    handleClick = (event) => {
        this.props.findGod(event.target.innerText);
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

export default connect(null, {findGod})(Gods);