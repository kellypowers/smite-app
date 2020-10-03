import React, { Component } from 'react'

class BuildItemStatSearch extends Component {
    renderItems = () => {
        if (this.props.selector !== "") {
          let itemsSearch = (Object.values(this.props.items).filter(item => {
            return (item.item_stat !== undefined && item.item_stat.toLowerCase().includes(this.props.selector.toLowerCase()))}))
            return Object.values(itemsSearch).map(item => {
              console.log(item);
              return (<div onClick={event => this.props.handleOnClick(event, item)}><img className="item-image" src={item.item_image} alt={item.name}/> <strong>{item.name}</strong> {item.item_stat} </div>)
            })
        }
        else {
          return Object.values(this.props.items).slice(0, -1).map(item => {
          return (<div key={item.item_id} onClick={event => this.props.handleOnClick(event, item)}><img className="item-image" src={item.item_image} alt={item.name}/> <strong> {item.name} </strong>{item.item_stat} </div>)
          })
        } 
      }
    render() {
        return (
            <div>
                <label>Look up item by typing in stat you are looking for </label>
                <input type="text" name="selector"onChange={e => this.props.handleOnChangeDescription(e)}></input>
                {this.renderItems()}
            </div>
        )
    }
}

export default BuildItemStatSearch