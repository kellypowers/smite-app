export const START_ADDING_GODS_REQUEST = 'START_ADDING_GODS_REQUEST';
export const ADD_GODS = 'ADD_GODS';
export const ADD_GODS_FAILURE = 'ADD_GODS_FAILURE';
   
export function fetchGods() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_GODS_REQUEST' });
      fetch('http://localhost:3000/gods')
        .then(response => response.json())
        .then(gods => dispatch({ type: 'ADD_GODS', gods }));
    };
  }