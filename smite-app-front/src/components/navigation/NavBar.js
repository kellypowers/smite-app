import React from 'react';
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
      </Nav>
    </Navbar>
  </Styles>
)


export default Navigationbar;