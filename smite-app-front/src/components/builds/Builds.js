import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Build from './Build'
import { connect } from 'react-redux'
import {deleteBuild} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchBuilds.js'

class Builds extends Component {

  

    renderBuildsList = () => {
        return this.props.builds.builds.map(build => {
            // return Object.entries(this.props.builds).map(build => {
            //  let god = this.props.gods.gods.find(g => g.god_id == build.god_id_smite);
            // console.log("builds gods is " + build.god_id_smite);
            // debugger
            return <li><Link to={`builds/${build.id}`}>{build.name} -  </Link><button onClick={() =>this.props.deleteBuild(build.id) }>delete</button></li> 
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


const mapStateToProps = state => {
    return {
      gods: state.gods,
      items: state.items,
      builds: state.builds,
      // this will be selector.gods
      loading: state.loading
    }
    }
// const mapDispatchToProps = dispatch => {
//     return {
//         deleteBuild: id => dispatch({type: "REMOVE_BUILD", id})
//     }
// }


// export default Builds;
export default connect(mapStateToProps, {deleteBuild})(Builds)