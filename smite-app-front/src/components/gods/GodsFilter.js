import React, { Component } from 'react'

class GodsFilter extends Component {

    render() {
        return(
            <div className="gods-filter">
                <h5>Sort By {this.props.eventName}: </h5> 
                <select onChange={event => this.props.handleOnChange(event)} name={this.props.eventName} >
                    {/* <option value=" "> </option> */}
                    {this.props.option.map(o => {
                        return (<option value={o}>{o}</option>)
                    })}
                </select>
                {/* <button onClick={this.props.clearFilters()}></button> */}
            </div>
        )}
}

export default GodsFilter