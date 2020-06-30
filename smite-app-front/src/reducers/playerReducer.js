const initialState = {
    loading: false
}

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_ADDING_PLAYER_REQUEST':
      return {
        loading: true
      }
    case  "ADD_PLAYER": 
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
    case 'FIND_PLAYER_ACHIEVEMENTS':
      return {
        loading: true,
        god_ranks: action.god_ranks
      }
    case  "ADD_PLAYER_ACHIEVEMENTS": 
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