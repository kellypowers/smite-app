const initialState = {
    players: [],
    loading: false
}

function playerReducer(state = initialState, action) {
    switch (action.type) {
      case 'FIND_PLAYER':
        const player= {
          player_name: action.player_name,
          portal_id: action.portal_id
        }
        return {
          ...state,
          players: [...state.players, player]
        }
        case "DELETE_PLAYER":
            return {players: state.players.filter(player => player.id !== action.id)}
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