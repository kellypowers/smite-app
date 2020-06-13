import React, { Component } from 'react';
import {findItem} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import Item from './Item'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Media} from 'react-bootstrap'
// import ItemSearch from './ItemSearch'


// do i want to srt?  magic power, physical power, mag def, phys def, lifesteal, protections, attach speed, attach power,cooldown, crit, CC, 

class Items extends Component {
    //action creater function to pass each Item to the Item component
    renderItemList = () => {
      if (this.props.items.loading === 'success') {
        // Object.entries(this.props.items).map(i => <Item item={i[1]} key={i[1].item_id} />));}};
      console.log("items " + JSON.stringify(this.props.items))
        if (this.props.items.length > 1) {
        // return this.props.items.items.map(item => 
         return Object.entries(this.props.items).map(item =>
          <li><Link to={`items/${item[1].item_id}`}><Media><img width={50} height={50} className="mr-3" src={item[1].item_image} alt={item[1].name}/></Media>{item[1].name}</Link></li>)
        } else {
            // return this.props.items.map(item => 
            return Object.entries(this.props.items).map(item =>
                (<Item item={item[1]} key={item[1].item_id} />))
        }}
        
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



const mapStateToProps = state => {
  console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    // builds: state.builds,
    // player: state.player,
    // playerMatches: state.playerMatches,
    // match: state.match,
    // this will be selector.gods
    loading: state.loading
  }
}
export default connect(mapStateToProps, {findItem})(Items);