import React from 'react';
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// class Build extends Component {

const Build = props => {
    console.log("props is " + JSON.stringify(props.build));

    // for (i=0; i<props.build.items.length; i++) {props.build.items[i] = Object.values(props.items).find(i=> i.nae === props.build.item[i])}
        // props.build.item1 = Object.values(props.items).find(i => i.name == props.build.item1);
        // props.build.item2 = props.items.find(i => i.name == props.build.item2);
        // props.build.item3 = props.items.find(i => i.name == props.build.item3);
        // props.build.item4 = props.items.find(i => i.name == props.build.item4);
        // props.build.item5 = props.items.find(i => i.name == props.build.item5);
        // props.build.item6 = props.items.find(i => i.name == props.build.item6);
        // debugger

    // renderBuild = () => {
    //     console.log("props is " + JSON.stringify(this.props.builds));
    //     return (Object.values(this.props.builds.builds).map(build => {
    //         console.log("build is " + JSON.stringify(build));
            
    //             return (
    //             <li> 
    //                 <h1>{build.name}</h1>
    //                 <h2>{build.description}</h2>
    //                 <h3>{this.props.gods.gods.find(g=>{
    //                 let god = g.god_id_smite === build.god_id_smite
    //                 return god.name 
    //                 })} </h3>
    //                 {for (let i=1; i<7; i++) (
    //                     const item = `item${i}`;
    //                 <img src={build.item.item_image} alt={build.item.name} />
    //                 <h4>{build.itemi.name}</h4>
    //                 <p> {`build.item[${i}].short_description`} </p>
    //                 <p> {`build.item[${i}].item_secondary_description`} </p>
    //                 <p> {`build.item[${i}].item_stat`} </p>
    //                 <p>Price: {`build.item[${i}].price`} </p>
    //                 )}</li>
    //             )
            
    //         })
    //     )}
    
    //  render () {   
        // props.build.god_id_smite = props.gods.gods.find(g=> g.god_id_smite === props.build.god_id_smite);
    return (
        <div>
            <h1>{props.build.name}</h1>
            <h2>{props.build.description}</h2>
            {/* <h3>{props.gods.gods.find(g=> {g.god_id_smite == props.build.god_id_smite; return g.name})} </h3> */}
                <img src={props.build.item1.item_image} alt={props.build.item1.name} />
                <h4>{props.build.item1.name}</h4>
                <p> {props.build.item1.short_description} </p>
                <p> {props.build.item1.item_secondary_description} </p>
                <p> {props.build.item1.item_stat} </p>
                <p>Price: {props.build.item1.price} </p>

                <img src={props.build.item2.item_image} alt={props.build.item2.name} />
                <h4>{props.build.item2.name}</h4>
                <p> {props.build.item2.short_description} </p>
                <p> {props.build.item2.item_secondary_description} </p>
                <p> {props.build.item2.item_stat} </p>
                <p>Price: {props.build.item2.price} </p>

                <img src={props.build.item3.item_image} alt={props.build.item3.name} />
                <h4>{props.build.item3.name}</h4>
                <p> {props.build.item3.short_description} </p>
                <p> {props.build.item3.item_secondary_description} </p>
                <p> {props.build.item3.item_stat} </p>
                <p>Price: {props.build.item3.price} </p>

                <img src={props.build.item4.item_image} alt={props.build.item4.name} />
                <h4>{props.build.item4.name}</h4>
                <p> {props.build.item4.short_description} </p>
                <p> {props.build.item4.item_secondary_description} </p>
                <p> {props.build.item4.item_stat} </p>
                <p>Price: {props.build.item4.price} </p>

                <img src={props.build.item5.item_image} alt={props.build.item5.name} />
                <h4>{props.build.item5.name}</h4>
                <p> {props.build.item5.short_description} </p>
                <p> {props.build.item5.item_secondary_description} </p>
                <p> {props.build.item5.item_stat} </p>
                <p>Price: {props.build.item5.price} </p>

                <img src={props.build.item6.item_image} alt={props.build.item6.name} />
                <h4>{props.build.item6.name}</h4>
                <p> {props.build.item6.short_description} </p>
                <p> {props.build.item6.item_secondary_description} </p>
                <p> {props.build.item6.item_stat} </p>
                <p>Price: {props.build.item6.price} </p>
 

            {/* </li> */}
            {/* </ul> */}
            {/* {props.build.item1.item_image} */}
        </div>
    )
}
// }

// const mapStateToProps = state => {
//     return {
//       gods: state.gods,
//       items: state.items,
//       builds: state.builds,
//       // this will be selector.gods
//       loading: state.loading
//     }
//     }
// export default connect(mapStateToProps)(Build);
export default Build;