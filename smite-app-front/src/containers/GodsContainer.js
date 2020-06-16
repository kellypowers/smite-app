import React, { Component } from 'react'
import Gods from '../components/gods/Gods'
import God from '../components/gods/God'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

// move gods over to this

class GodsContainer extends Component {
  state = {
      // gods: this.props.gods.gods,
      selectedOption: "roles",
      name: "",
      role: "",
      pantheon: ""
    }
  
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderSearchFilter = () => {
    console.log(`radio state ${JSON.stringify(this.state)}`);
    if (this.state.selectedOption === "roles") {
      return (
        <select onChange={event => this.handleOnChange(event)} name="role" >
            <option value=""> </option>
            <option value=" Warrior">Warrior</option>
            <option value=" Guardian">Guardian</option>
            <option value=" Mage">Mage</option>
            <option value=" Hunter">Hunter</option>
            <option value=" Assassin">Assassin</option>
        </select>
    )
    } else if (this.state.selectedOption=== "pantheon") {
        return (
        <select onChange={event => this.handleOnChange(event)} name="pantheon" >
        <option value=" "> </option>
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

  clearFilters= () => {
    this.setState({
      name: "",
      role: "",
      pantheon: ""
    })
  }

  handleClick = (event) => {
    let idx = this.props.gods.gods.findIndex(god => god.name.toLowerCase() === event.target.innerText.toLowerCase() );
    return this.props.gods.gods[idx]
  }

  renderGodList = () => {
     console.log(`this.state.god cosntinaer in gods is ${JSON.stringify(this.props.gods.gods)}`);
    if (this.state.name !== "") {
      let filteredGods = this.props.gods.gods.filter(god => god.name.toLowerCase().startsWith(this.state.name.toLowerCase()));
    return filteredGods.map(god => <li> <Link to={`gods/${god.god_id}`}>{god.name}</Link> </li>)
    }
    else if (this.state.role !== "") {
      let godRoles = this.props.gods.gods.filter(god => (god.roles) === this.state.role );
      return godRoles.map(god => <li> <Link to={`gods/${god.god_id}`}>{god.name}</Link> </li>)
    } else if (this.state.pantheon !== "") {
      let godsPantheon = this.props.gods.gods.filter(god => god.pantheon === this.state.pantheon );
      return godsPantheon.map(god => <li> <Link to={`gods/${god.god_id}`}>{god.name}</Link> </li>)
    }
   else if (this.props.gods.gods.length > 1) {
      return this.props.gods.gods.map(god => 
    <li><Link to={`gods/${god.god_id}`}>{god.name}</Link></li>)
    } else {
        return this.props.gods.gods.map(god => 
          (<God god={god} key={god.god_id} />))
    }
  }; 

  render() {
      // if (this.state.role !== "") {
      //   let godRoles = this.props.gods.gods.filter(god => (god.roles) === this.state.role );
      //   return godRoles.map(god => <li> <Link to={`gods/${god.god_id}`}>{god.name}</Link> </li>)
      // } else if (this.state.pantheon !== "") {
      //   let godsPantheon = this.props.gods.gods.filter(god => god.pantheon === this.state.pantheon );
      //   return godsPantheon.map(god => <li> <Link to={`gods/${god.god_id}`}>{god.name}</Link> </li>)
      // }
    return (
      <div>
        <br/>
        <div>
          <label for="god_name">Search by God Name:</label>
          <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
        </div>
        <div>
            Sort By: 
            Role <input type="radio" value="roles" name="selectedOption" checked={this.state.selectedOption === "roles"} onChange={event => this.handleOnChange(event)}/>
            Pantheon <input type="radio" value="pantheon" name="selectedOption" checked={this.state.selectedOption === "pantheon"} onChange={event => this.handleOnChange(event)}/>
            {this.renderSearchFilter()}
        </div>
        <button onClick={()=> this.clearFilters()}>Clear Filters</button>
          <ul>
            {this.renderGodList()}
          </ul>
        
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    // this will be selector.gods
    loading: state.loading
  }
}



// export default GodsContainer;
export default connect(mapStateToProps)(GodsContainer)
