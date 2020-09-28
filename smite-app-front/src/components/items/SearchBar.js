import React, { Component } from 'react'

class SearchBar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this)
    // }

    handleChange = (event) => {
        this.props.handleStateChange(event.target.value)
    }
    render() {
        return (
            <form class="searchBar">
                <label >Search by item Name:</label>
                <input type="text" name="name" placeholder="" value={this.props.filterItemName} onChange={this.handleChange} />
            </form>
        )
    }
}

  export default SearchBar;
