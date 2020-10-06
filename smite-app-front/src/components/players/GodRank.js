import React from 'react'
import { Link } from 'react-router-dom';

const GodRank = (props) => {
    return(
        <div key={props.god.god_id} className="god-ranks-container">
            {/* {console.log(`inGodRank props is ${JSON.stringify(props)}`)} */}
            <div className="god-ranks-godcard">
                <h3><Link to={`/gods/${props.god.god_id}`}>{props.god.god}</Link></h3>
                <img className="god-ranks-image" src={props.selectedGod.god_image} alt={props.selectedGod.name}/>
            </div>
            <div className="god-ranks-data">
                <div>
                    <h5 background-color={(props.sort === "Worshippers") ? "red" : "black"}>Worshipers</h5>
                    <p>{props.god.Worshippers}</p>
                </div>
                <div>
                    <h5>Rank</h5>
                    <p>{props.god.Rank}</p>
                </div>
                <div>
                    <h5>Kills</h5>
                    <p>{props.god.Kills}</p>
                </div>
                <div>
                    <h5>Deaths</h5>
                    <p>{props.god.Deaths}</p>
                </div>
                <div>
                    <h5>Assists</h5>
                    <p>{props.god.Assists}</p>
                </div>
                <div>
                    <h5>KDA</h5>
                    <p>{((props.god.Kills + (props.god.Assists/2)) / props.god.Deaths).toFixed(2)}</p>
                </div>
                <div>
                    <h5>KD</h5>
                    <p>{(props.god.Kills / props.god.Deaths).toFixed(2)}</p>
                </div>
                <div>
                    <h5>Wins</h5>
                    <p>{props.god.Wins}</p>
                </div>
                <div>
                    <h5>Losses</h5>
                    <p>{props.god.Losses}</p>
                </div>
                <div>
                    <h5>Total Games</h5>
                    <p>{props.god.Wins + props.god.Losses}</p>
                </div>
                <div>
                    <h5>Win Rate</h5>
                    <p>{(props.god.Wins / (props.god.Losses + props.god.Wins) *100).toFixed(2)}%</p>
                </div>
            </div>
        </div>
                )
            }


export default GodRank