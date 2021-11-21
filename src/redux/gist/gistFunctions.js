import GistApi from '../../api/gistApi';

const makeGETCall = (url) => {
    return fetch(url).then((rawResponse) => {
        if(rawResponse.ok) {
            return rawResponse.json();
        } else {
            throw new Error(rawResponse.status);
        }
    })
}

const beforeCallAllGists = () => {
    return {
        type: 'BEFORE_ALL_GISTS'
    }
}

const beforeCallSingleGist = () => {
    return {
        type: 'BEFORE_SINGLE_GIST'
    }
}

const onSuccessAllGists = (dataObj, username) => {
    return {
        type: 'ALL_GISTS_SUCCESS',
        payload: dataObj,
        username: username,
        isLoading: false
    }
}

const onSuccessSingleGist = (dataObj) => {
    return {
        type: 'SINGLE_GIST_SUCCESS',
        payload: dataObj,
        isLoading: false
    }
}


const onFailureAllGists = (err) => {
    return {
        type: 'ALL_GISTS_ERROR',
        errorMsg: err,
        isLoading: false
    }
}

const onFailureSingleGist = (err) => {
    return {
        type: 'SINGLE_GIST_ERROR',
        errorMsg: err,
        isLoading: false
    }
}

const fetchAllGists = (username) => {
    return function(dispatch) {
        dispatch(beforeCallAllGists());
        return makeGETCall(GistApi.getAllGistUrl(username)).then((res) => {
            if(res.length) {
                dispatch(onSuccessAllGists(res, username));
            } else {
                dispatch(onFailureAllGists(`We didn't find any Gists  for ${username}`));
            }
        }).catch((err) => {
            dispatch(onFailureAllGists(`There are some problems regarding the call :(`));
        });
    }
}

const fetchSingleGist = (gistId) => {
    return function(dispatch) {
        dispatch(beforeCallSingleGist());
        return makeGETCall(GistApi.getSingleGistUrl(gistId)).then((res) => {
            if(res.forks.length) {
                dispatch(onSuccessSingleGist(res));
            } else {
                dispatch(onFailureSingleGist(`We didn't find any forks.`));
            }
        }).catch((err) => {
            dispatch(onFailureSingleGist(`There are some problems regarding the call :(`));
        });
    }
}

export {
    fetchAllGists,
    fetchSingleGist
};