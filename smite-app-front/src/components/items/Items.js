import React, { Component } from 'react';
import Item from './Item'
import { Link } from 'react-router-dom';
import {Media} from 'react-bootstrap';


class Items extends Component {

  renderItemList = () => {
    const filterItemName = this.props.filterItemName;
    const filterItemStat = this.props.filterItemStat;
    let items = Object.values(this.props.items).slice(0, -1);
    let filteredItemsName = items.filter(item => item.name.toLowerCase().startsWith(filterItemName.toLowerCase()));
    let filteredItemsStat = items.filter(item => item.item_stat.toLowerCase().includes(filterItemStat.toLowerCase()));
    console.log(`filter item is ${JSON.stringify(this.props.filterItemStat)}`);
    console.log(`length is ${filterItemName.length}`)
    // console.log(`filtereditemstat array  is ${JSON.stringify(filteredItemsStat)}`);
    if (filterItemName.length > 1) {
      console.log("in if")
      return filteredItemsName.map(item => {
        return (<li key={item.item_id}><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name} </Link></li>)
      })
    } else if (filterItemStat.length > 0){
      console.log(`in elseif`);
      return filteredItemsStat.map(item => {
        console.log(`item is ${JSON.stringify(item)}`);
        return (<li key={item.item_id}><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name} </Link></li>)
      }
        )
    } else {
      return items.map(item => (<li key={item.item_id}><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name} </Link></li>) )
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