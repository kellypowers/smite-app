import React from 'react';
import { Link } from 'react-router-dom';
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
      color: blue;
    }
  }
`;

const AccountNavBar= props => {
  // console.log(`playername is ${props.}`)
    return(
      <Styles>
      <Navbar >
        {/* <div className="player-navbar"> */}
        {/* <div className="player-navbar-left"> */}
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        {/* </div> */}
        {/* <div className="player-navbar-right"> */}
          <Nav className="ml-auto">
          <Nav.Link href={`/players/find/${props.portalid}/${props.playername}`}>{props.playername}'s Account </Nav.Link> 
          <Nav.Link href={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/player_matches`}> Match History </Nav.Link> 
          <Nav.Link href={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/god_ranks`}> God Ranks {props.player.Name} </Nav.Link>
          </Nav>
        {/* </div> */}
      {/* </div> */}
      </Navbar>
      </Styles>
    )
}

export default AccountNavBar