import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    FETCH_USERS_SUCCESS,
    DELETE_USERS_REQUEST
  } from '../actions/userAction';
  
  const initialState = {
    loading: false,
    users: [], // Initialize as an empty array
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: [...state.users, action.payload], // Add new user to list
        };
      case ADD_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
        };
      case DELETE_USERS_REQUEST:
        return {
          ...state,
          users: state.users.filter(user => user.name !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  