import {takeEvery, all} from 'redux-saga/effects';
import {handleStoreEmail} from './email';
import {STORE_EMAIL} from '../contants';


function *watchAll() {
    yield all([
        takeEvery(STORE_EMAIL, handleStoreEmail)
    ]);
}

export default watchAll;
