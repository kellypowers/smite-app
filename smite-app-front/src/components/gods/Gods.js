import React, { Component } from 'react'
import God from './God'
import { Link } from 'react-router-dom';

class Gods extends Component {
    //UPDATE LIST WITH USER INPUT - SEARCH BAR OR BY DROPDOWN 
    renderGodList = () => {
        if (this.props.name !== "") {
          let filteredGods = this.props.gods.filter(god => god.name.toLowerCase().startsWith(this.props.name.toLowerCase()));
          return filteredGods.map(god => <li key={god.god_id}> <Link to={`gods/${god.god_id}`}><img className="god-list-image" src={god.god_image} alt={god.name}/><br/>{god.name}</Link> </li>)
        }
        else if ((this.props.role !=="All") && (this.props.pantheon !== "All")){
          let godRoles = this.props.gods.filter(god => (god.roles) === this.props.role );
          let godsPantheonToo = godRoles.filter(god => god.pantheon === this.props.pantheon );
          return godsPantheonToo.map(god => <li key={god.god_id}> <Link to={`gods/${god.god_id}`}><img className="god-list-image" src={god.god_image} alt={god.name}/><br/>{god.name}</Link> </li>)
        }
        else if (this.props.role !== "All") {
          let godRoles = this.props.gods.filter(god => (god.roles) === this.props.role );
          return godRoles.map(god => <li key={god.god_id}> <Link to={`gods/${god.god_id}`}><img className="god-list-image" src={god.god_image} alt={god.name}/><br/>{god.name}</Link> </li>)
        } else if (this.props.pantheon !== "All") {
          let godsPantheon = this.props.gods.filter(god => god.pantheon === this.props.pantheon );
          return godsPantheon.map(god => <li key={god.god_id}> <Link to={`gods/${god.god_id}`}><img className="god-list-image" src={god.god_image} alt={god.name}/><br/>{god.name}</Link> </li>)
        }
       else if (this.props.gods.length > 1) {
       return this.props.gods.map(god => <li key={god.god_id}><Link to={`gods/${god.god_id}`}><img className="god-list-image" src={god.god_image} alt={god.name}/><br/>{god.name}</Link></li>)
        } else {
            return this.props.gods.map(god => <God god={god} key={god.god_id} />)
        }
      };
    render() {
        return (
            <ul className="gods-list">
                {this.renderGodList()}
            </ul>
        )
    }
}

export default Gods