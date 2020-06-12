import React from 'react';
import {Media} from 'react-bootstrap'
const Item = props => {

    return (
      
      <div key={props.item.item_id} >
        <ul>
          <div class="item_intro">
             <h3>{props.item.name}</h3>
             <br/>
             <Media> <img height={200} width={200} src={props.item.item_image} alt={props.item.name}/></Media>
             <br />
            </div>

            <div id="item_play">
             <br/>
             <p>Price:{props.item.price}</p> <br/>
             <p>{props.item.item_stat} </p>
            </div>
        </ul>
      </div>
    );
  }

export default Item;
