import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {deleteBuild} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchBuilds.js'

class Builds extends Component {

    renderBuildsList = () => {
        return this.props.builds.builds.map(build => {
            return <li><Link to={`builds/${build.id}`}>{this.props.gods.gods.find(g=> g.god_id === build.god_id_smite).name} - {build.name}  </Link><button onClick={() =>this.props.deleteBuild(build.id) }>delete</button></li> 
        })
    }
    render() {
        return (
            <div>
                {this.renderBuildsList()}
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