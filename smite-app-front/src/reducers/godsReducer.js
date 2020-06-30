const initialState = {
    gods: [],
    loading: false
}

function godsReducer(state =initialState, action) {
    switch (action.type) {
   
        case 'START_ADDING_GODS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_GODS':
            return {
                // ...state,
                gods: action.gods,
                loading: 'success'
            }
        case 'ADD_GODS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            }
      default:
        return state;
    }
  };

  export default godsReducer;