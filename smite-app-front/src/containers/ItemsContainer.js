import React, { Component } from 'react'
import Items from '../components/items/Items'
import { fetchItems } from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/fetchItems';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class ItemsContainer extends Component {
    componentDidMount() {
        this.props.fetchItems()
      }
      
      handleLoading = () => {
        console.log(this.props.items.loading)
        if (this.props.items.loading) {
          return <div>Loading...</div>
        } 
      }


  render() {
      console.log("props in itemscont is " + JSON.stringify(this.props))
    return (
      <div>

        <Items items={this.props.items} /> 
      </div>
    )
  }
}


const mapDispatchToProps = state => {
  return {
    // gods: state.gods,
    items: state.items,
    // this will be selector.gods
    loading: state.loading
  }
}



// export default ItemsContainer;
export default connect(mapDispatchToProps, {fetchItems})(ItemsContainer)
