import React, { Component } from 'react'
import { fetchGods } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchGods';
import Gods from '../components/gods/Gods'
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import GodSearch from '../components/gods/GodSearch'
import GodSearchRadio from '../components/gods/GodSearchRadio'


class GodsContainer extends Component {

  componentDidMount() {
    this.props.fetchGods()
  }
  
  handleLoading = () => {
    console.log(this.props.gods.loading)
    if (this.props.gods.loading) {
      return <div>Loading...</div>
    }
  }

  render() {
      console.log("props in Gods is " + JSON.stringify(this.props))
    return (
      <div>
        {/* {this.handleLoading} */}
     

        <Gods gods={this.props.gods} /> 
      </div>
    )
  }
}


const mapDispatchToProps = state => {
  return {
    gods: state.gods,
    items: state.items,
    // this will be selector.gods
    loading: state.loading
  }
}



// export default GodsContainer;
export default connect(mapDispatchToProps, {fetchGods})(GodsContainer)
