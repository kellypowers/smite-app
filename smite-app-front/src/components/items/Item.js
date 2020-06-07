import React from 'react';

const Item = props => {

    return (
      
      <div key={props.item.item_id} >
        <ul>
          <div class="item_intro">
             <h3>{props.item.name}</h3>
             <br/>
             <img src={props.item.item_image} alt={props.item.name}/>
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
