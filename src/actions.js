import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_PLAYERS_FAILED, 
    REQUEST_PLAYERS_PENDING, 
    REQUEST_PLAYERS_SUCCESS 
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
});

export const requestPlayers = () => (dispatch) => {
    dispatch({
        type: REQUEST_PLAYERS_PENDING
    });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(players => dispatch({
        type: REQUEST_PLAYERS_SUCCESS,
        payload: players
    }))
    .catch(error => dispatch({
        type: REQUEST_PLAYERS_FAILED,
        payload: error
    }))
}