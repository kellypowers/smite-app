import React, { Component } from 'react'
import Items from '../components/items/Items'
import { fetchItems } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchItems';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class ItemsContainer extends Component {

  render() {
      console.log("props in itemscont is " + JSON.stringify(this.props))
    return (
      <div>

        <Items items={this.props.items} /> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(ItemsContainer)

