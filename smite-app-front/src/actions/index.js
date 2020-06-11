export function addPlayer(playerId, portalId) {
    return {
      type: 'ADD_PLAYER',
      playerId,
      portalId
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
  
export const findItem = (name) => {
  return {
    type: "FIND_ITEM",
    name
}
};

// export const postBuild = (build) => {
//   return {
//     type: "POST_BUILD",
//     build
// }
// };

// export const addBuilds = (builds) => {
//   return {
//     type: "ADD_BUILDS",
//     builds
// }
// };

export const addBuild = (build) => {
  return {
    type: "ADD_BUILD",
    build
}
};