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
        if (this.props.items.loading === 'success') {
            return (
                <div>
                <SearchBar name={this.state.name}/>
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
  export default connect(mapStateToProps)(FilterableItemsTable);