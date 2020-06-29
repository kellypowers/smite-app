const initialState = {
    loading: false
}


function playerGodRanksReducer(state = initialState, action) {
    switch (action.type) {

      case 'FIND_PLAYER_GOD_RANKS':
        return {
          // ...state,
          loading: true
        }
  
      case  "ADD_PLAYER_GOD_RANKS": 
        // console.log("action god_ranks " + JSON.stringify(action.god_ranks));
        return {
           ...action.god_ranks,
          loading: 'success'
        }

      case 'ADD_PLAYER_GOD_RANKS_FAILURE':
        return {
            // ...state,
            loading: false,
            error: action.error
        }
        default:
            return state;
    }
}
export default playerGodRanksReducer;