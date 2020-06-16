import {put, call} from 'redux-saga/effects';
import Firebase from '../components/Firebase';
import {doStoreEmailSuccess, doStoreEmailError} from '../actions';

const firebase = new Firebase();

function *handleStoreEmail(action) {
    const email = action.newEmail;
    try {
        const result = yield call(firebase.addSubscriber,firebase.db, email);
        yield put(doStoreEmailSuccess(result));
    }
    catch(e) {
        yield put(doStoreEmailError(e));
    }
}

export {
    handleStoreEmail
};
