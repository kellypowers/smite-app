// const initialState = {
//     gods: [],
//     loading: false
// }

function godsReducer(state ={gods: [], loading: false}, action) {
    let idx;
    switch (action.type) {
   
        case 'START_ADDING_GODS_REQUEST':
            return {
                ...state,
                // gods: [...state.gods],
                loading: true
            }
   
        case 'ADD_GODS':
            return {
                // ...state,
                gods: action.gods,
                loading: 'success'
            }

        case 'ADD_GODS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                // gods: []
            }

        // case "FIND_GOD":
        //     console.log(` action is ${JSON.stringify(action)}`)
        //     let idx = state.gods.findIndex(god => god.name.toLowerCase() === action.name.toLowerCase() );
        //     console.log(idx)
        //     if (idx || idx==0) {
        //         console.log("state gods in reducer " + JSON.stringify(state))
        //         return {...state, gods: [state.gods[idx]]}
        //     } else {
        //         return state }

        // case "FIND_GOD_BY_ROLE":
        //     console.log(` action is ${JSON.stringify(action.role)}`)
        //     console.log(` state.gods in reducer is ${JSON.stringify(state.gods)}`)
        //     let godRoles = state.gods.filter(god => (god.roles) === action.role )
        //     console.log(`godRoles are ${godRoles}`)
        //     if (godRoles.length > 0) {
        //         return {...state,  gods: godRoles};
        //     } else {return state}
            
                    

        // case "FIND_GOD_BY_PANTHEON":
        //     console.log(` action is ${JSON.stringify(action)}`)
        //     let godsPantheon = state.gods.filter(god => god.pantheon === action.pantheon );
        //     if (godsPantheon.length > 0) {
        //         return {...state, gods: godsPantheon}
        //     } else {return state}
   
      default:
        return state;
    }
  };

  export default godsReducer;