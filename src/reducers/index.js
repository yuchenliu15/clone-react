import {combineReducers} from 'redux';
import {ADD_EMAIL} from '../contants';

const FORM_STATE = [];

const applyAddEmail = (state, action) => [...state, action.newEmail];

const formReducer = (state=FORM_STATE, action) => {
    switch(action.type) {
        case ADD_EMAIL: {
            return applyAddEmail(state, action);
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    formReducer: formReducer
});

export default rootReducer;
