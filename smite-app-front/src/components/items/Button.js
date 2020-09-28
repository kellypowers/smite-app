import React, { Component } from 'react'

export default class Button extends Component {
    state = {
        counter: 0
      }
    
    increaseCounter = event => {
    event.preventDefault();
    this.setState({
        ...this.state,
        counter: this.state.counter + 1
    })
    }
    render() {
        return (
            <div>
                <button onClick={e => {this.increaseCounter(e)}}>{this.state.counter}</button>
            </div>
        )
    }
}
