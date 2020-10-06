import React from 'react';
import { Link } from 'react-router-dom';

const AccountInfo= props => {

    return(
        <div className="account-info" key={props.player.Name}>
            <table className="account-info-table">
                <tbody>
                    <tr>
                        <th colspan="3" text-align="center"><u>Account Info</u></th>
                        <th colapn="1"></th>
                    </tr>
                    <tr>
                        <th scope="row">Clan: </th> 
                        <td>{props.player.Team_Name ? <Link to={`/clan/${props.player.Team_Name.replace(" ", "")}/${props.player.TeamId}`}>{props.player.Team_Name}</Link> : "n/a"}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">Account Creation: </th> 
                        <td>{props.player.Created_Datetime}</td>
                    </tr>
                    <tr>
                        <th scope="row">Last Login: </th> 
                        <td>{props.player.Last_Login_Datetime}</td>
                    </tr>
                     <tr>
                         <th>Hours Played: </th>
                        <td>{Math.floor(parseInt(props.player.MinutesPlayed) / 60)}</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
}

export default AccountInfo