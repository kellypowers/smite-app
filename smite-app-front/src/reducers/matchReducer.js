const initialState = {
    loading: false
}

function matchReducer(state = initialState, action) {
    switch (action.type) {
      case 'FIND_MATCH_DETAILS':
        return {
          loading: true
        }

      case  "ADD_MATCH_DETAILS": 
        return {
          ...action.match,
          loading: 'success'
        }

      case 'ADD_MATCH_DETAILS_FAILURE':
        return {
            ...state,
            loading: false,
            error: action.error
        }

      default:
        return state;
    }
  }
  export default matchReducer;