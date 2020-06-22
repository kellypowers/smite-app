export function addPlayer(playerId, portalId) {
    return {
      type: 'ADD_PLAYER',
      playerId,
      portalId
    };
  };

export const addPlayerMatches = (id) => {
    return {
        type: 'ADD_PLAYER_MATCH',
        id
    };
};

export const findGod = (name) => {
  return {
    type: "FIND_GOD",
    name
}
};
export const REDIRECT = "REDIRECT";


export const redirect = link => {
  console.log("=== REDIRECT ACTION DISPATCHED ===");
  return { type: 'REDIRECT', payload: link };
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

export const addMatchDeets = (match) => {
  return {
    type: "ADD_MATCH_DETAILS",
    match
}
};

export const addGodRanks = (god_ranks) => {
  return {
    type: "ADD_PLAYER_GOD_RANKS",
    god_ranks
}
};