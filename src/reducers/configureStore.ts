import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import counterReducer from './counter/counter';

const rootReducer = combineReducers({
  counterReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;
