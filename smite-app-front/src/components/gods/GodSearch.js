import React, {Component} from 'react';
import {findGod} from '/Users/kellypowers/coding/react/smite-app/smite-app-front/src/actions/index.js'
import { connect } from 'react-redux';


class GodSearch extends Component {
 
    state = {
      name: "",
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const god = this.state.name;
        this.props.findGod(god);
        this.setState({
          name: '',
        })
      }
    handleOnChange = event => {
        this.setState({
          name: event.target.value
        })
        // this.props.gods.gods.map( g=> g.name ==this.state.name)
      }
   
    render() {
      // <>...</> is a a React fragment - it does not render anything to the DOM, but can wrap multiple JSX elements
      return (
        <div>
        <form onSubmit={event => this.handleOnSubmit(event)} >
            <label for="god_name">Search by God Name:</label>
            <input type="text" name="name" placeholder="" value={this.state.name} onChange={event => {this.handleOnChange(event)}} />
          <input type="submit" />
        </form>
        
      </div>

      )
    }
   
  }


export default connect(null, {findGod})(GodSearch);