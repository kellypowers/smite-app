import React from 'react';
import { Link } from 'react-router-dom';

const AccountNavBar= props => {
    return(
        <div className="player-navbar">
        <div className="player-navbar-left">
          <Link to={`/`}>Home</Link>
        </div>
        <div className="player-navbar-right">
          <Link to={`/players/find/${props.portalid}/${props.playername}`}>Account Info {props.player.Name} </Link> 
          <Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/player_matches`}> Match History </Link> 
          <Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/god_ranks`}> God Ranks {props.player.Name} </Link>
        </div>
      </div>
    )
}

export default AccountNavBar