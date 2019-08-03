import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import counterReducer from './counter/counter';
import songsReducer from './songs/songs';
import audioReducer from './audio/audio';

const rootReducer = combineReducers({
  counterReducer,
  songsReducer,
  audioReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;
