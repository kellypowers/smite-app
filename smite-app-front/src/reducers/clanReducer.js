const initialState = {
    loading: false

}

function clanReducer(state = initialState, action) {
    switch (action.type) {
      case 'START_ADDING_CLAN_REQUEST':
        return {
          loading: true
        }

      case  "ADD_CLAN": 
        // console.log("action clan " + JSON.stringify(action.clan));
        // console.log("")
        return {
          ...action.clan,
          loading: 'success'
        }

      case 'ADD_CLAN_FAILURE':
        return {
            ...state,
            loading: false,
            error: action.error
        }

      default:
        return state;
    }
  }
  export default clanReducer;