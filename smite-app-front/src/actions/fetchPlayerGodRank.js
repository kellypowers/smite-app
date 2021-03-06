export const START_ADDING_PLAYER__GOD_RANKS = 'START_ADDING_PLAYER_GOD_RANKS';
export const ADD_PLAYER_GOD_RANKS = 'ADD_PLAYER_GOD_RANKS';
export const ADD_PLAYER_GOD_RANK_FAILURE = 'ADD_PLAYER_GOD_RANK_FAILURE';

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
        player: playerid
      })
    })
    .then(response => response.json())
    .then(god_ranks => {
      dispatch({ type: 'ADD_PLAYER_GOD_RANKS', god_ranks });
    })
    .catch(error => console.log(error.message))
  };
}