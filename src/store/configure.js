
///
///	NOTE Here we are assuming that we will be using asynch action creators - hence the use of reduxThunk and applyMiddleware
///

import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose (
            applyMiddleware(reduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
  
    return store;
}