export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const DELETE_USERS_REQUEST = 'DELETE_USERS_REQUEST';


export const addUserRequest = (user) => ({
    type: ADD_USER_REQUEST,
    payload: user,
});

export const addUserSuccess = (user) => ({
    type: ADD_USER_SUCCESS,
    payload: user,
});

export const addUserFailure = (error) => ({
    type: ADD_USER_FAILURE,
    payload: error,
});

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const deleteUserRequest = (userName) => ({
    type: DELETE_USERS_REQUEST,
    payload: userName
});
