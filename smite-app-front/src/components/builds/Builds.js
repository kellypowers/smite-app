import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteBuild} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchBuilds.js'

class Builds extends Component {

    renderBuildsList = () => {
        return this.props.builds.builds.map(build => {
            return <li className="build-list-item" key={build.id}><Link to={`builds/${build.id}`}> <strong>{this.props.gods.gods.find(g=> g.god_id === build.god_id_smite).name} </strong> - {build.name}  </Link><button className="deleteButton" onClick={() =>this.props.deleteBuild(build.id) }>Delete</button><br/></li> 
        })
    }
    render() {
        return (
            <div className="buildsHomePage">
                <ul className="builds-list">
                    {this.renderBuildsList()}
                </ul>
                <button className="new-build-btn"><Link to={`build/new`}>Create New Build</Link></button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      gods: state.gods,
      items: state.items,
      builds: state.builds,
      loading: state.loading
    }
    }

export default connect(mapStateToProps, {deleteBuild})(Builds)