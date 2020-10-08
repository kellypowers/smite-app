import React, { Component } from 'react'
import Items from '../components/items/Items'
import { connect } from 'react-redux'
import SearchBar from '../components/items/SearchBar';
import NavBar from '../components/navigation/NavBar'


class ItemsContainer extends Component {
  state = {
    filterItemName: "",
    filterItemStat: ""
  };
  
  handleStateChange = (input) => {
    this.setState({filterItemName: input})
  }
  handleStateChangeStat = (input) => {
    this.setState({filterItemStat: input})
  }

  render() {
    if (this.props.items.loading === 'success') {
      console.log(`in items continaer state ${JSON.stringify(this.state)}`)
      return (
        <div className="items-container">
          <NavBar />
          <SearchBar 
            title={`Search by item Name`}
            filterItem={this.state.filterItemName}
            handleStateChange={this.handleStateChange}
          />
          <SearchBar 
            title={`Search by item Stat`}
            filterItem={this.state.filterItemStat}
            handleStateChange={this.handleStateChangeStat}
          />
          <Items 
              items={this.props.items}
              filterItemName={this.state.filterItemName}
              filterItemStat={this.state.filterItemStat}
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

