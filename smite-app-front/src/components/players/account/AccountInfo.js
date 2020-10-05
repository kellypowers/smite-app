import React from 'react';
import { Link } from 'react-router-dom';

const AccountInfo= props => {

    return(
        <div className="account-info" key={props.player.Name}>
            <table className="account-info-table">
                <tbody>
                    <tr>
                        <th colspan="5">Account Info</th>
                    </tr>
                    <tr>
                        <th>Clan: </th> 
                        <td>{props.player.Team_Name ? <Link to={`/clan/${props.player.Team_Name.replace(" ", "")}/${props.player.TeamId}`}>{props.player.Team_Name}</Link> : "n/a"}</td>
                        <th rowspan="4">
                        {props.player.Team_Name ? <button><Link to={`/clan/${props.player.Team_Name.replace(" ", "")}/${props.player.TeamId}`}>View Clan </Link> </button> : ""}
                        </th>
                    </tr>
                    <tr>
                        <th>Account Creation: </th> 
                        <td>{props.player.Created_Datetime}</td>
                    </tr>
                    <tr>
                        <th>Last Login: </th> 
                        <td>{props.player.Last_Login_Datetime}</td>
                    </tr>
                     <tr>
                         <th>Hours Played:</th>
                        <td>{Math.floor(parseInt(props.player.MinutesPlayed) / 60)}</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
}

export default AccountInfo