import React, { Component } from 'react'
import Item from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/components/items/Item.js'
import { connect } from 'react-redux'
// onClick={(e, i) => this.clickBuildItems(e, i)
class BuildsItems extends Component {

    state = {
       items: ["", "", "", "", "", ""]
    }
    // let item = this.state.items[0];
    imageTag = itemstate => {
        if (this.props.items.find(f => f === itemstate)) {
            return (<div><Item item={itemstate}/></div>)
        } else {
        return <p className="empty">Item {i}</p>
        }
    }
    clickBuildItems = (e, i) => {
        if (e.target.class === 'taken') {
            this.setState({
                ...this.state.items,
                [this.state.items[i]]: "",
                
            })
            
        }
    }
    render(){
        return (
            <div>
            <div >{this.imageTag(this.state.items[0])}</div>
            <div>{this.imageTag(this.state.items[1])}</div>
            <div>{this.imageTag(this.state.items[2])}</div>
            <div>{this.imageTag(this.state.items[3])}</div>
            <div>{this.imageTag(this.state.items[4])}</div>
            <div>{this.imageTag(this.state.items[5])}</div>
            <div>{this.imageTag(this.state.items[6])}</div>
            </div>
        )
    }


//     renderimages = () => {
// // render images then
// onClick 
// let idx = this.state.items.findIndex(item => item.type != object)
// this.setState({
//     ...this.state.items, item[idx] = this.props.items.find(e.target.value)
// })
//     }

}

//     build = () => {
//         return (
//             <div onClick={() => } className="box">
//                 <img >{state.item[0]}</p>
//             </div>
//         )
//     }


//     handleOnChange = event => {
//         console.log(`items${[parseInt(event.target.name)]}`);
//         const statename = "items["+parseInt(event.target.name) +"]";
//         console.log(statename);
//         this.setState({
//             // ...this.state.items,
//           [statename]: event.target.value
//         })
//       }
//       renderItemSelect = () => {
//         for (let i=0; i<6; i++) {
//         // return <select name={"items"} onChange={e => this.handleOnChange(e)} > 
//         return  this.props.items.map(item => {
//             if (this.state.items.find(j => j.name)) {return ""} else {
//         return <option value={item.name}>{item.name}</option>}
//         })
//         // </select>
//     }
//     }

//     renderItems = () => {
//         this.props.items.map(item => {
//         return <div>{item.item_image}{item.name}{item.stat}</div>
//         })
//     }
    
//     render() {
//         console.log(this.state);
//         return (
//             <div>
//                 <label for="item1">First Item:</label>
//                 <select name="0" onChange={e => this.handleOnChange(e)} >
//                     <option value=""> </option>
//                     {this.renderItemSelect()}
//                 </select>
//               <label for="item2">Second Item:</label>
//               <select name="1" onChange={e => this.handleOnChange(e)} >
//                     <option value=""> </option>
//                   {this.renderItemSelect()}
//                 </select>
//                 <label for="item3">First Item:</label>
//                 <select name="2" onChange={e => this.handleOnChange(e)} >
//                     <option value=""> </option>
//                     {this.renderItemSelect()}
//                 </select>
//               <label for="item4">Second Item:</label>
//               <select name="4" onChange={e => this.handleOnChange(e)} >
//                     <option value=""> </option>
//                     {this.renderItemSelect()}
//                 </select>
//             </div>
//         )
//     }

// }

export default BuildsItems;