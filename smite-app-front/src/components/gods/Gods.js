import React, { Component } from 'react';
import God from './God'


class Gods extends Component {
    renderGodList = () => {
        return this.props.gods.map(god => 
         (<God god={god} />))
    }
  render() {
    console.log(`props in gods is ${JSON.stringify(this.props)}`);
    console.log(`props.gods in gods is ${JSON.stringify(this.props.gods)}`);
    // let gods = this.props.gods;
    // const renderGodList = () => {
    //     this.props.gods.map(god => 
    //     <God champ={god} />)
    // }

    // const godList = this.props.gods.map( god => {
    //     // console.log(god)
    //     return <li key={god.god_id}>
    //         <h3>{god.name}</h3>
    //         <img src={god.god_image}/>
    //         {god.god_kind}
    //         <br/>
    //         Abilities: 
    //         <ul>
    //             <li>{god.ability1} <img src={god.ability1_image} /> - {god.ability1_description}</li>
    //             <li>{god.ability2} <img src={god.ability2_image} />- {god.ability2_description}</li>
    //             <li>{god.ability3} <img src={god.ability3_image} />- {god.ability3_description}</li>
    //             <li>{god.ability4}<img src={god.ability4_image} /> - {god.ability4_description}</li>
    //         </ul>
    //         </li>
   
    // })
    // console.log(godList);
    return (
      <ul>
        {/* {godList} */}
        {this.renderGodList()}
      </ul>
    );
  }
};

export default Gods;