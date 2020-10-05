import React from 'react';
import { Link } from 'react-router-dom';

const AccountMatchesInfo= props => {

    return(
        <div className="account-matches-info" key={props.player.Name}>
            <table className="account-matches-info-table">
                <tbody>
                    <tr>
                        <th colspan="5">Matches</th>
                    </tr>
                    <tr>
                        <th>Wins: </th> 
                        <td> {props.player.Wins}</td>
                        <th rowspan="3">Win Percent: </th> 
                        <td rowspan="3"> {(parseInt(props.player.Wins) / parseInt(props.player.Losses) * 100).toFixed(2)}%</td>
                        <th rowspan="3">
                        <button><Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/player_matches`}>View Recent </Link> </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Losses: </th> 
                        <td>{props.player.Losses}</td>
                    </tr>
                    <tr>
                        <th>Total Matches: </th> 
                        <td>{parseInt(props.player.Wins) + parseInt(props.player.Losses)}</td>
                    </tr>
                </tbody>
            </table>
            {/* <button><Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/player_matches`}>View Recent </Link> </button> */}
        </div>
    )
}

export default AccountMatchesInfo