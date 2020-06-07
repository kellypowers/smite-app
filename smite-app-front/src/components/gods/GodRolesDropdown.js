import React, {Component} from 'react'
import {findGodByRole} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import{connect} from 'react-redux'

class GodRolesDropdown extends Component{
    state = {
        role: ""
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        const role = this.state.role;
        this.props.findGodByRole(role)
        this.setState({
            role: ""
        })
    }

    handleOnSelect = event => {
        console.log(event.target.value);
        this.setState({
          role: event.target.value
        })
      }
    render(){
        console.log(`role dropdown state ${JSON.stringify(this.state)}`)
        return (
            <form id="role" onSubmit={event => this.handleOnSubmit(event)} >
            <select onChange={event => this.handleOnSelect(event)} name="role" >
                <option value=""> </option>
                <option value=" Warrior">Warrior</option>
                <option value=" Guardian">Guardian</option>
                <option value=" Mage">Mage</option>
                <option value=" Hunter">Hunter</option>
                <option value=" Assassin">Assassin</option>
            </select>
            <input type="submit" />
            </form>
        )
    }
}

export default connect(null, {findGodByRole})(GodRolesDropdown);