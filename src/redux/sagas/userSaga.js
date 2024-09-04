import { takeLatest, call, put } from 'redux-saga/effects';
import { ADD_USER_REQUEST, addUserSuccess, addUserFailure, fetchUsersSuccess, deleteUserRequest, DELETE_USERS_REQUEST } from '../actions/userAction';

// Mock API call
const apiAddUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.name && user.email && user.password) {
        resolve(user); // Success
      } else {
        reject(new Error('Failed to add user')); // Failure
      }
    }, 1000);
  });
};

// mock API call
const apiDeleteUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName) {
        resolve(userName); // Success
      } else {
        reject(new Error('Failed to delete user')); // Failure
      }
    }, 1000);
  });
};

function* deleteUserSaga(action) {
  try {
    const userName = yield call(apiDeleteUser, action.payload);
    yield put(deleteUserRequest(userName));
  } catch (error) {
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

export function* watchAddUserSaga() {
  yield takeLatest(ADD_USER_REQUEST, addUserSaga);
}

export function* watchDeleteUserSata() {
  yield takeLatest(DELETE_USERS_REQUEST, deleteUserSaga);
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
