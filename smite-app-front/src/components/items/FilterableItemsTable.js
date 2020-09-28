import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import Items from './Items';

export default class FilterableItemsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterItemName = "";
        };
    }
    render() {
        return (
            <div>
            <SearchBar name={this.state.name}/>
            <Items
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
      gods: state.gods,
      items: state.items,
      loading: state.loading
    }
  }
  export default connect(mapStateToProps)(FilterableItemsTable);