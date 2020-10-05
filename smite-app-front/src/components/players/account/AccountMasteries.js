import React from 'react';
import { Link } from 'react-router-dom';

const AccountMasteries= props => {

    return(
        <div className="account-masteries-info" key={props.player.Name}>
            <table className="account-masteries-info-table">
                <tbody>
                    <tr>
                        <th colspan="5">Masteries</th>
                    </tr>
                    <tr>
                        <th>Total: </th> 
                        <td> {props.player.MasteryLevel}</td>
                        <td rowspan="3">
                        <button><Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/god_ranks`}>View Details </Link> </button>
                        </td>
                    </tr>
                    <tr>
                        <th>Total Worshipers: </th> 
                        <td>{props.player.Total_Worshippers}</td>
                    </tr>
                    <tr>
                        <th>Achievements: </th> 
                        <td>{props.player.Total_Achievements}</td>
                    </tr>
                    {/* <tr>
                        <td rowspan="3">
                        <button><Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/god_ranks`}>View Details </Link> </button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
            {/* <button><Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/god_ranks`}>View Details </Link> </button> */}
        </div>
    )
}

export default AccountMasteries