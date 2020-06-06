export function addPlayer(player) {
    return {
      type: 'ADD_PLAYER',
      player
    };
  };

export const deletePlayer = (id) => {
    return {
        type: 'DELETE_PLAYER',
        id
    };
};

export const findGod = (name) => {
  return {
    type: "FIND_GOD",
    name
}
};
  
export const findGodByPantheon = (pantheon) => {
  return {
    type: "FIND_GOD_BY_PANTHEON",
    pantheon
}
};

export const findGodByRole = (role) => {
  return {
    type: "FIND_GOD_BY_ROLE",
    role
}
};
  
