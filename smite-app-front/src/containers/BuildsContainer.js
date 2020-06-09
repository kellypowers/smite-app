import React, { Component } from 'react'
import Builds from '../components/builds/Builds'
import BuildNew from '../components/builds/BuildNew'
import { connect } from 'react-redux'

class BuildsContainer extends Component {
    render() {
        console.log("props in buildcont is " + JSON.stringify(this.props))
    return (
        <div>
            <BuildNew items={this.props.items} gods={this.props.gods} builds={this.props.builds}/>
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

