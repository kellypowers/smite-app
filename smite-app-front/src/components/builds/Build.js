import React from 'react';

const Build = props => {
    let item1 = Object.values(props.items).find(i => i.name === props.build.item1);
    let item2 = Object.values(props.items).find(i => i.name === props.build.item2);
    let item3 = Object.values(props.items).find(i => i.name === props.build.item3);
    let item4 = Object.values(props.items).find(i => i.name === props.build.item4);
    let item5 = Object.values(props.items).find(i => i.name === props.build.item5);
    let item6 = Object.values(props.items).find(i => i.name === props.build.item6);
        // props.build.god_id_smite = props.gods.gods.find(g=> g.god_id_smite === props.build.god_id_smite);
    return (
        <div>
            <h1>{props.gods.gods.find(g=> g.god_id === props.build.god_id_smite).name} Build {props.build.name}</h1>
            <h4>Description: {props.build.description}</h4>
            <img src={item1.item_image} alt={item1.name} />
            <h4>{item1.name}</h4>
            <p> {item1.short_description} </p>
            <p> {item1.item_secondary_description} </p>
            <p> {item1.item_stat} </p>
            <p>Price: {item1.price} </p>

            <img src={item2.item_image} alt={item2.name} />
            <h4>{item2.name}</h4>
            <p> {item2.short_description} </p>
            <p> {item2.item_secondary_description} </p>
            <p> {item2.item_stat} </p>
            <p>Price: {item2.price} </p>

            <img src={item3.item_image} alt={item3.name} />
            <h4>{item3.name}</h4>
            <p> {item3.short_description} </p>
            <p> {item3.item_secondary_description} </p>
            <p> {item3.item_stat} </p>
            <p>Price: {item3.price} </p>

            <img src={item4.item_image} alt={item4.name} />
            <h4>{item4.name}</h4>
            <p> {item4.short_description} </p>
            <p> {item4.item_secondary_description} </p>
            <p> {item4.item_stat} </p>
            <p>Price: {item4.price} </p>

            <img src={item5.item_image} alt={item5.name} />
            <h4>{item5.name}</h4>
            <p> {item5.short_description} </p>
            <p> {item5.item_secondary_description} </p>
            <p> {item5.item_stat} </p>
            <p>Price: {item5.price} </p>

            <img src={item6.item_image} alt={item6.name} />
            <h4>{item6.name}</h4>
            <p> {item6.short_description} </p>
            <p> {item6.item_secondary_description} </p>
            <p> {item6.item_stat} </p>
            <p>Price: {item6.price} </p>
        </div>
    )
}

export default Build;