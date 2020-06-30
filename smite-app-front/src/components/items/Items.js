import React, { Component } from 'react';
import {findItem} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import Item from './Item'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Media} from 'react-bootstrap'

class Items extends Component {
  
  renderItemList = () => {
    if (this.props.items.loading === 'success') {
      if (Object.values(this.props.items).length > 1) {
        return Object.values(this.props.items).map(item =>
        <li><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name}</Link></li>)
      } else {
          return Object.entries(this.props.items).map(item =>
              (<Item item={item[1]} key={item[1].item_id} />))
      }
    }
  }

  render() {
    return (
      <ul>
        {this.renderItemList()}
      </ul>
    );
  }
};



const mapStateToProps = state => {
  console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    loading: state.loading
  }
}
export default connect(mapStateToProps, {findItem})(Items);