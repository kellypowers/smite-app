import React, {Component} from 'react';
import {addBuild} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import {postBuild} from '../../actions/fetchBuilds'
import { connect } from 'react-redux';
// import {Link} from "react-router-dom";

class BuildNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        description: "",
        god_id_smite: 0,
        selector: "",
        items: [],
        redirect: false
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const build = this.state;
    this.props.postBuild(build)
  } 

  handleOnChangeDescription = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnChange = event => {
    if (Object.values(this.props.items).find(i => i.name === event.target.value)) {
      let item = Object.values(this.props.items).find(i => i.name === event.target.value)
      this.setState({
        items: [...this.state.items, item]
      })
    }
  }

  clearFilters = (event) => {
    this.setState({
      // ...this.state,
      items: []
    })
  }

// want to be able to click the list of items to fill in the state items array, click the box and remove the item from the box/state
  handleOnClick = (event, item) => {
    if (this.state.items.length < 6 && !this.state.items.find(f => f === item)) {
      this.setState({
        // ...this.state,
        items: [...this.state.items,  item]
      })
    }
  }
    
//DROPDOWN BAR OF ALL GODS
  renderGodSelect = () => {
      return <select name="god_id_smite" onChange={e => this.handleOnChangeDescription(e)} > <option value=""> </option> {this.props.gods.gods.map(god => {
      return <option key={god.god_id} value={god.god_id}>{god.name}</option>
      })}</select>
  }

//SEARCH ITEMS WITH AUTOCOMPLETE SEARCH BAR 
  renderItems = () => {
    if (this.state.selector !== "") {
      let itemsSearch = (Object.values(this.props.items).filter(item => {
        return (item.item_stat !== undefined && item.item_stat.toLowerCase().includes(this.state.selector.toLowerCase()))}))
        // console.log("items search is " +  JSON.stringify(itemsSearch));
        return Object.values(itemsSearch).map(item => {
          console.log(item);
          return (<div onClick={event => this.handleOnClick(event, item)}><img src={item.item_image} alt={item.name}/> {item.name}{item.item_stat} </div>)
        })
    }
    else {
          // console.log("items search is " +  itemsSearch);
      return Object.values(this.props.items).map(item => {
      return (<div onClick={event => this.handleOnClick(event, item)}><img src={item.item_image} alt={item.name}/> {item.name}{item.item_stat} </div>)
      })
    } 
  }

   
  renderItemSelect = () => {
    return  Object.entries(this.props.items).map(item => {
        for (let key in this.state) if (this.state[key] === item.name) {return ""} else {
      return <option key={item[1].item_id} value={item[1].name}>{item[1].name}</option>}
  })}
        
    //   Maybe show all items, click item and will fill out the next available slot and disappear from items below.. how do i do this
  render() {
    return (
      <div>
        {/* {console.log(JSON.stringify(this.props.builds.loading))} */}
        <form className="buildForm" onSubmit={event => this.handleOnSubmit(event)} >
          <label >Name Your Build:</label>
          <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChangeDescription(event)}} />
          <br/>
          <label>Build Description:</label>
          <input type="text" name="description" placeholder="" value={this.state.description} onChange={event => {this.handleOnChangeDescription(event)}} />
          <br/>
          <label >Select God Name:</label>
          {this.renderGodSelect()}
          <br/>
          <label>Build your six items by item name</label> <br/>
          <div className="itemsBuild">
            <label >First Item:</label>
            <input list="item1" value={this.state.items[0] !== undefined ? this.state.items[0].name : this.state.items[0]} name="item1" onChange={e => this.handleOnChange(e)}/>
            <datalist name="item1" id="item1"  >
              {this.renderItemSelect()}
            </datalist>
            <label >Second Item:</label>
            <input list="item2"  value={this.state.items[1] !== undefined ? this.state.items[1].name : this.state.items[1]} name="item2" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item2" name="item2"  >
              {this.renderItemSelect()}
            </datalist>
            <label >Third Item:</label>
            <input list="item3"value={this.state.items[2] !== undefined ? this.state.items[2].name : this.state.items[2] } name="item3" onChange={e => this.handleOnChange(e)}/>
            <datalist name="item3" id="item3" >
              {this.renderItemSelect()}
            </datalist>
            <br/>
            <label >Fourth Item:</label>
            <input list="item4"value={this.state.items[3] !== undefined ? this.state.items[3].name : this.state.items[3]} name="item4" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item4" >
              {this.renderItemSelect()}
            </datalist>
            <label >Fifth Item:</label>
            <input list="item5" value={this.state.items[4] !== undefined ? this.state.items[4].name : this.state.items[4]} name="item5" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item5"  >
              {this.renderItemSelect()}
            </datalist>
            <label >Sixth Item:</label>
            <input list="item6" value={this.state.items[5] !== undefined ? this.state.items[5].name : this.state.items[5]} name="item6" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item6"  >
              {this.renderItemSelect()}
            </datalist> 
          </div>
        <input type="submit" />
      </form>
      <br/>
      <button onClick={(e) => this.clearFilters(e)}>Clear Items</button> <br/>
      <label>Look up item by typing in stat you are looking for </label>
      <input type="text" name="selector"onChange={e => this.handleOnChangeDescription(e)}></input>
        {this.renderItems()}
    </div>
      )}
  }

  
  const mapStateToProps = state => {
    console.log(state);
    return {
      gods: state.gods,
      items: state.items,
      builds: state.builds,
      player: state.player,
      playerMatches: state.playerMatches,
      god_ranks: state.god_ranks,
      loading: state.loading
    }
  };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addBuild: build => dispatch(addBuild(build, ownProps)),
      postBuild: build => dispatch(postBuild(build, ownProps)),

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(BuildNew);
  