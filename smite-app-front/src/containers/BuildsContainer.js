import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Builds from '../components/builds/Builds'
import { connect } from 'react-redux'

class BuildsContainer extends Component {
    render() {
        if (this.props.builds.loading==='success') {
            return (
                <div>
                    <button><Link to={`build/new`}>Create New Build</Link></button>}
                    <Builds items={this.props.items} gods={this.props.gods} builds={this.props.builds} />         
                </div>
            )
        }
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

export default connect(mapStateToProps)(BuildsContainer)

