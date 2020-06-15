import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const saga = createSagaMiddleware();
const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(saga, logger)
);

//saga.run();

export default store;
