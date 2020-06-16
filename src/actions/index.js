import {ADD_EMAIL, ADD_EMAIL_ERROR, STORE_EMAIL, STORE_EMAIL_ERROR, STORE_EMAIL_SUCCESS} from '../contants';

const doAddEmail = email => ({
    type: ADD_EMAIL,
    newEmail: email
});

const doAddEmailError = () => ({
    type: ADD_EMAIL_ERROR,
});

const doStoreEmail = email => ({
    type: STORE_EMAIL,
    newEmail: email
});

const doStoreEmailError = error => ({
    type: STORE_EMAIL_ERROR,
    error
});

const doStoreEmailSuccess = result => ({
    type: STORE_EMAIL_SUCCESS,
    result
});

export {
    doAddEmail,
    doAddEmailError,
    doStoreEmail,
    doStoreEmailError,
    doStoreEmailSuccess
};
