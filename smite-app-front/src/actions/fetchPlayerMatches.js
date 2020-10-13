export const START_ADDING_PLAYER_MATCHES = 'START_ADDING_PLAYER_MATCHES';
export const ADD_PLAYER_MATCHES = 'ADD_PLAYER_MATCHES';
export const ADD_PLAYER_MATCHES_FAILURE = 'ADD_PLAYER_MATCHES_FAILURE';

export function fetchPlayerMatches(playerid) {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_PLAYER_MATCHES' });
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
        dispatch({ type: 'ADD_PLAYER_MATCHES', matches });
        })
        .catch(error => {
            console.log(error.message);
            dispatch({ type: 'ADD_PLAYER_MATCHES_FAILURE', error });
            // return (window.location = `http://localhost:3001/nomatch`)
        })
    }
}
  