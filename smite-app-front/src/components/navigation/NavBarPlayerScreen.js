import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const NavBarPlayerScreen = () => (
//   <Styles>
//     <Navbar >
//       <Navbar.Brand href='/'>SmiteApp!</Navbar.Brand>
//       {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
//       {/* <Navbar  id="basic-navbar-nav" /> */}
//       <Nav className="ml-auto">
//         <Nav.Link href="/gods">Gods</Nav.Link>
//         <Nav.Link href="/items">Items</Nav.Link>
//         <Nav.Link href="/builds">Builds</Nav.Link>
//         <Nav.Link href="/players/find">Find A Player</Nav.Link>
//       </Nav>
//     </Navbar>
//   </Styles>
<div>
      <Link to={`/`}>Home</Link>
      <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}`}>Account Info for {this.props.player.Name} </Link> 
      <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/player_matches`}>Get Match History For {this.props.player.Name} </Link> 
      <Link to={`/players/find/${this.props.routerProps.match.params.portalid}/${this.props.routerProps.match.params.playername}/${this.props.player.ActivePlayerId}/god_ranks`}>Get God Ranks For {this.props.player.Name} </Link>
      </div>
)


export default NavBarPlayerScreen;