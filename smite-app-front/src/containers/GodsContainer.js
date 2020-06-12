import React, { Component } from 'react'
import { fetchGods } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchGods';
import Gods from '../components/gods/Gods'
import { connect } from 'react-redux'

// move gods over to this

class GodsContainer extends Component {
  // state: {
  //   name: ''
  // }

  render() {
      console.log("props in Gods is " + JSON.stringify(this.props))
    return (
      <div>
        <br/>
        {/* <label for="god_name">Search by God Name:</label>
        <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
           */}
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
