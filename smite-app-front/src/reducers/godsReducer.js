function godsReducer(state = { gods: [], loading: false }, action) {
    switch (action.type) {
   
        case 'START_ADDING_GODS_REQUEST':
            return {
                ...state,
                gods: [...state.gods],
                loading: true
            }
   
        case 'ADD_GODS':
            return {
                ...state,
                gods: action.gods,
                loading: false
            }

        case 'ADD_GODS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                gods: []
            }
   
      default:
        return state;
    }
  };

  export default godsReducer;