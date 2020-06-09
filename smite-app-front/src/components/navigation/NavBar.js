import React from 'react'
// import NavLinks from './NavLinks'
import { Link, BrowserRouter, Route, NavLink } from 'react-router-dom';


 
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//     >Home</NavLink>
//     <NavLink
//       to="/gods"
//       exact
//       // style={link}
//       // activeStyle={{
//       //   background: 'darkblue'
//      Gods // }}
//     >Gods</NavLink>
//     <NavLink
//       to="/items"
//       exact
//       // style={link}
//       // activeStyle={{
//       //   background: 'darkblue'
//       // }}
//     >Items</NavLink>
  // </div>;

  const Navbar = () => {
    return (
      <nav>
        <div className="container"> 
          <a className="">Smite App!</a>
          <ul className=""> 
            <li><Link to= "/"> Home </Link> </li>
            <li><NavLink to= "/gods"> Gods </NavLink> </li>
            <li><NavLink to= "/items"> Items </NavLink> </li>
          </ul>
        </div>
      </nav>
    )
  }

export default Navbar;