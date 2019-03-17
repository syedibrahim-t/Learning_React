import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_PLAYERS_FAILED, 
    REQUEST_PLAYERS_PENDING, 
    REQUEST_PLAYERS_SUCCESS 
} from "./constants";

const initialStateSearch = {
    searchField: ''
};

const initialStateRequestPlayers = {
    error: '',
    players: [],
    isPending: false
}

export const searchPlayersReducer = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}

export const requestPlayersReducer = (state=initialStateRequestPlayers, action={}) => {
    switch (action.type) {
        case REQUEST_PLAYERS_PENDING:
            return {...state, isPending: true}
        case REQUEST_PLAYERS_SUCCESS:
            return {...state, isPending: false, players: action.payload}
        case REQUEST_PLAYERS_FAILED:
            return {...state, isPending: false, error: action.payload}
        default:
            return state;
    }
}