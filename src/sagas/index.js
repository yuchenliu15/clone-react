import {takeEvery, all} from 'redux-saga';



function *watchAll() {
    yield all([
        takeEvery()
    ]);
}


