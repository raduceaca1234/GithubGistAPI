export const getSingleGistUrl = (gistId) => {
    return `${process.env.REACT_APP_BASE_URL}/gists/${gistId}`
}

export const getAllGistUrl = (username) => {
    return `${process.env.REACT_APP_BASE_URL}/users/${username}/gists`;
}

export default {
    getSingleGistUrl,
    getAllGistUrl
};