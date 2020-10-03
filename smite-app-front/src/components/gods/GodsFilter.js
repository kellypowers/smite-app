import React, { Component } from 'react'

class GodsFilter extends Component {

    renderSearchFilter = () => {
        if (this.props.selectedOption === "roles") {
        return (
            <select onChange={event => this.props.handleOnChange(event)} name="role" >
                <option value=""> </option>
                <option value=" Warrior">Warrior</option>
                <option value=" Guardian">Guardian</option>
                <option value=" Mage">Mage</option>
                <option value=" Hunter">Hunter</option>
                <option value=" Assassin">Assassin</option>
            </select>
        )
        } else if (this.props.selectedOption=== "pantheon") {
            return (
            <select onChange={event => this.props.handleOnChange(event)} name="pantheon" >
                <option value=" "> </option>
                <option value="Great Old Ones">Great Old Ones</option>
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
        )
    }
}
    render() {
        return(
            <div className="gods-filter">
                <h3>Sort By:</h3>
                <label>Role</label> 
                <input type="radio" value="roles" name="selectedOption" checked={this.props.selectedOption === "roles"} onChange={event => this.props.handleOnChange(event)}/>

                <label>Pantheon</label> 
                <input type="radio" value="pantheon" name="selectedOption" checked={this.props.selectedOption === "pantheon"} onChange={event => this.props.handleOnChange(event)}/>
                {this.renderSearchFilter()}
            </div>
        )}
}

export default GodsFilter