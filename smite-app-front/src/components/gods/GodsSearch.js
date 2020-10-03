import React, { Component } from 'react'

class GodsSearch extends Component {
    render() {
        return (
            <div className="gods-search">
                <label >Search by God Name:</label>
                <input type="text" name="name" placeholder="" value={this.props.name} onChange={event => {this.props.handleOnChange(event)}} />
            </div>
        )
    }
}

export default GodsSearch