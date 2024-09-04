import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../actions/authActions';

function* loginSaga(action) {
    try {
        const user = yield call(apiLogin, action.payload); // Giả sử apiLogin là một hàm gọi API
        yield put(loginSuccess(user));
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}

// Giả sử bạn có một hàm gọi API như sau:
const apiLogin = (credentials) => {
    // Thực hiện lời gọi API để đăng nhập
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.username === 'user' && credentials.password === 'pass') {
                resolve({ id: 1, name: 'User' });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
};
