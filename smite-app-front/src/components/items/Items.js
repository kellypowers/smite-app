import React, { Component } from 'react';
import {findItem} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import Item from './Item'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Media} from 'react-bootstrap'
// import ItemSearch from './ItemSearch'


class Items extends Component {
    //action creater function to pass each Item to the Item component
    renderItemList = () => {
      console.log("items " + JSON.stringify(this.props.items))
        if (this.props.items.items.length > 1) {
        return this.props.items.items.map(item => 
          <li><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name}</Link></li>)
        } else {
            return this.props.items.items.map(item => 
                (<Item item={item} key={item.item_id} />))
        }
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