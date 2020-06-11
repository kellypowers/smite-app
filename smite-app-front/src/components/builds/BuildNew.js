import React, {Component} from 'react';
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
        item1: "",
        item2: "", 
        item3: "",
        item4: "",
        item5: "",
        item6: ""
    }

    postBuild(build = this.state) {
        return (dispatch) => {
            dispatch({ type: 'POST_BUILD' });
            fetch('http://localhost:3000/god_builds', {
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                build
            })
         })
              .then(response => response.json())
              .then(build => {
                  console.log(build);
                  dispatch(this.props.addBuild(build))
              })
              .catch(error => console.log(error));
          };
        }


    handleOnSubmit = event => {
        event.preventDefault();
        const build = this.state;
        // this.props.postBuild(build);
        this.props.postBuild(build);
        this.setState({
            name: "",
            description: "",
            god_id: 0,
            // items: ["", "", "", "", "", ""]
            item1: "",
            item2: "", 
            item3: "",
            item4: "",
            item5: "",
            item6: ""
        })
      }
    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    //   handleOnChangeItems = event => {
    //       this.setState({
    //           ...this.state,
    //           this.state.items: 
    //       })
    //   }

// want to be able to click the list of items to fill in the state items array
    handleOnClick = event => {


    }

      renderItems = () => {
        return  this.props.items.items.map(item => {
            // console.log(item);
         return (<div><img src={item.item_image} alt={item.name}/> {item.name}{item.item_stat} </div>)
        })}

        renderGodSelect = () => {
            return <select name="god_id_smite" onChange={e => this.handleOnChange(e)} > <option value=""> </option> {this.props.gods.gods.map(god => {
            return <option value={god.god_id}>{god.name}</option>
            })}</select>
        }

        renderItemSelect = () => {
            
            // return <select name={"items"} onChange={e => this.handleOnChange(e)} > 
            return  this.props.items.items.map(item => {
                for (var key in this.state) if (this.state[key] == item.name) {return ""} else {
            return <option value={item.name}>{item.name}</option>}
            })
            // </select>
        }
        
    
    //   Maybe show all items, click item and will fill out the next available slot and disappear from items below.. how do i do this
      render() {
        console.log("buildnew " + JSON.stringify(this.state))
        return (
          <div>
          <form onSubmit={event => this.handleOnSubmit(event)} >
                <label for="build_name">Name Your Build:</label>
                <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
                <label for="build_description">Build Description:</label>
                <input type="text" name="description" placeholder="" value={this.state.description} onChange={event => {this.handleOnChange(event)}} />
                <label for="god_name">Search by God Name:</label>
                {/* this will be some selector for a god, idk yet */}
                {/* <input type="text" name="god" placeholder="" value={this.state.god} onChange={event => {this.handleOnChange(event)}} /> */}
                {/* <select name="god" onChange={e => this.handleOnChange(e)} > */}
                    {this.renderGodSelect()}
                {/* <BuildItems items={this.props.items}/> */}
                {/* </select> */}
                <label for="item1">First Item:</label>
                <select name="item1" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
                <label for="item2">Second Item:</label>
                <select name="item2" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
                <label for="item3">Third Item:</label>
                <select name="item3" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
                <label for="item4">Fourth Item:</label>
                <select name="item4" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
                <label for="item5">Fifth Item:</label>
                <select name="item5" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
                <label for="item6">Sixth Item:</label>
                <select name="item6" onChange={e => this.handleOnChange(e)} >
                    <option value=""> </option>
                    {this.renderItemSelect()}
                </select>
                
                {/* {this.renderItemSelect()} */}
              {/* <label for="items[1]">Second Item:</label> */}
              {/* <input type="text" name="items[1]" placeholder="" value={this.state.items[1]} onChange={event => {this.handleOnChange(event)}} /> */}
              {/* {this.renderItemSelect()}
              <label for="item3">Third Item:</label>
              <input type="text" name="items[2]" placeholder="" value={this.state.items[2]} onChange={event => {this.handleOnChange(event)}} />
              <label for="item4">Fourth Item:</label>
              <input type="text" name="items[3]" placeholder="" value={this.state.items[3]} onChange={event => {this.handleOnChange(event)}} />
              <label for="item5">Fifth Item:</label>
              <input type="text" name="items[4]" placeholder="" value={this.state.items[4]} onChange={event => {this.handleOnChange(event)}} />
              <label for="item6">Sixth Item:</label>
              <input type="text" name="items[5]" placeholder="" value={this.state.items[5]} onChange={event => {this.handleOnChange(event)}} /> */}
            <input type="submit" />
          </form>

            {this.renderItems()}
          {/* <BuildItems items={this.props.items} /> */}
        </div>
  
        )
      }

  
  }


const mapDispatchToProps = dispatch => {
    return {
      addBuild: build => dispatch(addBuild(build)),
      postBuild: build => dispatch(postBuild(build))
    }
  }
//   export default BuildNew;
export default connect(null, mapDispatchToProps)(BuildNew);
  