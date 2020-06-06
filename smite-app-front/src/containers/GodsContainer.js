import React, { Component } from 'react'
import Gods from '../components/gods/Gods'
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class GodsContainer extends Component {



  render() {
      console.log("props in Gods is " + JSON.stringify(this.props))
    return (
      <div>
        <Gods gods={this.props.gods.gods} /> 
      </div>
    )
  }
}






export default GodsContainer;
