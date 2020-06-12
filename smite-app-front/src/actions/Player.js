export const START_ADDING_PLAYER_REQUEST = 'START_ADDING_PLAYER_REQUEST';
export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_PLAYER_FAILURE = 'ADD_PLAYER_FAILURE';
export const START_ADDING_PLAYER_MATCHES_REQUEST = 'START_ADDING_PLAYER_MATCHES_REQUEST';
export const ADD_PLAYER_MATCHES = 'ADD_PLAYER_MATCHES';
export const ADD_PLAYER_MATCHES_FAILURE = 'ADD_PLAYER_MATCHES_FAILURE';


  export function fetchPlayer(player) {
    return (dispatch) => {
        dispatch({ type: 'FIND_PLAYER' });
        fetch('http://localhost:3000/players', {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            player
        })
     })
          .then(response => response.json())
          .then(player => {
            // let player1 = player[0];
            console.log("player is " + JSON.stringify(player))
            dispatch({ type: 'ADD_PLAYER', player });
            // return player
          })
          .catch(error => console.log(error.message))
      };
    }

export function fetchPlayerMatches(playerid) {
  return (dispatch) => {
      dispatch({ type: 'FIND_PLAYER_MATCHES' });
      fetch('http://localhost:3000/find_player_matches', {
          headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          playerid
      })
    })
        .then(response => response.json())
        .then(matches => {
          // let player1 = player[0];
          console.log("matches is " + JSON.stringify(matches))
          dispatch({ type: 'ADD_PLAYER_MATCHES', matches });
          // return player
        })
        .catch(error => console.log(error.message))
    };
  }

export function fetchPlayerGodRanks(playerid) {
  return (dispatch) => {
      dispatch({ type: 'FIND_PLAYER_GOD_RANKS' });
      fetch('http://localhost:3000/get_god_ranks', {
          headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          playerid
      })
    })
        .then(response => response.json())
        .then(god_ranks => {
          console.log("god_ranks is " + JSON.stringify(god_ranks))
          dispatch({ type: 'ADD_PLAYER_GOD_RANKS', god_ranks });
        })
        .catch(error => console.log(error.message))
    };
  }

export function fetchPlayerAchievements(playerid) {
  return (dispatch) => {
      dispatch({ type: 'FIND_PLAYER_ACHIEVEMENTS' });
      fetch('http://localhost:3000/get_player_achievements', {
          headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          playerid
      })
    })
        .then(response => response.json())
        .then(achievements => {
          console.log("achievements is " + JSON.stringify(achievements))
          dispatch({ type: 'ADD_PLAYER_ACHIEVEMENTS', achievements });
        })
        .catch(error => console.log(error.message))
    };
  }

