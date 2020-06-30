const initialState = {
    builds: [],
    loading: false,
}

function buildsReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_ADDING_BUILDS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_BUILDS':
            return {
                builds: [...action.builds],
                loading: 'success'
            }
        case 'ADD_BUILDS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'START_POST_BUILD_REQUEST':
            return {
                ...state,
                builds: [...state.builds],
                loading: true
            }
        case "POST_BUILD":
            return {
                ...state, 
                builds: [...state.builds, action.build],
                loading: 'success',
            };
        case 'POST_BUILD_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'START_DELETING_BUILD_REQUEST':
            return {
                ...state,
                 builds: [...state.builds],
                loading: true
            }
        case "DELETE_BUILD":
            return {
                ...state, 
                builds: [...action.build],
                loading: 'success'
            };
        case 'DELETE_BUILD_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
      default:
        return state;
    }
  };

  export default buildsReducer;