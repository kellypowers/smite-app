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
          player
      })
    })
        .then(response => response.json())
        .then(player => {
          // let player1 = player[0];
          console.log("player is " + JSON.stringify(playerid))
          dispatch({ type: 'ADD_PLAYER_MATCHES', player });
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
        .then(player => {
          // let player1 = player[0];
          console.log("player is " + JSON.stringify(player))
          dispatch({ type: 'ADD_PLAYER_GOD_RANKS', player });
          // return player
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
        .then(player => {
          // let player1 = player[0];
          console.log("player is " + JSON.stringify(player))
          dispatch({ type: 'ADD_PLAYER_ACHIEVEMENTS', player });
          // return player
        })
        .catch(error => console.log(error.message))
    };
  }

  export function fetchMatchDetails(matchid) {
    return (dispatch) => {
        dispatch({ type: 'FIND_MATCH_DETAILS' });
        fetch('http://localhost:3000/get_match_details', {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            match
        })
      })
          .then(response => response.json())
          .then(match => {
            // let player1 = player[0];
            console.log("match is " + JSON.stringify(match))
            dispatch({ type: 'ADD_MATCH_DETAILS', match });
            // return player
          })
          .catch(error => console.log(error.message))
      };
    }