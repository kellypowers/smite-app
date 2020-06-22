const initialState = {
    builds: [],
    loading: false,
    // redirect: null
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
                builds: [...action.builds],
                loading: 'success'
            }

        case 'ADD_BUILDS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
                // builds: []
            }

        case 'START_POST_BUILD_REQUEST':
            return {
                ...state,
                builds: [...state.builds],
                loading: true
        }
        case "POST_BUILD":
            console.log( "action.build is " + JSON.stringify(action.build))
            return {
                ...state, 
                builds: [...state.builds, action.build],
                loading: 'success',
                // redirect: '/builds'
            };
        case 'POST_BUILD_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
        };
        // case "REMOVE_BUILD": 
        //     console.log("in reducer, actions is " + JSON.stringify(action) + "state is " + JSON.stringify(state))
        //     return {...state, builds: state.builds.filter(build => build.id !== action.id)}
        case 'START_DELETING_BUILD_REQUEST':
            return {
                ...state,
                 builds: [...state.builds],
                loading: true
        }
        case "DELETE_BUILD":
            console.log("state is " + JSON.stringify(state))
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