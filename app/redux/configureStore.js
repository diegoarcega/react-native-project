import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const composed = compose(applyMiddleware(thunk));


const configureStore = () => {
	return createStore(rootReducers, composed)
};

export default configureStore;
