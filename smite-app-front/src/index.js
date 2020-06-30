import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App'
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root')
)