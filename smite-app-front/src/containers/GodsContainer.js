import React, { Component } from 'react'
import { fetchGods } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchGods';
import Gods from '../components/gods/Gods'
import { connect } from 'react-redux'

// move gods over to this

class GodsContainer extends Component {


  render() {
      console.log("props in Gods is " + JSON.stringify(this.props))
    return (
      <div>
        <br/>
        <Gods  /> 
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
