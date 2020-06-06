import React, { Component } from 'react'
import NavLinks from './NavLinks'

class NavBar extends Component {
 
    state = {
      query: "",
      username: ""
    }
   
    render() {
      // <>...</> is a a React fragment - it does not render anything to the DOM, but can wrap multiple JSX elements
      return (
        <>
          <NavLinks />
          <DropMenu username={ this.state.username }/>
          <Search query= {this.state.query } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit }/>
        </>
      )
    }
   
    handleSubmit = event => { ... }
    handleChange = event => { ... }
  }