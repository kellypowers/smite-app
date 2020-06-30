export const START_ADDING_BUILDS_REQUEST = 'START_ADDING_BUILDS_REQUEST';
export const ADD_BUILDS = 'ADD_BUILDS';
export const ADD_BUILDS_FAILURE = 'ADD_BUILDS_FAILURE';

export const START_POST_BUILD_REQUEST = 'START_POST_BUILD_REQUEST';
export const POST_BUILD = 'POST_BUILD';
export const POST_BUILD_FAILURE = 'POST_BUILD_FAILURE';

export const START_DELETING_BUILDS_REQUEST = 'START_DELETING_BUILDS_REQUEST';
export const DELETE_BUILDS = 'DELETE_BUILDS';
export const DELETE_BUILD_FAILURE = 'DELETE_BUILD_FAILURE';

   
export function fetchBuilds() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_BUILDS_REQUEST' });
    fetch('http://localhost:3000/god_builds')
      .then(response => response.json())
      .then(builds => dispatch({ type: 'ADD_BUILDS', builds }));
  };
}

export function postBuild(build, ownProps) {
  return (dispatch) => {
    dispatch({ type: 'START_POST_BUILD_REQUEST' });
    fetch('http://localhost:3000/god_builds', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        build
      })
    })
    .then(response => response.json())
    .then(build => {
      dispatch({ type: 'POST_BUILD', build });
      return (window.location = `http://localhost:3001/builds/${build.id}`)
    })
    .catch(error => console.log(error.message))
  };
}
  
export function deleteBuild(buildid) {
  return (dispatch) => {
    dispatch({ type: 'START_DELETING_BUILD_REQUEST' });
    fetch(`http://localhost:3000/god_builds/${buildid}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "DELETE",
      body: JSON.stringify({
        buildid
      })
    })
    .then(response => response.json())
    .then(build => {
      console.log("build is " + build)
      dispatch({ type: 'DELETE_BUILD', build })
    })
    .catch(error => {
      console.log(error.message)
      dispatch({ type: 'DELETE_BUILD_FAILURE', error })
    })
  };
}