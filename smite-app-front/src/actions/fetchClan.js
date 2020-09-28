export const START_ADDING_CLAN_REQUEST = 'START_ADDING_CLAN_REQUEST';
export const ADD_CLAN = 'ADD_CLAN';
export const ADD_CLAN_FAILURE = 'ADD_CLAN_FAILURE';

export function fetchClan(clanId) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CLAN_REQUEST' });
    fetch('http://localhost:3000/get_clan_info', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          clanId
      })
    })
    .then(response => response.json())
    .then(clan => {
      dispatch({ type: 'ADD_CLAN', clan });
    })
    .catch(error => console.log(error.message))
  };
}

export function fetchClanMatches(clanId) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CLAN_REQUEST' });
    fetch('http://localhost:3000/get_clan_info', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          clanId
      })
    })
    .then(response => response.json())
    .then(clan => {
      dispatch({ type: 'ADD_CLAN', clan });
    })
    .catch(error => console.log(error.message))
  };
}