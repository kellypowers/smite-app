import React from 'react';

const God = props => {

    return (
      <div>
        <ul>
        <li key={props.god.god_id}>
             <h3>{props.god.name}</h3><br/>
             <h4>{props.god.title} {props.god.pantheon}</h4> <br/>
             <img src={props.god.god_image} alt={props.god.name}/>
             <br/>
             Type: {props.god.god_kind} Pros: {props.god.pros}
             <br/>
             Abilities: <br/>
             <ul>
                 <li>{props.god.ability1} <img src={props.god.ability1_image} alt={props.god.ability1}/> - <br/> {props.god.ability1_description}</li>
                 <li>{props.god.ability2} <img src={props.god.ability2_image} alt={props.god.ability2}/>- <br/>{props.god.ability2_description}</li>
                 <li>{props.god.ability3} <img src={props.god.ability3_image} alt={props.god.ability3}/>- <br/>{props.god.ability3_description}</li>
                 <li>{props.god.ability4}<img src={props.god.ability4_image} alt={props.god.ability4}/> - <br/>{props.god.ability4_description}</li>
             </ul>
             </li>
        </ul>
      </div>
    );
  }

export default God;
