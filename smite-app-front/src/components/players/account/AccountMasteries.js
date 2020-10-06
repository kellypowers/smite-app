import React from 'react';
import { Link } from 'react-router-dom';

const AccountMasteries= props => {

    return(
        <div className="account-masteries-info" key={props.player.Name}>
            <table className="account-masteries-info-table">
                <tbody>
                    <tr>
                        <th colspan="2"><u>Masteries</u></th>
                        {/* <th rowspan="4"><button><Link to={`/players/find/${props.portalid}/${props.playername}/${props.player.ActivePlayerId}/god_ranks`}>View Details </Link> </button></th> */}
                    </tr>
                    <tr>
                        <th>Total: </th> 
                        <td> {props.player.MasteryLevel}</td>
                    </tr>
                    <tr>
                        <th>Total Worshipers: </th> 
                        <td>{props.player.Total_Worshippers}</td>
                    </tr>
                    <tr>
                        <th>Achievements: </th> 
                        <td>{props.player.Total_Achievements}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AccountMasteries