const initialState = {
    loading: false
}

function playerReducer(state = initialState, action) {
    switch (action.type) {
      case 'FIND_PLAYER':
        return {
          loading: true
        }

        case  "ADD_PLAYER": 
          console.log("action player " + JSON.stringify(action.player));
          return {
            ...action.player,
            loading: 'success'
          }

          case 'ADD_PLAYER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }


      default:
        return state;
    }
  }
  export default playerReducer;