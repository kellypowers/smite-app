export const START_ADDING_PLAYER_REQUEST = 'START_ADDING_PLAYER_REQUEST';
export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_PLAYER_FAILURE = 'ADD_PLAYER_FAILURE';
   


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
          });
      };
    }