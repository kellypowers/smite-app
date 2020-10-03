import React, { Component } from 'react'
import Items from '../components/items/Items'
import { connect } from 'react-redux'
import SearchBar from '../components/items/SearchBar';
import NavBar from '../components/navigation/NavBar'


class ItemsContainer extends Component {
  state = {
    filterItemName: ""
  };
  
  handleStateChange = (input) => {
    this.setState({filterItemName: input})
  }

  render() {
    if (this.props.items.loading === 'success') {
      return (
        <div className="items-container">
          <NavBar />
          <SearchBar 
            filterItemName={this.state.filterItemName}
            handleStateChange={this.handleStateChange}
          />
          <Items 
              items={this.props.items}
              filterItemName={this.state.filterItemName}
          />
        </div>
        )
    } else {return "Loading..."}
  }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
      items: state.items,
      loading: state.loading
    }
  }
  export default connect(mapStateToProps)(ItemsContainer);

