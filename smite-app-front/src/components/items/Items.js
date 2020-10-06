import React, { Component } from 'react';
import Item from './Item'
import { Link } from 'react-router-dom';
import {Media} from 'react-bootstrap';


class Items extends Component {

  renderItemList = () => {
    const filterItemName = this.props.filterItemName;
    let items = Object.values(this.props.items).slice(0, -1);
    let filteredItems = items.filter(item => item.name.toLowerCase().startsWith(filterItemName.toLowerCase()));
    if (filteredItems.length !== 1) {
      return filteredItems.map(item => {
        return (<li key={item.item_id}><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name} </Link></li>)
      })
    // } else if (filteredItems.length > 1) {
    //   return items.map(item =>
    //       <li key={item.item_id}><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name} </Link> </li>)
    } else {
      return Object.entries(this.props.items).map(item => <Item item={item[1]} key={item[1].item_id} />)
    }
  }

  render() {
    return(
    <div className="items">
      <ul className="items-list">
        {this.renderItemList()}
      </ul>
    </div>
    )}
};

export default Items;