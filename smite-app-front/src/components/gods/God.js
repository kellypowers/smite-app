import React, { Component } from 'react';

class God extends Component {

  render() {
    // const { god } = this.props
    // console.log("props in god" + JSON.stringify(this.props.god));
    console.log("props in god" + this.props.god.name);
    return (
      <div>
        <ul>
        <li key={this.props.god.god_id}>
             <h3>{this.props.god.name}</h3>
             <img src={this.props.god.god_image}/>
             {this.props.god.god_kind}
             <br/>
             Abilities: 
             <ul>
                 <li>{this.props.god.ability1} <img src={this.props.god.ability1_image} /> - {this.props.god.ability1_description}</li>
                 <li>{this.props.god.ability2} <img src={this.props.god.ability2_image} />- {this.props.god.ability2_description}</li>
                 <li>{this.props.god.ability3} <img src={this.props.god.ability3_image} />- {this.props.god.ability3_description}</li>
                 <li>{this.props.god.ability4}<img src={this.props.god.ability4_image} /> - {this.props.god.ability4_description}</li>
             </ul>
             </li>
        </ul>
      </div>
    );
  }

};

export default God;
