import cuid from 'cuid';
export const cuidFn = cuid;
export default function playerReducer(
    state = {
      players: [],
    },
    action
  ) {
    switch (action.type) {
      case 'ADD_PLAYER':
          let player = {
              id: cuid(),
              player_name: action.player_name,
              portal: action.portal_id
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