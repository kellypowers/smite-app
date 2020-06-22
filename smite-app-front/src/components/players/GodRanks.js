import React from 'react'
import { Link } from 'react-router-dom';
import history from 'history/browser';

const GodRanks = props => {
    console.log("god ranks " + JSON.stringify(props.god_ranks));
    return Object.values(props.god_ranks).map(god => {
    return (
        <div>
            <Link to={`gods/${god.god_id}`}> {god.god} </Link><br/>
            Worshippers: {god.Worshippers} <br/>
            Rank: {god.Rank}<br/>
            K/D/A: {god.Kills}/{god.Deaths}/{god.Assists}<br/>
            Minion Kills: {god.MinionKills}<br/>
            W/L : {god.Wins} / {god.Losses}<br/>
            <button onClick={()=> history.back()}>BACK</button>
         </div>
    )})
    
    
}

export default GodRanks