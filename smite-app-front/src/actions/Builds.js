export const START_ADDING_BUILDS_REQUEST = 'START_ADDING_BUILDS_REQUEST';
export const ADD_BUILDS = 'ADD_BUILDS';
export const ADD_BUILDS_FAILURE = 'ADD_BUILDS_FAILURE';
export const POST_BUILD = 'POST_BUILD';
   
export function fetchBuilds() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_BUILDS_REQUEST' });
      fetch('http://localhost:3000/builds')
        .then(response => response.json())
        .then(builds => dispatch({ type: 'ADD_BUILDS', builds }));
    };
  }

  export function postBuilds(thisBuild) {
    return (dispatch) => {
        dispatch({ type: 'POST_BUILD' });
        fetch('http://localhost:3000/builds', {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            thisBuild
        })
     })
          .then(response => response.json())
          .then(build => dispatch({ type: 'POST_BUILD', build }));
      };
    }
  
  }