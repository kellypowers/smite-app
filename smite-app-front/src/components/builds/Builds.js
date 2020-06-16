import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Build from './Build'
import { connect } from 'react-redux'

class Builds extends Component {

    renderBuildsList = () => {
        return Object.values(this.props.builds).map(build => {
            // return Object.entries(this.props.builds).map(build => {
            //  let god = this.props.gods.gods.find(g => g.god_id == build.god_id_smite);
            console.log("builds gods is " + build.god_id_smite);
            // debugger
            return <li><Link to={`builds/${build.id}`}>{build.name} -  </Link></li> 
        })
    }
    render() {
        console.log("builds " + JSON.stringify(this.props.builds))
        return (
            <div>
                {this.renderBuildsList()}
               
            </div>
        )
    }
}

export default Builds;