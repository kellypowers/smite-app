import React, { Component } from 'react'
import Gods from '../components/gods/Gods'
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import GodSearch from '../components/gods/GodSearch'

class GodsContainer extends Component {



  render() {
      console.log("props in Gods is " + JSON.stringify(this.props))
    return (
      <div>
          <GodSearch />
        <Gods gods={this.props.gods} /> 
      </div>
    )
  }
}






export default GodsContainer;
