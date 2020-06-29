const initialState = {
    loading: false
}


function playerMatchesReducer(state = initialState, action) {
    switch (action.type) {

      case 'START_ADDING_PLAYER_MATCHES':
        return {
          ...state,
          loading: true
        }
  
      case  "ADD_PLAYER_MATCHES": 
        // console.log("action player " + JSON.stringify(action.player));
        return {
           ...state, ...action.matches,
          loading: 'success'
        }

      case 'ADD_PLAYER_MATCHES_FAILURE':
        return {
            ...state,
            loading: false,
            error: action.error
        }
        default:
            return state;
    }
}
export default playerMatchesReducer;