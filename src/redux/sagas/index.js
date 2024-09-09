import { all } from 'redux-saga/effects';
import { watchLoginSaga } from './authSaga';
import { watchAddUserSaga, watchDeleteUserSaga, watchEditUserSaga } from './userSaga';

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchAddUserSaga(),
        watchDeleteUserSaga(),
        watchEditUserSaga(),
    ]);
}
