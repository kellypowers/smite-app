import React, { Component } from 'react';
import PlayerSearch from '../players/PlayerSearch';
// import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
    return(
        <div className="home-page">

            <div className="player-searchbar">
                <PlayerSearch />
            </div>
            <div className="links">
            <h1><strong><a href="http://localhost:3001/gods">GODS</a></strong></h1>
            <h1><strong><a href="http://localhost:3001/items">ITEMS</a></strong></h1>
            <h1><strong><a href="http://localhost:3001/builds">BUILDS</a></strong></h1>
            </div>
        </div>
    )
    }
}

export default Home;