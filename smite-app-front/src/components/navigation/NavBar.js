import React from 'react';
// import { Link, Nav.Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const Navigationbar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href='/'>SmiteApp!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar Collapse id="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/gods">Gods</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/items">Items</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/builds">Builds</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/players/find">Find A Player</Nav.Link></Nav.Item>



      {/* <div className="container"> 
        <a className="">Smite App!</a>
        <ul className=""> 
          <li><Link to= "/"> Home </Link> </li>
          <li><Nav.Link to= "/gods"> Gods </Nav.Link> </li>
          <li><Nav.Link to= "/items"> Items </Nav.Link> </li>
          <li><Nav.Link to= "/builds"> Builds </Nav.Link> </li>
          <li><Nav.Link to="/players/find">Find A Player</Nav.Link></li>
        </ul>
      </div> */}
      </Nav>
    </Navbar>
  </Styles>
)


export default Navigationbar;