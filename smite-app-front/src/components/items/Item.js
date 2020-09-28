import React from 'react';
import {Media} from 'react-bootstrap'


const Item = (props) => (
  <div className="item" key={props.item.item_id}  >
    <h3>{props.item.name}</h3>
    <br/>
    <Media> <img height={100} width={100} src={props.item.item_image} alt={props.item.name}/></Media>
    <br/>
    <p>Price:{props.item.price}</p>
    <p>{props.item.short_description} </p>
    <p>{props.item.item_secondary_description} </p>
    <p>{props.item.item_stat} </p>
  </div>
);


export default Item;
