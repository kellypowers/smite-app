import React from 'react';
import {Component} from 'react'
import {Media} from 'react-bootstrap'
{/* <style>
  .box{
    border: 1px solid #333;
    align-self: auto;
    width: 100px;
    height: 100px
  }
  .flexContainer{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    width: 100px;
    height: 100px
  }
</style> */}

// const Item = props => {
class Item extends Component {

  showItemDetails = (event) => {
    return (
      <div  id="item_play">
        <br/>
        <p>Price:{this.props.item.price}</p> <br/>
        <p>{this.props.item.item_stat} </p>
      </div>
    )};
  
// class Item extends Component 
  render (){
    return (
      <div className="eachItem" key={this.props.item.item_id} onClick={event => this.showItemDetails(event)} >
        <h3>{this.props.item.name}</h3>
        <br/>
        <Media> <img height={100} width={100} src={this.props.item.item_image} alt={this.props.item.name}/></Media>
        <br/>
        <p>Price:{this.props.item.price}</p>
        <p>{this.props.item.item_stat} </p>
      </div>
    );
  }

}

export default Item;
