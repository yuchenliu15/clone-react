import { combineReducers } from 'redux';
import { ADD_EMAIL } from '../contants';

const FORM_STATE = {
    emails: [],
    error: null
};

const applyAddEmail = (state, action) => {
    const re = /^[A-Za-z.]+@[A-Za-z.]*\.[A-Za-z.]*/;
    
    if (re.test(action.newEmail)) {
        return ({
            emails: [...state.emails, action.newEmail],
            error: false
        });
    }
    else {
        return ({
            emails: state.emails,
            error: true
        });
    }
};

const formReducer = (state = FORM_STATE, action) => {
    switch (action.type) {
        case ADD_EMAIL: {
            return applyAddEmail(state, action);
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    formState: formReducer
});

export default rootReducer;
