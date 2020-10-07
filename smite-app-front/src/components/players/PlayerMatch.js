import React, { useState } from 'react';
import { Link} from 'react-router-dom';

function PlayerMatch(props)  {
    const [isOpen, setIsOpen] = useState(false);
    let god = props.gods.find(g=> g.god_id == props.matches.GodId);
    return (
      <div  className="player-match">
          <div  onClick={() => setIsOpen(!isOpen)}className="accordion-header">
          <div className="accordion-indicator">
              {isOpen ? '-' : '+'}
            </div>
            <h5> {props.matches.Win_Status} -- {god.name} -- {props.matches.Map_Game} -- {props.matches.Match_Time} -- {props.matches.Minutes} minutes </h5>
          </div>
          {isOpen && (
          <div className="player-match-deets">
            <div className="player-match-god">
            <h3><Link to={`/gods/${props.matches.GodId}`}>{props.matches.God}</Link></h3>
              <img className="match-god-image" src={god.god_image} alt={god.name}/>
              <h5>K/D/A: {props.matches.Kills}/{props.matches.Deaths}/{props.matches.Assists}</h5>
              <h5>Level: {props.matches.Level}</h5>
            </div>
            <div className="player-match-deets-wrap">
              <div className="wrap-table">
              <table className="player-match-table">
                <tbody>
                  <tr>
                    <th>Gold: </th>
                    <th>Damage: </th>
                    <th>Damage Taken: </th> 
                    <th>Structure Damage: </th>
                    <th>Healing: </th>
                    <th>Self Healing: </th> 
                    <th>Wards Placed: </th>
                  </tr>
                  <tr>
                    <td>{props.matches.Gold}</td>
                    <td> {props.matches.Damage}</td>
                    <td>{props.matches.Damage_Taken}</td>
                    <td>{props.matches.Damage_Structure}</td>
                    <td>{props.matches.Healing}</td>
                    <td>{props.matches.Healing_Player_Self}</td>
                    <td>{props.matches.Wards_Placed}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="player-match-link">
              <h4><Link to={`/players/find/${props.portalid}/${props.playername}/${props.playerid}/player_matches/${props.matches.Match}`}>View Match {props.player.Name} </Link></h4>
            </div>
          </div>
          </div>
          )}
      </div>
    );
};

export default PlayerMatch;
