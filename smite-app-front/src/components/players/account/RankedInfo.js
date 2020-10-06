import React from 'react';

const RankedInfo= props => {

    return(
        <div className="account-matches-info" key={props.player.Name}>
            <table className="account-matches-info-table">
                <tbody>
                    <tr>
                        <th colspan="4" ><u>Ranked Joust Controller for Season {props.player.RankedJoustController['Season']}</u></th>
                    </tr>
                    <tr>
                        <th>Rank: </th> 
                        <td> {props.player.RankedJoustController.Rank}</td>
                    </tr>
                    <tr>
                        <th>Points: </th> 
                        <td> {props.player.RankedJoustController.Points}</td>
                    </tr>
                    <tr>
                        <th>Rank Stat: </th> 
                        <td> {(parseInt(props.player.RankedJoustController.Rank_Stat)).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>Variance: </th> 
                        <td>{props.player.RankedJoustController.Rank_Variance}</td>
                    </tr>
                    <tr>
                        <th>Wins: </th> 
                        <td>{props.player.RankedJoustController['Wins']}</td>
                    </tr>
                    <tr>
                        <th>Losses: </th> 
                        <td> {props.player.RankedJoustController.Losses}</td>
                    </tr>
                    <tr>
                        <th>Total Matches: </th> 
                        <td>{parseInt(props.player.RankedJoustController['Wins']) + parseInt(props.player.RankedJoustController.Losses)}</td>
                    </tr>
                    <tr>
                        <th>W/L Percent: </th> 
                        <td>{(parseInt(props.player.RankedJoustController['Wins']) / (parseInt(props.player.RankedJoustController['Wins']) + parseInt(props.player.RankedJoustController.Losses)) * 100).toFixed(2)}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RankedInfo