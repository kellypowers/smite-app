const initialState = {
    player: [],
    loading: false
}

function playerReducer(state = initialState, action) {
    switch (action.type) {
      case 'FIND_PLAYER':
        return {
          ...state,
          player: state.player,
          loading: true
        }
        // const player= {
        //   player_name: action.player_name,
        //   portal_id: action.portal_id
        // }
        // return {
        //   ...state,
        //   players: [...state.players, player]
        // }


        case  "ADD_PLAYER": 
        
          // const added_player= {
          //   player_name: action.player_name,
          //   portal_id: action.portal_id,
          //   player: action.player
          // }
          console.log("action player " + JSON.stringify(action.player));
          return {
            ...state,
            player: action.player,
            loading: 'success'
          }

          case 'ADD_PLAYER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                player: []
            }
        // }
        case "DELETE_PLAYER":
            return {player: state.player.filter(player => player.id !== action.id)}
            // case 'LOOKUP_PLAYER':
            //   return {
            //     ...state,
            //     player: state.player
            //   }

      default:
        return state;
    }
  }
  export default playerReducer;