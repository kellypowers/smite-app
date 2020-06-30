import React from 'react';
import {Component} from 'react'
import {Media} from 'react-bootstrap'

class Item extends Component {

  render (){
    return (
      <div className="eachItem" key={this.props.item.item_id}  >
        <h3>{this.props.item.name}</h3>
        <br/>
        <Media> <img height={100} width={100} src={this.props.item.item_image} alt={this.props.item.name}/></Media>
        <br/>
        <p>Price:{this.props.item.price}</p>
        <p>{this.props.item.short_description} </p>
        <p>{this.props.item.item_secondary_description} </p>
        <p>{this.props.item.item_stat} </p>
      </div>
    );
  }

}

export default Item;
