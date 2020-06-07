import React from 'react'
// import NavLinks from './NavLinks'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


 
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
    >Home</NavLink>
    <NavLink
      to="/gods"
      exact
      // style={link}
      // activeStyle={{
      //   background: 'darkblue'
     Gods // }}
    >Gods</NavLink>
    <NavLink
      to="/items"
      exact
      // style={link}
      // activeStyle={{
      //   background: 'darkblue'
      // }}
    >Items</NavLink>
  </div>;

export default Navbar;