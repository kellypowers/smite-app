import React, { Component } from 'react';
import {findItem} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import Item from './Item'
import { connect } from 'react-redux';
// import ItemSearch from './ItemSearch'


class Items extends Component {
    //action creater function to pass each Item to the Item component
    renderItemList = () => {
        console.log(`this.props.Item in Items is ${JSON.stringify(this.props.items)}`)
        // renders all 109 Items unless there are filters applied, then renders the info for each.. might do if props.Items.length > 1, then can just list the Items if search for all mages, etc
        if (this.props.items.items.length > 1) {
        return this.props.items.items.map(item => 
        <li  key={item.item_id}><img onClick={event => this.handleClick(event)} src={item.item_image} alt={item.name}/>{item.name}</li> )
        } else {
            return this.props.items.items.map(item => 
                (<Item item={item} key={item.item_id} />))
        }
    }

    handleClick = (event) => {
        console.log(event.target.alt);
        this.props.findItem(event.target.alt);
    }
  render() {


    return (
      <ul>
          {/* <ItemSearch  /> */}
        {this.renderItemList()}
      </ul>
    );
  }
};

export default connect(null, {findItem})(Items);