import React from 'react';

const God = props => {
  console.log(`god comp ${JSON.stringify(props)}`);
    return (
      // console.log(`god comp ${JSON.stringify(props.god)}`);
      <div key={props.god.god_id} >
        <ul>
          <div id="god_intro">
             <h3>{props.god.name}</h3>
            <p>{props.god.god_kind}</p>
             <br/>
             <p> {props.god.pros} </p>
             <h4>{props.god.title} {props.god.pantheon}</h4> <br/>
             <img src={props.god.god_image} alt={props.god.name}/>
             <br />
             
            </div>
            <div id="god_lore">
             <br/>
             <h4>Lore: </h4>
              <p>{props.god.lore}</p>
            </div>
            <div id="god_play">
             <br/>
             Abilities: <br/>
             <ul id="ability_list">
              {/* ideally this should be an array of ablities, used to iterate over and pass ability to ability pres comp!! */}
                 <li> <img src={props.god.ability1_image} alt={props.god.ability1} />{props.god.ability1} - <br/> {props.god.ability1_description}</li>
                 <li><img src={props.god.ability2_image} alt={props.god.ability2} />{props.god.ability2} - <br/>{props.god.ability2_description}</li>
                 <li> <img src={props.god.ability3_image} alt={props.god.ability3} />{props.god.ability3} - <br/>{props.god.ability3_description}</li>
                 <li><img src={props.god.ability4_image} alt={props.god.ability4} />{props.god.ability4} - <br/>{props.god.ability4_description}</li>
             </ul>
            </div>
        </ul>
      </div>
    );
  }

export default God;
