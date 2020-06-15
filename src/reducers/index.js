import { combineReducers } from 'redux';
import { ADD_EMAIL } from '../contants';
import Firebase from '../components/Firebase';

const firebase = new Firebase();
const FORM_STATE = {
    emails: [],
    error: null
};

const applyAddEmail = (state, action) => {
    const re = /^[A-Za-z.]+@[A-Za-z.]*\.[A-Za-z.]*/;
    const email = action.newEmail;

    if (re.test(email)) {
        firebase.addSubscriber(email);
        return ({
            emails: [...state.emails, email],
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
