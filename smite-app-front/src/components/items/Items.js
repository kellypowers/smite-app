import React, { Component } from 'react';
import {findItem} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js';
import Item from './Item'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {Media} from 'react-bootstrap';
// import Button from './Button'
import SearchBar from './SearchBar';

class Items extends Component {
  state = {
    name: ""
  }

  
  // handleOnChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
  // renderItemList = () => {
  //   let items = Object.values(this.props.items).slice(0, -1);
  //   if (this.state.name !== "") {
  //     let filteredItems = items.filter(item => item.name.toLowerCase().startsWith(this.state.name.toLowerCase()));
  //     return filteredItems.map(item => {
  //     return (<li key={item.item_id}><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name} </Link></li>)
  //   })
  //   }
  //     else if (items.length > 1) {
  //       return items.map(item =>
  //       <li key={item.item_id}><Link to={`items/${item.item_id}`}><Media><img width={50} height={50} className="mr-3" src={item.item_image} alt={item.name}/></Media>{item.name} -</Link> </li>)
  //     } else {
  //         return Object.entries(this.props.items).map(item => <Item item={item[1]} key={item[1].item_id} />)
  //   }
  // }

  render() {
    if (this.props.items.loading === 'success') {
    return (
      <div className="items">
        <div className="searchBar">
          {/* <label >Search by item Name:</label> */}
          {/* <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} /> */}
          <SearchBar name={this.state.name}/>
        </div>
      <ul>
        {this.renderItemList()}
      </ul>
      </div>
    );
    }else{return "Loading..."}
  }
};


const mapStateToProps = state => {
  // console.log(state)
  return {
    gods: state.gods,
    items: state.items,
    loading: state.loading
  }
}
export default connect(mapStateToProps, {findItem})(Items);