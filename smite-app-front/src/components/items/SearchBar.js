import React, { Component } from 'react'

class SearchBar extends Component {

    handleChange = (event) => {
        this.props.handleStateChange(event.target.value)
        // this.props.handleStateChange(event.target.value)
    }
    render() {
        return (
            <form class="searchBar">
                <h3>{this.props.title}:<input type="text"  placeholder="" value={this.props.filterItem} onChange={this.handleChange} /> </h3>
            </form>
        )
    }
}

  export default SearchBar;
