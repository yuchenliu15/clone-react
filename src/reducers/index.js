import { combineReducers } from 'redux';
import { ADD_EMAIL, ADD_EMAIL_ERROR } from '../contants';

const FORM_STATE = {
    emails: [],
    error: null
};

const applyAddEmail = (state, action) => {
    return {
        emails: [...state.emails, action.newEmail],
        error: false
    };
}

const applyAddEmailError = (state, action) => {
    return {
        emails: state.emails,
        error: true
    };
}

const formReducer = (state = FORM_STATE, action) => {
    switch (action.type) {
        case ADD_EMAIL: {
            return applyAddEmail(state, action);
        }
        case ADD_EMAIL_ERROR: {
            return applyAddEmailError(state, action);
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    formState: formReducer
});

export default rootReducer;
