import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '_reducers';
import { authHandler } from '_sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authHandler)

export { store };