import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App'
import playerReducer from './reducers';
 
const store = createStore(playerReducer, applyMiddleware(thunk));
 
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('container')
)