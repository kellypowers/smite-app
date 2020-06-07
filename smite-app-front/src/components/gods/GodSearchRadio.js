import React, {Component} from 'react';
import {findGodByRole, findGodByPantheon} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import { connect } from 'react-redux';
import GodPantheonDropdown from './GodPantheonDropdown';
import GodRolesDropdown from './GodRolesDropdown'


class GodSearchRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "roles"
        }
    }
   

    renderSearchFilter = () => {
        console.log(`radio state ${JSON.stringify(this.state)}`);
        if (this.state.selectedOption === "roles") {
            return <GodRolesDropdown/>
        } else if (this.state.selectedOption=== "pantheon") {
            return <GodPantheonDropdown/>
        }
    }
    

    handleOnChange = event => {
        this.setState({
          selectedOption: event.target.value
        })
    }
   
    render() { 
      return (
        <div>

            Sort By: 
            Role <input type="radio" value="roles" name="filter" checked={this.state.selectedOption === "roles"} onChange={event => this.handleOnChange(event)}/>
            Pantheon <input type="radio" value="pantheon" name="filter" checked={this.state.selectedOption === "pantheon"} onChange={event => this.handleOnChange(event)}/>

            {this.renderSearchFilter()}
        </div>

      )
    }
   
}
  


export default connect(null, {findGodByRole, findGodByPantheon})(GodSearchRadio);