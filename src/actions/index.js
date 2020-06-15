import {ADD_EMAIL, ADD_EMAIL_ERROR} from '../contants';

const doAddEmail = email => ({
    type: ADD_EMAIL,
    newEmail: email
});

const doAddEmailError = () => ({
    type: ADD_EMAIL_ERROR,
});

export {
    doAddEmail,
    doAddEmailError
};
