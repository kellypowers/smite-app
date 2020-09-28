export const FIND_MATCH_DETAILS = 'FIND_MATCH_DETAILS';
export const ADD_MATCH_DETAILS = 'ADD_MATCH_DETAILS_FAILURE';
export const ADD_MATCH_DETAILS_FAILURE = 'ADD_MATCH_DETAILS_FAILURE';

export function fetchMatchDetails(matchid) {
    return (dispatch) => {
        dispatch({ type: 'FIND_MATCH_DETAILS' });
        fetch('http://localhost:3000/get_match_details', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                 matchid
            })
        })
        .then(response => response.json())
        .then(match => {
        dispatch({ type: 'ADD_MATCH_DETAILS', match});
        })
        .catch(error => {
            dispatch({ type: 'ADD_MATCH_DETAILS_FAILURE', error})
            console.log(error.message)})
    };
}