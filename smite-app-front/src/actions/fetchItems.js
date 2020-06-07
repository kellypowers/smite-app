export const START_ADDING_ITEMS_REQUEST = 'START_ADDING_ITEMS_REQUEST';
export const ADD_ITEMS = 'ADD_ITEMS';
export const ADD_ITEMS_FAILURE = 'ADD_ITEMS_FAILURE';
   
export function fetchItems() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_ITEMS_REQUEST' });
      fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(items => dispatch({ type: 'ADD_ITEMS', items }));
    };
  }