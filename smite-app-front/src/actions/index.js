export const addPlayer = player => {
    return {
      type: 'ADD_PLAYER',
      player
    };
  };
  
  export const removePlayer = id => {
    return {
      type: 'REMOVE_PLAYER',
      id
    };
  };
  

