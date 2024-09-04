import { all } from 'redux-saga/effects';
import { watchLoginSaga } from './authSaga';
import { watchAddUserSaga, watchDeleteUserSata } from './userSaga';

export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchAddUserSaga(),
        watchDeleteUserSata
    ]);
}
