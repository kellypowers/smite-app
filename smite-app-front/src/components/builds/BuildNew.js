import React, {Component} from 'react';
import {addBuild} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import {postBuild} from '../../actions/fetchBuilds'
import { connect } from 'react-redux';
import BuildGodSelect from './BuildGodSelect';
import BuildItemStatSearch from './BuildItemStatSearch';
import NavBar from '../navigation/NavBar'
// import {Link} from "react-router-dom";

class BuildNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // name: "",
        description: "",
        name: "",
        god_id_smite: 0,
        selector: "",
        items: []
    }
  }

  // SUBMISSION OF FORM EVENT
  handleOnSubmit = event => {
    event.preventDefault();
    const build = this.state;
    this.props.postBuild(build, this.props.history);
    // this.props.history.push(`/builds/1`)
  } 

  // SET STATE BASED ON EVENT TARGET NAME
  handleOnChangeDescription = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // SETS STATE OF ITEM ARRAY TO ADD ITEM SELECTED
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
      ...this.state,
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

   
  renderItemSelect = () => {
    let items = Object.values(this.props.items).slice(0, -1);
    return  items.map(item => {
        for (let key in this.state) if (this.state[key] === item.name) {return ""} else {
      return <option key={item.item_id} value={item.name}>{item.name}</option>}
  })}
        
    //   Maybe show all items, click item and will fill out the next available slot and disappear from items below.. how do i do this
  render() {
    return (
      <div>
        <NavBar/>
        <div className="build-new-container">
        <form className="buildForm" onSubmit={event => this.handleOnSubmit(event)} >
          {/* <label >Name Your Build:</label>
          <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChangeDescription(event)}} />
          <br/> */}
          <label>Build Description:</label>
          <input type="text" name="description" placeholder="" value={this.state.description} onChange={event => {this.handleOnChangeDescription(event)}} />
          <br/>
          <BuildGodSelect 
            gods={this.props.gods.gods} 
            handleOnChangeDescription={this.handleOnChangeDescription}
          />
          <br/>
          <label>Build your six items by item name</label> <br/>
          <div className="itemsBuild">
            <div>
            <label >First Item:</label>
            <input list="item1" value={this.state.items[0] !== undefined ? this.state.items[0].name : this.state.items[0]} name="item1" onChange={e => this.handleOnChange(e)}/>
            <datalist name="item1" id="item1"  >
              {this.renderItemSelect()}
            </datalist>
            </div>
            <div>
            <label >Second Item:</label>
            <input list="item2"  value={this.state.items[1] !== undefined ? this.state.items[1].name : this.state.items[1]} name="item2" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item2" name="item2"  >
              {this.renderItemSelect()}
            </datalist>
            </div>
            <div>
            <label >Third Item:</label>
            <input list="item3"value={this.state.items[2] !== undefined ? this.state.items[2].name : this.state.items[2] } name="item3" onChange={e => this.handleOnChange(e)}/>
            <datalist name="item3" id="item3" >
              {this.renderItemSelect()}
            </datalist>
            </div>
            <br/>
            <div>
            <label >Fourth Item:</label>
            <input list="item4"value={this.state.items[3] !== undefined ? this.state.items[3].name : this.state.items[3]} name="item4" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item4" >
              {this.renderItemSelect()}
            </datalist>
            </div>
            <div>
            <label >Fifth Item:</label>
            <input list="item5" value={this.state.items[4] !== undefined ? this.state.items[4].name : this.state.items[4]} name="item5" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item5"  >
              {this.renderItemSelect()}
            </datalist>
            </div>
            <div>
            <label >Sixth Item:</label>
            <input list="item6" value={this.state.items[5] !== undefined ? this.state.items[5].name : this.state.items[5]} name="item6" onChange={e => this.handleOnChange(e)}/>
            <datalist id="item6"  >
              {this.renderItemSelect()}
            </datalist> 
            </div>
          </div>
        <input type="submit" />
      </form>
      <br/>
      <button onClick={(e) => this.clearFilters(e)}>Clear Items</button> <br/>
        <BuildItemStatSearch items={this.props.items} handleOnChangeDescription={this.handleOnChangeDescription} handleOnClick={this.handleOnClick} selector={this.state.selector}/>
    </div>
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
  