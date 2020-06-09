import React, {Component} from 'react';
import {} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import { connect } from 'react-redux';

class BuildNew extends Component {
    state = {
        name: "",
        description: "",
        god_id: "",
        item1: "",
        item2: "", 
        item3: "",
        item4: "",
        item5: "",
        item6: ""
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const build = this.state;
        this.props.postBuild(build);
        // this.postBuild();
        this.setState({
            name: "",
            description: "",
            god: "",
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
    //   Maybe show all items, click item and will fill out the next available slot and disappear from items below.. how do i do this
      render() {

        return (
          <div>
          <form onSubmit={event => this.handleOnSubmit(event)} >
              <label for="build_name">Name Your Build:</label>
              <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
              <label for="build_description">Build Description:</label>
              <input type="text" name="description" placeholder="" value={this.state.description} onChange={event => {this.handleOnChange(event)}} />
              <label for="god_name">Search by God Name:</label>
              {/* this will be some selector for a god, idk yet */}
              <input type="text" name="god" placeholder="" value={this.state.god} onChange={event => {this.handleOnChange(event)}} />
              <label for="item1">First Item:</label>
              <input type="text" name="item1" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
              <label for="item2">Second Item:</label>
              <input type="text" name="item2" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
              <label for="item3">Third Item:</label>
              <input type="text" name="item3" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
              <label for="item4">Fourth Item:</label>
              <input type="text" name="item4" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
              <label for="item5">Fifth Item:</label>
              <input type="text" name="item5" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
              <label for="item6">Sixth Item:</label>
              <input type="text" name="item6" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
            <input type="submit" />
          </form>


          
        </div>
  
        )
      }


    // postBuild() {
    //     return (dispatch) => {
    //         dispatch({ type: 'POST_BUILD' });
    //         fetch('http://localhost:3000/builds', {
    //             headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         method: "POST",
    //         body: JSON.stringify({
    //             build: this.state
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(builds => dispatch({ type: 'ADD_BUILDS', builds }));
    //     };
    //     }
  
  }

  export default BuildNew;
  