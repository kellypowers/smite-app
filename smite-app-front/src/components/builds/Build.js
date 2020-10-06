import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navigation/NavBar'

const Build = props => {
    let item1 = Object.values(props.items).find(i => i.name === props.build.item1);
    let item2 = Object.values(props.items).find(i => i.name === props.build.item2);
    let item3 = Object.values(props.items).find(i => i.name === props.build.item3);
    let item4 = Object.values(props.items).find(i => i.name === props.build.item4);
    let item5 = Object.values(props.items).find(i => i.name === props.build.item5);
    let item6 = Object.values(props.items).find(i => i.name === props.build.item6);
    const god = props.gods.gods.find(g=> g.god_id === props.build.god_id_smite)
    let arrayOfItems = [item1, item2, item3, item4, item5, item6]

    return (
        <div className="build">
            <NavBar/>
            <h1 className="build-god-link"><Link to={`gods/${god.god_id_smite}`}>{god.name}</Link></h1>
            <h4 className="build-subtitle">{props.build.name} {props.build.description} Build</h4>
            <div className="build-content">
                
            <div className="build-header">
                <img className="build-god-image" src={god.god_image} alt={god.name}/>
            </div>
            <div className="build-table">
                <table >
                    <tr>
                        <th>Item</th>
                        {arrayOfItems.map(item => {
                            return (
                                <td><h4><strong>{item.name}</strong></h4><br/><img src={item.item_image} alt={item.name} /></td>
                            )})}
                    </tr>
                    <tr>
                        <th>Description</th>
                        {arrayOfItems.map(item => {
                            return (
                                <td><p> {item.short_description} </p><p> {item.item_secondary_description} </p></td>
                            )})}
                    </tr>
                    <tr>
                        <th>Stats</th>
                            {arrayOfItems.map(item => {
                            return (
                                        <td><p>{item.item_stat}</p></td>
                            )})}
                    </tr>
                    <tr>
                        <th>Price</th>
                            {arrayOfItems.map(item => {
                            return (
                                        <td><p> {item.price} </p></td>
                            )})}
                    </tr>
                </table>
            </div>
            </div>
        </div>
    )
}

export default Build;