import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux' ;
import createSagaMiddleware from 'redux-saga' ; 

import reducers from './reducer' ;
import rootSaga from './sagas';

//! Initialize Saga-middleware
const sagaMiddleware = createSagaMiddleware();

//! Delare all middleware
const middleWares = [
    sagaMiddleware
] ;

//! Setting Middleware
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

//! create Store 
const store = createStore (
    combineReducers ({
        ...reducers
    }),
    composeEnhancers(applyMiddleware(...middleWares))
) ;

sagaMiddleware.run(rootSaga) ;

//! export
export default store ;
