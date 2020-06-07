const initialState = {
    items: [],
    loading: false
}

function itemsReducer(state = initialState, action) {
    let idx;
    switch (action.type) {
   
        case 'START_ADDING_ITEMS_REQUEST':
            return {
                ...state,
                items: [...state.items],
                loading: true
            }
   
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.items,
                loading: false
            }

        case 'ADD_ITEMS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
                items: []
            }

        case "FIND_ITEM":
            console.log(` action is ${JSON.stringify(action)}`)
            let idx = state.items.findIndex(item => item.name.toLowerCase() === action.name.toLowerCase() );
            console.log(idx)
            if (idx || idx==0) {
                console.log("state items in reducer " + JSON.stringify(state.items[idx]))
                return {items: [state.items[idx]]}
            } else {
                return state }

   
      default:
        return state;
    }
  };

  export default itemsReducer;