import React, {Component} from 'react'
import {findGodByPantheon} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import{connect} from 'react-redux'

class GodPantheonDropdown extends Component{
    state = {
        pantheon: ""
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        const pantheon = this.state.pantheon;
        this.props.findGodByPantheon(pantheon)
        this.setState({
            pantheon: ""
        })
    }

    handleOnSelect = event => {
        this.setState({
          pantheon: event.target.value
        })
      }
    render(){
        return (
            <form id="pantheon" onSubmit={event => this.handleOnSubmit(event)} >
            <select onChange={event => this.handleOnSelect(event)} name="pantheon" >
                <option value="Greek">Greek</option>
                <option value="Hindu">Hindu</option>
                <option value="Mayan">Mayan</option>
                <option value="Egyptian">Egyptian</option>
                <option value="Japanese">Japanese</option>
                <option value="Slavic">Slavic</option>
                <option value="Celtic">Celtic</option>
                <option value="Roman">Roman</option>
                <option value="Voodoo">Voodoo</option>
                <option value="Norse">Norse</option>
                <option value="Arthurian">Arthurian</option>
                <option value="Polynesian">Polynesian</option>
                <option value="Yoruba">Yoruba</option>
            </select>
            <input type="submit" />
            </form>
        )
    }
}

export default connect(null, {findGodByPantheon})(GodPantheonDropdown);