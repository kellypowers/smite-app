import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Builds from '../components/builds/Builds'
import BuildNew from '../components/builds/BuildNew'
import { connect } from 'react-redux'

class BuildsContainer extends Component {
    render() {
        // console.log("props in buildcont is " + JSON.stringify(this.props))
        if (this.props.builds.loading==='success' || this.props.builds.loading==='posted')
    return (
        <div>
            <button><Link to={`build/new`}>Create New Build</Link></button>
            {/* <BuildNew items={this.props.items} gods={this.props.gods} builds={this.props.builds}/> */}
            <Builds items={this.props.items} gods={this.props.gods} builds={this.props.builds} removeBuild={this.props.removeBuild}/> 
        
        </div>
    )
    }
}


const mapStateToProps = state => {
return {
  gods: state.gods,
  items: state.items,
  builds: state.builds,
  // this will be selector.gods
  loading: state.loading
}
}

const mapDispatchToProps = dispatch => {
    return {
        removeBuild: id => dispatch({type: "REMOVE_BUILD", id})
    }
}


// export default ItemsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(BuildsContainer)

