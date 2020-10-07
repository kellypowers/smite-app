import React  from 'react';
import NavBar from '../navigation/NavBar'

const God = props => {
    return (
      <div>
        {/* {console.log(`${JSON.stringify(props.god)}`)} */}
        <NavBar
        />
      <div className="god_container" key={props.god.god_id} >
        <div className="god-img">
          <img src={props.god.god_image} alt={props.god.name}/>
        </div>
          <div className="god_header">
            <h3>{props.god.name}</h3>
            <h4>{props.god.title} </h4> <br/>
            <h4>{props.god.pantheon}</h4>
            <br/>
            <p> {props.god.pros} </p>
            <p>{props.god.god_kind}</p>
            <br />
          </div> 
          <div className="god-play">
             <table className="god-abilities-table">
               <tr>
                 <th colspan="4"><strong>Abilities</strong></th>
                 </tr>
                 <tr>
                 <th><img src={props.god.ability1_image} alt={props.god.ability1} />{props.god.ability1}</th>
                 <th><img src={props.god.ability2_image} alt={props.god.ability2} />{props.god.ability2}</th>
                 <th><img src={props.god.ability3_image} alt={props.god.ability3} />{props.god.ability3}</th>
                 <th><img src={props.god.ability4_image} alt={props.god.ability4} />{props.god.ability4}</th>
               </tr>
               <tr>
                 <td>{props.god.ability1_description}</td>
                 <td>{props.god.ability2_description}</td>
                 <td>{props.god.ability3_description}</td>
                 <td>{props.god.ability4_description}</td>
               </tr>
             </table>
            </div>
            <div className="god_lore">
              <h4>Lore: </h4>
              <p><em>{props.god.lore}</em></p>
            </div>
        {/* </ul> */}
      </div>
      </div>
    );
  }

export default God;
