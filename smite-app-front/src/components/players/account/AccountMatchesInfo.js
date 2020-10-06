import React from 'react';
import { Link } from 'react-router-dom';

const AccountMatchesInfo= props => {

    return(
        <div className="account-matches-info" key={props.player.Name}>
            <table className="account-matches-info-table">
                <tbody>
                    <tr>
                        <th colspan="3" ><u>Matches</u></th>
                        {/* <th colspan="1"><u>Win Percent</u></th> */}
                        {/* <th  rowspan="4"> <button><Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/player_matches`}>View Recent </Link> </button></th> */}
                    </tr>
                    <tr>
                        <th>Wins: </th> 
                        <td> {props.player.Wins}</td>
                        {/* <td rowspan="3"> {(parseInt(props.player.Wins) / parseInt(props.player.Losses) * 100).toFixed(2)}%</td> */}
                    </tr>
                    <tr>
                        <th>Losses: </th> 
                        <td>{props.player.Losses}</td>
                    </tr>
                    <tr>
                        <th>Total Matches: </th> 
                        <td>{parseInt(props.player.Wins) + parseInt(props.player.Losses)}</td>
                    </tr>
                    <tr>
                        <th>Win Percent </th> 
                        <td>{(parseInt(props.player.Wins) / (parseInt(props.player.Wins) + parseInt(props.player.Losses)) * 100).toFixed(2)}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AccountMatchesInfo