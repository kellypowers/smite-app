import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
// import white_square from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/white_square.png'
// import BuildItems from './BuildItems'
// want to mimplement build items when i can click the icon to add to the build 
import {addBuild, redirect} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import {postBuild} from '../../actions/fetchBuilds'
import { connect } from 'react-redux';
import { push } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

class BuildNew extends Component {
    state = {
        name: "",
        description: "",
        god_id_smite: 0,
        selector: "",
        items: ["", "", "", "", "", ""],
          // item1: "",
          // item2: "", 
          // item3: "",
          // item4: "",
          // item5: "",
          // item6: "",
        redirect: false
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const build = this.state;
        this.props.postBuild(build);
        this.setState({
              redirect: true
            })
        // this.redirectToTrue();
        // this.props.postBuild(build);
        return console.log("this.state is " + JSON.stringify(this.state));
        // props.history.push('/builds');
      }
    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      // redirectToTrue = () => {
      //   this.setState({
      //     redirect: true
      //   })
      // }

// want to be able to click the list of items to fill in the state items array, click the box and remove the item from the box/state
    handleOnClick = (event, item) => {
      if (this.state.items.length < 6 && !this.state.items.find(f => f === item)) {
        this.setState({
          items: [...this.state.items,  item]
        })
      }
    }

    // renderBuildImages = () => {
    //   for (let i=0; i<6; i++) {
    //     if (this.state.items[i] !== undefined) {
    //     return <input type="image" alt={this.state.items[i]} value={this.state.items[i]} >{white_square}</input>
    //     } else {
    //       return <input type="image" alt={this.state.items[i].name} src={this.state.items[i].item_image} ></input>
    //     }}}
      
    

//DROPDOWN BAR OF ALL GODS
    renderGodSelect = () => {
        return <select name="god_id_smite" onChange={e => this.handleOnChange(e)} > <option value=""> </option> {this.props.gods.gods.map(god => {
        return <option value={god.god_id}>{god.name}</option>
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
        })} 
          }

   
      renderItemSelect = () => {
        return  Object.entries(this.props.items).map(item => {
            for (let key in this.state) if (this.state[key] === item.name) {return ""} else {
        return <option value={item[1].name}>{item[1].name}</option>}
        })}
        
    
    //   Maybe show all items, click item and will fill out the next available slot and disappear from items below.. how do i do this
      render() 
      {
        if (this.props.builds.loading ==="success" && this.state.redirect) {
          // this.props.history.push("/builds");
          return <Redirect to='/builds'/>
        } else {
        return (
          <div>
          <form onSubmit={event => this.handleOnSubmit(event)} >
                <label for="build_name">Name Your Build:</label>
                <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
                <label for="build_description">Build Description:</label>
                <input type="text" name="description" placeholder="" value={this.state.description} onChange={event => {this.handleOnChange(event)}} />
                <label for="god_name">Select God Name:</label>
                {this.renderGodSelect()}
                 <br/>
                 <label>Build your six items by item name</label> <br/>
                 <label for="item1">First Item:</label>
                 <input list="item1" value={this.state.items[0] !== undefined ? this.state.items[0].name : ""} name="item1" onChange={e => this.handleOnChange(e)}/>
                 <datalist name="item1" id="item1"  >
                    {this.renderItemSelect()}
                </datalist>
                <label for="item2">Second Item:</label>
                <input list="item2"  value={this.state.items[1] !== undefined ? this.state.items[1].name : ""} name="item2" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item2" name="item2"  >
                    {this.renderItemSelect()}
                </datalist>
                <label for="item3">Third Item:</label>
                <input list="item3"value={this.state.items[2] !== undefined ? this.state.items[2].name : ""} name="item3" onChange={e => this.handleOnChange(e)}/>
                <datalist name="item3" id="item3" >
                    {this.renderItemSelect()}
                </datalist>
                <label for="item4">Fourth Item:</label>
                <input list="item4"value={this.state.items[3] !== undefined ? this.state.items[3].name : ""} name="item4" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item4" >
                    {this.renderItemSelect()}
                </datalist>
                <label for="item5">Fifth Item:</label>
                <input list="item5" value={this.state.items[4] !== undefined ? this.state.items[4].name : ""} name="item5" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item5"  >
                    {this.renderItemSelect()}
                </datalist>
                <label for="item6">Sixth Item:</label>
                <input list="item6" value={this.state.items[5] !== undefined ? this.state.items[5].name : ""} name="item6" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item6"  >
                    {this.renderItemSelect()}
                </datalist> 
                
            <input type="submit" />
          </form>
          <br/>
          <label>Look up item by typing in stat you are looking for </label>
          <input type="text" name="selector"onChange={e => this.handleOnChange(e)}></input>
            {this.renderItems()}
          {/* <BuildItems items={this.props.items} /> */}
        </div>
  
        )}
      }
    
  
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
      // this will be selector.gods
      loading: state.loading
    }
  };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addBuild: build => dispatch(addBuild(build, ownProps)),
      postBuild: build => dispatch(postBuild(build, ownProps)),

    }
  }
//   export default BuildNew;
export default connect(mapStateToProps, mapDispatchToProps)(BuildNew);
  