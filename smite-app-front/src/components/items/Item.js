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
      
      <div key={this.props.item.item_id} >
        <ul>
          <div onClick={event => this.showItemDetails(event)} class="item_intro">
             <h3>{this.props.item.name}</h3>
             <br/>
             <Media> <img height={200} width={200} src={this.props.item.item_image} alt={this.props.item.name}/></Media>
             <br />
            </div>
        </ul>
      </div>
    );
  }

}

export default Item;
