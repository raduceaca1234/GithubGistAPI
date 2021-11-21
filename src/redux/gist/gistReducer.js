import { combineReducers } from 'redux';

const initialStateAllGists = {
    username: '',
    isLoading: false,
    error: null,
    gists: [],
}

const allGistsReducer = (state = initialStateAllGists, action) => {
    switch(action.type) {
        case 'BEFORE_ALL_GISTS':
            return {...state, gists: [], isLoading: true, username: '', error: null};
        case 'ALL_GISTS_SUCCESS':
            return {...state, gists: [...action.payload], isLoading: false, username: action.username, error: null}
        case 'ALL_GISTS_ERROR':
            return {...state, gists: [], isLoading: false, username: action.username, error: action.errorMsg};
        default:
            return state;
    }
}

const initialStateSingleGist = {
    forks: [],
    isLoading: false,
    error: null,
}

const singleGistReducer = (state = initialStateSingleGist, action) => {
    switch(action.type) {
        case 'BEFORE_SINGLE_GIST':
            return {...state, isLoading: true, error: null, forks: []};
        case 'SINGLE_GIST_SUCCESS':
            return {...state, isLoading: false, error: null, forks: [...action.payload.forks]}
        case 'SINGLE_GIST_ERROR':
            return {...state, isLoading: false, error: action.errorMsg, forks: []};
        default:
            return state;
    }
}

const rootReducer = combineReducers({allGistsReducer, singleGistReducer});
export default rootReducer;