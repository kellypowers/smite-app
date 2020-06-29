const initialState = {
    loading: false,
    // matches: [],
    // achievements: [],
    // god_ranks: []

}

function playerReducer(state = initialState, action) {
    switch (action.type) {
      case 'START_ADDING_PLAYER_REQUEST':
        return {
          loading: true
        }

      case  "ADD_PLAYER": 
        console.log("action player " + JSON.stringify(action.player));
        return {
          ...state, ...action.player,
          loading: 'success'
        }

      case 'ADD_PLAYER_FAILURE':
        return {
            ...state,
            loading: false,
            error: action.error
        }

      // case 'FIND_PLAYER_MATCHES':
      //   return {
      //     ...state,
      //     // matches: [],
      //     loading: true
      //   }
  
      // case  "ADD_PLAYER_MATCHES": 
      //   console.log("action player " + JSON.stringify(action.player));
      //   return {
      //     ...state,
      //     matches: action.matches,
      //     loading: 'success'
      //   }

      // case 'ADD_PLAYER_MATCHES_FAILURE':
      //   return {
      //       ...state,
      //       // matches: [],
      //       loading: false,
      //       error: action.error
      //   }

      // case 'FIND_PLAYER_GOD_RANKS':
      //   return {
      //     loading: true,
      //     god_ranks: action.god_ranks
      //   }
    
      // case  "ADD_PLAYER_GOD_RANKS": 
      //   console.log("action player " + JSON.stringify(action.player));
      //   return {
      //     ...action.player,
      //     loading: 'success'
      //   }
  
      // case 'ADD_PLAYER_GOD_RANKS_FAILURE':
      //   return {
      //       ...state,
      //       loading: false,
      //       error: action.error
      //   }

      case 'FIND_PLAYER_ACHIEVEMENTS':
        return {
          loading: true,
          god_ranks: action.god_ranks
        }
    
      case  "ADD_PLAYER_ACHIEVEMENTS": 
        // console.log("action player " + JSON.stringify(action.player));
        return {
          ...state,
          achievements: action.achievements,
          loading: 'success'
        }
  
      case 'ADD_PLAYER_ACHIEVEMENTS_FAILURE':
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