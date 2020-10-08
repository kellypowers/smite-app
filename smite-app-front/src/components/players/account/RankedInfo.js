import React from 'react';

const TIERS = {
    1: "Bronze V", 
    2: "Bronze IV", 
    3: "Bronze III", 
    4: "Bronze II", 
    5: "Bronze I",
    6: "Silver V",
    7: "Silver IV", 
    8: "Silver III", 
    9: "Silver II", 
    10: "Silver I",
    11: "Gold V", 
    12: "Gold IV", 
    13: "Gold III", 
    14: "Gold II", 
    15: "Gold I",
    16: "Platinum V", 
    17: "Platinum IV", 
    18: "Platinum III", 
    19: "Platinum II", 
    20: "Platinum I",
    21: "Diamond V", 
    22: "Diamond IV", 
    23: "Diamond III", 
    24: "Diamond II", 
    25: "Diamond I",
    26: "Masters I", 
    27: "Grandmaster"
}

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
                        <th>Tier: </th> 
                        <td> {TIERS[parseInt(props.player.RankedJoustController.Tier)]}</td>
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