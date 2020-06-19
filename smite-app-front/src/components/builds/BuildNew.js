import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import white_square from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/images/white_square.png'
// import BuildItems from './BuildItems'
// want to mimplement build items when i can click the icon to add to the build 
import {addBuild} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import {postBuild} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/Builds'
import { connect } from 'react-redux';

class BuildNew extends Component {
    state = {
        name: "",
        description: "",
        god_id_smite: 0,
        selector: "",
        // items: []
          item1: "",
          item2: "", 
          item3: "",
          item4: "",
          item5: "",
          item6: "",
          redirect: null
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const build = this.state;
        this.props.postBuild(build);
        // if (this.props.builds.loading==="success") {
          // let build_id = Object.values(this.props.builds).find(b => b.name === this.state.name).id;
          // return (
          this.setState({
            redirect: `/builds`, 
          })
          // )
      // }
        // let buildfind = Object.values(this.props.builds).find(b => b.name === this.state.name );
        // console.log(JSON.stringify(buildfind));
        // return <Redirect to="/builds"/>
      }
    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

// want to be able to click the list of items to fill in the state items array, click the box and remove the item from the box/state
    // handleOnClick = (event, item) => {
    //   if (this.state.items.length < 6 && !this.state.items.find(f => f === item)) {
    //     this.setState({
    //       items: [...this.state.items,  item]
    //     })
    //     this.renderBuildImages();
    //   }
    // }

    renderBuildImages = () => {
      // for (let i=0; i<6; i++) {
        // if (this.state.items[i] !== undefined) {
        // return <input type="image" alt={this.state.items[i]} value={this.state.items[i]} >{white_square}</input>
        // } else {
          // return <input type="image" alt={this.state.items[i].name} src={this.state.items[i].item_image} ></input>
        }
      
    


    renderGodSelect = () => {
        return <select name="god_id_smite" onChange={e => this.handleOnChange(e)} > <option value=""> </option> {this.props.gods.gods.map(god => {
        return <option value={god.god_id}>{god.name}</option>
        })}</select>
    }



    renderItems = () => {
        if (this.state.selector !== "") {
          let itemsSearch = (Object.values(this.props.items).filter(item => {
            return (item.item_stat !== undefined && item.item_stat.toLowerCase().includes(this.state.selector.toLowerCase()))}))
            console.log("items search is " +  JSON.stringify(itemsSearch));
            return Object.values(itemsSearch).map(item => {
              console.log(item);
              return (<div><img src={item.item_image} alt={item.name}/> {item.name}{item.item_stat} </div>)
            })
          }
        else {
          // console.log("items search is " +  itemsSearch);
          return Object.values(this.props.items).map(item => {
          return (<div onClick={event => this.handleOnClick(event, item)}><img src={item.item_image} alt={item.name}/> {item.name}{item.item_stat} </div>)
        })} 
          }

   
          renderItemSelect = () => {
        
            // return <select name={"items"} onChange={e => this.handleOnChange(e)} > 
            return  Object.entries(this.props.items).map(item => {
              
                for (let key in this.state) if (this.state[key] === item.name) {return ""} else {
            return <option value={item[1].name}>{item[1].name}</option>}
            })}
        
    
    //   Maybe show all items, click item and will fill out the next available slot and disappear from items below.. how do i do this
      render() {
        // console.log("buildnew " + JSON.stringify(this.state))
        if (this.props.builds.loading==="success" && this.state.redirect) {
          // let build_id = Object.values(this.props.builds).find(f => f.name == this.state.name);
          return <Redirect to={this.state.redirect}/>
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
            
                {/* this will be some selector for a god, idk yet */}
                {/* <input type="text" name="god" placeholder="" value={this.state.god} onChange={event => {this.handleOnChange(event)}} /> */}
                {/* <select name="god" onChange={e => this.handleOnChange(e)} > */}
                    {/* {this.renderGodSelect()} */}
                {/* <BuildItems items={this.props.items}/> */}
                {/* </select> */}
                {/* <br/>
                <label for="item1">First Item:</label>
                <input type="image" alt={this.state.items[0]} value={this.state.items[0]} >{this.state.items[0].item_image}</input>
                 <label for="item2">Second Item:</label>
                 <input type="image" alt={this.state.items[1]} value={this.state.items[1]}></input>
                 <label for="item3">Third Item:</label>
                 <input type="image" alt={this.state.items[2]} value={this.state.items[2]}></input>
                 <label for="item4">Fourth Item:</label>
                 <input type="image" alt={this.state.items[3]} value={this.state.items[3]}></input>
                 <label for="item5">Fifth Item:</label>
                 <input type="image" alt={this.state.items[4]} value={this.state.items[4]}></input>
                 <label for="item6">Sixth Item:</label>
                 <input type="image" alt={this.state.items[5]} value={this.state.items[5]}></input>
                 <br/> */}
                 {/* {this.renderBuildImages()} */}
                 <br/>
                 <label>Build your six items by item name</label> <br/>
                 <label for="item1">First Item:</label>
                 <input list="item1" name="item1" onChange={e => this.handleOnChange(e)}/>
                 <datalist name="item1" id="item1"  >
                    {/* <option value=""> </option> */}
                    {this.renderItemSelect()}
                </datalist>
                <label for="item2">Second Item:</label>
                <input list="item2" name="item2" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item2" name="item2"  >
                    {/* <option value=""> </option> */}
                    {this.renderItemSelect()}
                </datalist>
                <label for="item3">Third Item:</label>
                <input list="item3" name="item3" onChange={e => this.handleOnChange(e)}/>
                <datalist name="item3" id="item3" >
                    {/* <option value=""> </option> */}
                    {this.renderItemSelect()}
                </datalist>
                <label for="item4">Fourth Item:</label>
                <input list="item4" name="item4" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item4" >
                    {/* <option value=""> </option> */}
                    {this.renderItemSelect()}
                </datalist>
                <label for="item5">Fifth Item:</label>
                <input list="item5" name="item5" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item5"  >
                    {/* <option value=""> </option> */}
                    {this.renderItemSelect()}
                </datalist>
                <label for="item6">Sixth Item:</label>
                <input list="item6" name="item6" onChange={e => this.handleOnChange(e)}/>
                <datalist id="item6"  >
                    {/* <option value=""> </option> */}
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

const mapDispatchToProps = dispatch => {
    return {
      addBuild: build => dispatch(addBuild(build)),
      postBuild: build => dispatch(postBuild(build))
    }
  }
//   export default BuildNew;
export default connect(mapStateToProps, mapDispatchToProps)(BuildNew);
  