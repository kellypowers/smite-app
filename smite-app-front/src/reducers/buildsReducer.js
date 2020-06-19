const initialState = {
    // builds: [],
    loading: false
}

function buildsReducer(state = initialState, action) {
    let idx;
    switch (action.type) {
   
        case 'START_ADDING_BUILDS_REQUEST':
            return {
                ...state,
                // builds: [...state.builds],
                loading: true
            }
   
        case 'ADD_BUILDS':
            return {
                ...action.builds,
                loading: 'success'
            }

        case 'ADD_BUILDS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
                // builds: []
            }

        case "ADD_BUILD":
            console.log("state is " + JSON.stringify(state))
            return {
                
                ...state, 
                ...action.build,
                loading: 'success'
            };
        case "REMOVE_BUILD": 
            idx = state.builds.findIndex(build => build.id === action.id);
            return [...state.builds.slice(0, idx), ...state.builds.slice(idx+1)];

   
      default:
        return state;
    }
  };

  export default buildsReducer;