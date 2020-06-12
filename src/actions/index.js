import {ADD_EMAIL} from '../contants';

const doAddEmail = email => ({
    type: ADD_EMAIL,
    newEmail: email
});

export {
    doAddEmail
};
