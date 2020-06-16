import React, { Component } from 'react'
import { connect } from 'react-redux'

class BuildsItems extends Component {

    state = {
       items: []
    }

    handleOnChange = event => {
        console.log(`items${[parseInt(event.target.name)]}`);
        const statename = "items["+parseInt(event.target.name) +"]";
        console.log(statename);
        this.setState({
            // ...this.state.items,
          [statename]: event.target.value
        })
      }
      renderItemSelect = () => {
        for (let i=0; i<6; i++) {
        // return <select name={"items"} onChange={e => this.handleOnChange(e)} > 
        return  this.props.items.map(item => {
            if (this.state.items.find(j => j.name)) {return ""} else {
        return <option value={item.name}>{item.name}</option>}
        })
        // </select>
    }
    }

    renderItems = () => {
        this.props.items.map(item => {
        return <div>{item.item_image}{item.name}{item.stat}</div>
        })
    }
    
    render() {
        console.log(this.state);
        return (
            <div>
                <label for="item1">First Item:</label>
                <select name="0" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
              <label for="item2">Second Item:</label>
              <select name="1" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                  {this.renderItemSelect()}
                </select>
                <label for="item3">First Item:</label>
                <select name="2" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
              <label for="item4">Second Item:</label>
              <select name="4" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
            </div>
        )
    }

}

export default BuildsItems;