import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: black;
  }
  .navbar-brand, .navbar-nav .nav-link {
    color: white;
    font-family: 'Courier New', Courier, monospace;

    &:hover {
      color: white;
    }
  }
`;

const Navigationbar = () => (
  <Styles>
    <Navbar >
      <Navbar.Brand href='/'>SmiteApp!</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
      {/* <Navbar  id="basic-navbar-nav" /> */}
      <Nav className="ml-auto">
        <Nav.Link href="/gods">Gods</Nav.Link>
        <Nav.Link href="/items">Items</Nav.Link>
        <Nav.Link href="/builds">Builds</Nav.Link>
        <Nav.Link href="/players/find">Find A Player</Nav.Link>
      </Nav>
    </Navbar>
  </Styles>
)


export default Navigationbar;