import React, { Component } from 'react'
import { connect } from 'react-redux'

class BuildsItems extends Component {

    state = {
        item1: "",
        item2: "", 
        item3: "",
        item4: "",
        item5: "",
        item6: ""
    }

    renderItems = () => {
        this.props.items.items.map(item => {
        return <div>{item.item_image}{item.name}{item.stat}</div>
        })
    }
    
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }

}

export default BuildsItems;