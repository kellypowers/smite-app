export const FIND_MATCH_DETAILS = 'FIND_MATCH_DETAILS';
export const ADD_MATCH_DETAILS = 'ADD_MATCH_DETAILS_FAILURE';
export const ADD_MATCH_DETAILS_FAILURE = 'ADD_MATCH_DETEAILS_FAILURE';

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
        // let player1 = player[0];
        console.log("match is " + JSON.stringify(match))
        dispatch({ type: 'ADD_MATCH_DETAILS', match});
        // return player
        })
        .catch(error => console.log(error.message))
    };
}