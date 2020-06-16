import React from 'react';

const Build = props => {
    console.log("props is " + JSON.stringify(props.items));

    // for (i=0; i<props.build.items.length; i++) {props.build.items[i] = Object.values(props.items).find(i=> i.nae === props.build.item[i])}
        // props.build.item1 = Object.values(props.items).find(i => i.name == props.build.item1);
        // props.build.item2 = props.items.find(i => i.name == props.build.item2);
        // props.build.item3 = props.items.find(i => i.name == props.build.item3);
        // props.build.item4 = props.items.find(i => i.name == props.build.item4);
        // props.build.item5 = props.items.find(i => i.name == props.build.item5);
        // props.build.item6 = props.items.find(i => i.name == props.build.item6);
        // debugger

        
    return (
        <div>
            {/* <ul> */}
            {/* <li> */}
                
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
export default Build;