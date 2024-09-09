import { takeLatest, call, put } from 'redux-saga/effects';
import { 
  ADD_USER_REQUEST, addUserSuccess,
  addUserFailure, fetchUsersSuccess,
  deleteUserRequest, DELETE_USERS_REQUEST, 
  EDIT_USER_REQUEST, editUserRequest } from '../actions/userAction';

// Mock API call
const apiAddUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.name && user.email && user.password) {
        const userId = new Date().getMilliseconds();
        resolve({
          ...user,
          id: userId
        }); // Success
      } else {
        reject(new Error('Failed to add user')); // Failure
      }
    }, 1000);
  });
};

// mock API call
const apiDeleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve(userId); // Success
      } else {
        reject(new Error('Failed to delete user')); // Failure
      }
    }, 1000);
  });
};

/// mock API call
const apiEditUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.id && user.name) {
        resolve(user); // Success
      } else {
        reject(new Error('Failed to delete user')); // Failure
      }
    }, 1000);
  }); 
}

function* editUserSaga(action) {
  try {
    const user = yield call(apiEditUser, action.payload);
    yield put(editUserRequest(user));
  } catch (error) {
    // here
  }
}

function* deleteUserSaga(action) {
  try {
    const userId = yield call(apiDeleteUser, action.payload);
    yield put(deleteUserRequest(userId));
  } catch (error) {
    // catch here
  }
}

function* addUserSaga(action) {
  try {
    const user = yield call(apiAddUser, action.payload);
    yield put(addUserSuccess(user));
  } catch (error) {
    yield put(addUserFailure(error.message));
  }
}

// Add this saga if you have an API to fetch users
function* fetchUsersSaga() {
    try {
      const users = yield call(() => Promise.resolve([])); // Mock fetch
      yield put(fetchUsersSuccess(users));
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  }
  
// Add this line to watch fetch users
export function* watchFetchUsersSaga() {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsersSaga);
}


export function* watchAddUserSaga() {
  yield takeLatest(ADD_USER_REQUEST, addUserSaga);
}

export function* watchDeleteUserSaga() {
  yield takeLatest(DELETE_USERS_REQUEST, deleteUserSaga);
}

export function* watchEditUserSaga() {
  yield takeLatest(EDIT_USER_REQUEST, editUserSaga);
}