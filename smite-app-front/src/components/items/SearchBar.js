import React, { Component } from 'react'

class SearchBar extends Component {

    handleChange = (event) => {
        this.props.handleStateChange(event.target.value)
    }
    render() {
        return (
            <form class="searchBar">
                <h3>Search by item Name:<input type="text" name="name" placeholder="" value={this.props.filterItemName} onChange={this.handleChange} /> </h3>
            </form>
        )
    }
}

  export default SearchBar;
