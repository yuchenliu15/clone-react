import {ADD_EMAIL} from '../actions';

const doAddEmail = email => ({
    type: ADD_EMAIL,
    email
});

export {
    doAddEmail
};
