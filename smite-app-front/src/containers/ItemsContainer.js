import React, { Component } from 'react'
import Items from '../components/items/Items'
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class ItemsContainer extends Component {

  render() {
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

