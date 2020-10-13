import React from 'react';
import {Media} from 'react-bootstrap'
import NavBar from '../navigation/NavBar'


const Item = (props) => (
  <div>
    <NavBar/>
    <div className="item-container"   >
      {/* {console.log(JSON.stringify(props))} */}
      <div className="item-header">
        <h3>{props.item.name}</h3>
        <br/>
        <Media> <img height={100} width={100} src={props.item.item_image} alt={props.item.name}/></Media>
        <br/>
      </div>
      <div className="item-info">
        <p>Price: {props.item.price}</p>
        <p>{props.item.short_description} </p>
        <p>{props.item.item_secondary_description} </p>
        <p>{props.item.item_stat} </p>
      </div>
    </div>
  </div>
);


export default Item;
