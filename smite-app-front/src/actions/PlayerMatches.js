export const FIND_PLAYER_MATCHES = 'FIND_PLAYER_MATCHES';
export const ADD_PLAYER_MATCHES = 'ADD_PLAYER_MATCHES';
export const ADD_PLAYER_MATCHES_FAILURE = 'ADD_PLAYER_MATCHES_FAILURE';

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
            player: playerid
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
    }
}
  