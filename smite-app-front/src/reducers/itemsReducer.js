const initialState = {
    loading: false
}

function itemsReducer(state = initialState, action) {
    switch (action.type) {
   
        case 'START_ADDING_ITEMS_REQUEST':
            return {
                ...state,
                loading: true
            }
   
        case 'ADD_ITEMS':
            return {
                ...action.items,
                loading: 'success'
            }

        case 'ADD_ITEMS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            }

      default:
        return state;
    }
  };

  export default itemsReducer;